const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  loadCRNData: () => ipcRenderer.invoke('load-crn-data'),
  saveCRNData: (data) => ipcRenderer.invoke('save-crn-data', data),
  loadSettings: () => ipcRenderer.invoke('load-settings'),
  saveSettings: (settings) => ipcRenderer.invoke('save-settings', settings),
  runPuppeteer: (crnList) => ipcRenderer.invoke('run-puppeteer', crnList),
  getToken: () => ipcRenderer.invoke('get-token'),
});