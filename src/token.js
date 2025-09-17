import puppeteer from "puppeteer-core";
import findChrome from "chrome-finder";
import { exec } from "child_process";
import util from "util";
import process from "node:process";
import fetch from "node-fetch";

const execPromise = util.promisify(exec);
const remoteDebuggingPort = 9222;

async function startChrome() {
    const chromePath = findChrome();
    const userDataDir = `${process.cwd()}/user_data`;

    execPromise(
        `"${chromePath}" --remote-debugging-port=${remoteDebuggingPort} --user-data-dir=${userDataDir}`
    );

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
    if (!(await isChromeRunning(remoteDebuggingPort))) {
        await startChrome();
    }

    const browserURL = `http://localhost:${remoteDebuggingPort}`;
    let browser;

    try {
        browser = await puppeteer.connect({ browserURL });
    } catch (error) {
        console.error(error);
        return;
    }

    const page = await browser.newPage();

    const { width, height } = await page.evaluate(() => {
        return {
            width: screen.availWidth,
            height: screen.availHeight
        };
    });

    await page.setViewport({ width, height });

    try {
        await page.goto("https://www.sis.itu.edu.tr/TR/obs-giris/obs-giris.php", {
            waitUntil: "domcontentloaded",
        });
    } catch (error) {
        console.error(error);
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