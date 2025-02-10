import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';
import fs from 'fs/promises';
import run from './src/puppeteer.js';
import startChrome from './src/chrome.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const userDataPath = app.getPath('userData');
const crnDataPath = path.join(userDataPath, 'crnData.json');
const settingsPath = path.join(userDataPath, 'settings.json');

async function setupIpcHandlers() {
  ipcMain.handle('save-crn-data', async (_, data) => {
    try {
      await fs.writeFile(crnDataPath, JSON.stringify({
        crns: data,
        lastUpdated: new Date().toISOString()
      }));
      return true;
    } catch (error) {
      console.error('Failed to save CRN data:', error);
      return false;
    }
  });

  ipcMain.handle('load-crn-data', async () => {
    try {
      const data = await fs.readFile(crnDataPath, 'utf8');
      return JSON.parse(data).crns;
    } catch (error) {
      console.error('Failed to load CRN data:', error);
      return { 1: Array(12).fill(''), 2: Array(12).fill(''), 3: Array(12).fill('') };
    }
  });

  ipcMain.handle('save-settings', async (_, settings) => {
    try {
      await fs.writeFile(settingsPath, JSON.stringify(settings));
      return true;
    } catch (error) {
      console.error('Failed to save settings:', error);
      return false;
    }
  });

  ipcMain.handle('load-settings', async () => {
    try {
      const data = await fs.readFile(settingsPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Failed to load settings:', error);
      return { page: 1, language: 'en', date: new Date().toISOString() };
    }
  });

  ipcMain.handle('run-puppeteer', async (_, crnList) => {
    try {
      await run(crnList);
      return true;
    } catch (error) {
      console.error('Failed to run Puppeteer:', error);
      return false;
    }
  });

  ipcMain.handle('start-chrome', async () => {
    try {
      await startChrome();
      return true;
    } catch (error) {
      console.error('Failed to start Chrome:', error);
      return false;
    }
  });
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    },
  });

  mainWindow.maximize();
  mainWindow.show();

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, 'dist/renderer/index.html'));
  }

  mainWindow.on('closed', () => {
    app.quit();
  });
}

async function init() {
  try {
    await app.whenReady();
    await setupIpcHandlers();
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  } catch (error) {
    console.error('Failed to initialize app:', error);
    app.quit();
  }
}


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

init().catch(error => {
  console.error('Failed to start app:', error);
  app.quit();
});