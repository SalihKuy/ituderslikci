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
    console.error('Error reading token from settings:', error);
    return null;
  }
}

async function runOptimal(crnPages) {
  const token = await getTokenFromSettings();
  if (!token) {
    return {
      enrolled: [],
      failed: [],
      error: 'No authentication token available. Please launch Chrome and login first.'
    };
  }

  const url = "https://obs.itu.edu.tr/api/ders-kayit/v21";
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/json',
    'Origin': 'https://obs.itu.edu.tr',
    'Referer': 'https://obs.itu.edu.tr/',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
  };

  const priorityCRNs = {
    high: crnPages[1]?.filter(crn => crn.trim() !== '') || [],
    medium: crnPages[2]?.filter(crn => crn.trim() !== '') || [],
    low: crnPages[3]?.filter(crn => crn.trim() !== '') || []
  };

  const results = {
    enrolled: [],
    failed: [],
    pending: []
  };

  if (priorityCRNs.high.length > 0) {
    await attemptEnrollment(url, headers, priorityCRNs.high, results, 'HIGH');
    
    const highPriorityFailures = results.failed.filter(f => f.priority === 'HIGH').map(f => f.crn);
    if (highPriorityFailures.length > 0) {
      await attemptEnrollment(url, headers, highPriorityFailures, results, 'HIGH-RETRY');
    }
  }

  if (priorityCRNs.medium.length > 0) {
    await new Promise(resolve => setTimeout(resolve, 500));
    await attemptEnrollment(url, headers, priorityCRNs.medium, results, 'MEDIUM');
  }

  if (priorityCRNs.low.length > 0) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await attemptEnrollment(url, headers, priorityCRNs.low, results, 'LOW');
  }

  const remainingFailures = results.failed.filter(f => f.crn);
  if (remainingFailures.length > 0) {
    for (let attempt = 1; attempt <= 3; attempt++) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const highPriorityRetries = remainingFailures.filter(f => f.priority === 'HIGH').map(f => f.crn);
      const mediumPriorityRetries = remainingFailures.filter(f => f.priority === 'MEDIUM').map(f => f.crn);
      const lowPriorityRetries = remainingFailures.filter(f => f.priority === 'LOW').map(f => f.crn);
      
      if (highPriorityRetries.length > 0) {
        await attemptEnrollment(url, headers, highPriorityRetries, results, `FINAL-HIGH-${attempt}`);
      }
      if (mediumPriorityRetries.length > 0) {
        await attemptEnrollment(url, headers, mediumPriorityRetries, results, `FINAL-MEDIUM-${attempt}`);
      }
      if (lowPriorityRetries.length > 0) {
        await attemptEnrollment(url, headers, lowPriorityRetries, results, `FINAL-LOW-${attempt}`);
      }
      
      const newFailures = results.failed.map(f => f.crn);
      if (newFailures.length === 0) break;
    }
  }

  return results;
}

async function attemptEnrollment(url, headers, crns, results, phase) {
  if (crns.length === 0) return;

  const body = JSON.stringify({
    ECRN: crns,
    SCRN: []
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();

    if (responseData.ecrnResultList) {
      responseData.ecrnResultList.forEach(result => {
        results.failed = results.failed.filter(f => f.crn !== result.crn);
        
        if (isEnrollmentSuccessful(result)) {
          results.enrolled.push({
            crn: result.crn,
            phase: phase,
            timestamp: new Date().toISOString(),
            result: result
          });
        } else {
          results.failed.push({
            crn: result.crn,
            phase: phase,
            timestamp: new Date().toISOString(),
            result: result,
            priority: getPriorityFromPhase(phase)
          });
        }
      });
    }

  } catch (error) {
    console.error(`Error in ${phase} phase:`, error);
    crns.forEach(crn => {
      if (!results.enrolled.some(e => e.crn === crn)) {
        results.failed.push({
          crn: crn,
          phase: phase,
          timestamp: new Date().toISOString(),
          error: error.message,
          priority: getPriorityFromPhase(phase)
        });
      }
    });
  }
}

function getPriorityFromPhase(phase) {
  if (phase.includes('HIGH')) return 'HIGH';
  if (phase.includes('MEDIUM')) return 'MEDIUM';
  if (phase.includes('LOW')) return 'LOW';
  return 'UNKNOWN';
}

function isEnrollmentSuccessful(result) {
  return result.statusCode === 0 || (result.resultCode && !result.resultCode.startsWith('VAL'));
}

async function run(crnList) {
  return runOptimal(crnList);
}

export default run;
export { runOptimal };
