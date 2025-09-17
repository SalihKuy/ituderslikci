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
    // Use Electron's userData directory instead of process.cwd()
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

export default getToken;