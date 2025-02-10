import puppeteer from "puppeteer-core";
import findChrome from "chrome-finder";
import { exec } from "child_process";
import util from "util";
import process from "node:process";
import fetch from "node-fetch";

const execPromise = util.promisify(exec);

async function isChromeRunning(port, retries = 1, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(`http://localhost:${port}/json/version`);
      if (response.ok) return true;
    } catch (error) {
      console.error(error);
    }
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  return false;
}

async function strchr() {
  const chromePath = findChrome();
  const remoteDebuggingPort = 9222;
  const userDataDir = `${process.cwd()}/user_data`;

  try {
    await execPromise(
      `"${chromePath}" --remote-debugging-port=${remoteDebuggingPort} --user-data-dir=${userDataDir}`
    );
  } catch (error) {
    console.error("Failed to start Chrome:", error);
    throw error;
  }

  await new Promise((resolve) => setTimeout(resolve, 3000));
}

async function startChrome() {
  const remoteDebuggingPort = 9222;

  if (!(await isChromeRunning(remoteDebuggingPort))) {
    await strchr();
  }

  const browserURL = `http://localhost:${remoteDebuggingPort}`;
  try {
    const browser = await puppeteer.connect({ browserURL });
    return browser;
  } catch (error) {
    console.error("Failed to connect to Chrome:", error);
    throw error;
  }
}

export default startChrome;