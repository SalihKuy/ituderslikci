import fs from 'fs/promises';
import path from 'path';
import fetch from 'node-fetch';
import { app } from 'electron';

const userDataPath = app.getPath('userData');
const settingsPath = path.join(userDataPath, 'settings.json');

async function getTokenFromSettings() {
  try {
    const data = await fs.readFile(settingsPath, 'utf-8');
    const settings = JSON.parse(data);
    return settings.token;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function run(crnList) {

  const token = await getTokenFromSettings();
  if (!token) {
    console.error('Failed to retrieve token');
    return;
  }

  const url = "https://obs.itu.edu.tr/api/ders-kayit/v21";

  for (const key in crnList) {
    const crns = crnList[key].filter(crn => crn.trim() !== '');

    if (crns.length === 0) {
      continue;
    }

    const body = JSON.stringify({
      ECRN: crns,
      SCRN: []
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: body
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  }
}

export default run;