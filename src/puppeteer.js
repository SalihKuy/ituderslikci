import puppeteer from "puppeteer-core";
import findChrome from "chrome-finder";
import { exec } from "child_process";
import util from "util";
import process from "node:process";
import fetch from "node-fetch";

const execPromise = util.promisify(exec);

async function startChrome() {
  const chromePath = findChrome();
  const remoteDebuggingPort = 9222;
  const userDataDir = `${process.cwd()}/user_data`;

  await execPromise(
    `"${chromePath}" --remote-debugging-port=${remoteDebuggingPort} --user-data-dir=${userDataDir}`
  );

  await new Promise((resolve) => setTimeout(resolve, 3000));
}

async function isChromeRunning(port) {
  try {
    const response = await fetch(`http://localhost:${port}/json/version`);
    return response.ok;
  } catch {
    return false;
  }
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run(crnList) {
  const remoteDebuggingPort = 9222;

  if (!(await isChromeRunning(remoteDebuggingPort))) {
    await startChrome();
  }

  const browserURL = `http://localhost:${remoteDebuggingPort}`;
  let browser;
  try {
    browser = await puppeteer.connect({ browserURL });
  } catch (error) {
    console.error("Failed to connect to browser:", error);
    return;
  }

  const pages = await browser.pages();
  const page = pages.length > 0 ? pages[0] : await browser.newPage();
  let attempts = 0;
  const maxAttempts = 10000;

  while (attempts < maxAttempts) {
    try {
      await delay(200);
  
      const inputs = await page.$$eval('form:not(.hidden) input[type="number"]', 
        elements => elements.map(el => ({
          visible: el.offsetParent !== null,
          disabled: el.disabled
        }))
      );
  
      if (inputs.length === 0) {
        attempts++;
        continue;
      }
  
      for (const [key, crn] of Object.entries(crnList)) {
        if (!Array.isArray(crn) || crn.length === 0) {
          continue;
        }
  
        let processed = false;
        let retries = 0;
        const maxRetries = 30;
  
        while (!processed && retries < maxRetries) {
          await page.evaluate(() => {
            document.querySelectorAll('form:not(.hidden) input[type="number"]').forEach(input => {
              input.value = '';
              input.dispatchEvent(new Event("input", { bubbles: true }));
            });
          });
  
          for (let i = 0; i < crn.length; i++) {
            const value = crn[i];
            if (!value) continue;
  
            await page.evaluate((index, val) => {
              const inputs = Array.from(document.querySelectorAll('form:not(.hidden) input[type="number"]'));
              if (inputs[index]) {
                inputs[index].value = val;
                inputs[index].dispatchEvent(new Event("input", { bubbles: true }));
                inputs[index].dispatchEvent(new Event("change", { bubbles: true }));
              }
            }, i, value);
          }
  
          let submitButton;
          let submitAttempts = 0;
          const maxSubmitAttempts = 3;
  
          while (!submitButton && submitAttempts < maxSubmitAttempts) {
            try {
              await page.waitForSelector('button[type="submit"]:not([disabled])', { visible: true, timeout: 250 });
              submitButton = await page.$('button[type="submit"]:not([disabled])');
            } catch (error) {
              console.error(error);
              submitAttempts++;
            }
          }
          const nonEmptyCrns = crn.filter(value => value.trim() !== '');
          if (!submitButton && nonEmptyCrns.length > 0) {
            await page.reload();
            await delay(1000);
            retries++;
            continue;
          }
  
          if (!submitButton) {
            break;
          }
  
          await submitButton.click();
        
          try {
            await page.waitForSelector('button.btn.ml-2.btn.btn-success', { 
              visible: true, 
              timeout: 1000 
            });
  
            const kaydetButton = await page.$('button.btn.ml-2.btn.btn-success');
            if (kaydetButton) {
              await kaydetButton.click();
  
              await delay(300);
              await page.reload();
              processed = true;
            }
          } catch (error) {
            console.error(`Error processing set ${key}:`, error);
          }
        }
      }
  
      return;
    } catch (error) {
      console.error("Attempt failed:", error);
      attempts++;
      await delay(1000);
  
      if (attempts >= maxAttempts) {
        console.error("Max attempts reached. Closing browser.");
        await browser.close();
        return;
      }
    }
  }
}

export default run;