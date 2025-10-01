import puppeteer from "puppeteer-core";
import findChrome from "chrome-finder";
import { exec } from "child_process";
import util from "util";
import fetch from "node-fetch";
import path from "path";
import { app } from "electron";

const execPromise = util.promisify(exec);
const remoteDebuggingPort = 9222;

async function startChrome() {
    const chromePath = findChrome();
    const userDataDir = path.join(app.getPath('userData'), 'chrome_user_data');

    console.log("Starting Chrome with path:", chromePath);
    console.log("Using user data directory:", userDataDir);

    try {
        await execPromise(
            `"${chromePath}" --remote-debugging-port=${remoteDebuggingPort} --user-data-dir="${userDataDir}"`
        );
    } catch (error) {
        console.log("Chrome may already be running or started in background:", error.message);
    }

    for (let i = 0; i < 10; i++) { 
        if (await isChromeRunning(remoteDebuggingPort)) {
            return;
        }
        await delay(1000);
    }
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

async function getToken() {
    console.log("Getting token...");
    
    if (!(await isChromeRunning(remoteDebuggingPort))) {
        console.log("Chrome not running, starting Chrome...");
        await startChrome();
    } else {
        console.log("Chrome already running");
    }

    const browserURL = `http://localhost:${remoteDebuggingPort}`;
    let browser;

    try {
        console.log("Connecting to browser at:", browserURL);
        browser = await puppeteer.connect({ browserURL });
    } catch (error) {
        console.error(error);
        return;
    }

    const page = await browser.newPage();
    console.log("Created new page");

    const { width, height } = await page.evaluate(() => {
        return {
            width: screen.availWidth,
            height: screen.availHeight
        };
    });

    await page.setViewport({ width, height });
    console.log("Set viewport to:", width, "x", height);

    try {
        console.log("Navigating to ITU OBS page...");
        await page.goto("https://www.sis.itu.edu.tr/TR/obs-giris/obs-giris.php", {
            waitUntil: "domcontentloaded",
        });
        console.log("Successfully navigated to ITU OBS page");
    } catch (error) {
        console.error("Failed to navigate to ITU OBS page:", error);
        await browser.close();
        return;
    }

    await page.setRequestInterception(true);
    const tokenPromise = new Promise((resolve) => {
        page.on("request", (request) => {
            const headers = request.headers();
            if (headers.authorization) {
                const token = headers.authorization.split(" ")[1];
                if (token) {
                    console.log("Token retrieved:", token);
                    resolve(token);
                }
            }
            request.continue();
        });
    });

    const token = await tokenPromise;

    await browser.close();
    return token;
}

async function getTokenWithCredentials(username, password) {
    console.log("Getting token with credentials...");
    
    const chromePath = findChrome();
    const userDataDir = path.join(app.getPath('userData'), 'chrome_user_data_headless');

    console.log("Starting headless Chrome with path:", chromePath);

    let browser;

    try {
        browser = await puppeteer.launch({
            executablePath: chromePath,
            headless: true,
            args: [
                `--user-data-dir=${userDataDir}`,
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu'
            ]
        });

        console.log("Headless Chrome launched");

        const page = await browser.newPage();
        console.log("Created new page");

        await page.setViewport({ width: 1920, height: 1080 });

        try {
            console.log("Navigating to Kepler...");
            await page.goto("https://kepler-beta.itu.edu.tr/", {
                waitUntil: "networkidle0",
                timeout: 30000
            });
            console.log("Successfully navigated to Kepler");

            await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 10000 }).catch(() => {});
            
            console.log("Filling in username...");
            await page.waitForSelector('#ContentPlaceHolder1_tbUserName', { timeout: 10000 });
            await page.type('#ContentPlaceHolder1_tbUserName', username);
            
            console.log("Filling in password...");
            await page.waitForSelector('#ContentPlaceHolder1_tbPassword', { timeout: 5000 });
            await page.type('#ContentPlaceHolder1_tbPassword', password);
            
            await page.setRequestInterception(true);
            const tokenPromise = new Promise((resolve, reject) => {
                const timeout = setTimeout(() => {
                    reject(new Error("Token retrieval timeout"));
                }, 60000);
                
                page.on("request", (request) => {
                    const headers = request.headers();
                    if (headers.authorization) {
                        const token = headers.authorization.split(" ")[1];
                        if (token) {
                            console.log("Token retrieved:", token);
                            clearTimeout(timeout);
                            resolve(token);
                        }
                    }
                    request.continue();
                });
            });
            
            console.log("Clicking login button...");
            await page.click('#ContentPlaceHolder1_btnLogin');
            
            const token = await tokenPromise;
            
            await browser.close();
            return token;
            
        } catch (error) {
            console.error("Failed during automatic login:", error);
            await browser.close();
            throw new Error("Automatic login failed: " + error.message);
        }
    } catch (error) {
        console.error("Failed to launch browser:", error);
        if (browser) {
            await browser.close();
        }
        throw new Error("Failed to start automated login: " + error.message);
    }
}

export default getToken;
export { getTokenWithCredentials };