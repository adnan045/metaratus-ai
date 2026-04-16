import fs from 'fs';
import path from 'path';

const LOG_FILE = path.join(process.cwd(), 'leads.json');

export async function saveLead(data) {
  try {
    let leads = [];
    if (fs.existsSync(LOG_FILE)) {
      const content = fs.readFileSync(LOG_FILE, 'utf8');
      leads = JSON.parse(content || '[]');
    }
    
    const newLead = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...data
    };
    
    leads.push(newLead);
    fs.writeFileSync(LOG_FILE, JSON.stringify(leads, null, 2));
    return newLead;
  } catch (error) {
    console.error('Error saving lead:', error);
    throw new Error('Failed to save lead data');
  }
}

export async function getLeadsAsCSV() {
  try {
    if (!fs.existsSync(LOG_FILE)) return '';
    const leads = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8') || '[]');
    if (leads.length === 0) return '';
    
    const headers = Object.keys(leads[0]);
    const rows = leads.map(lead => 
      headers.map(header => JSON.stringify(lead[header] || '')).join(',')
    );
    
    return [headers.join(','), ...rows].join('\n');
  } catch (error) {
    console.error('Error generating CSV:', error);
    return '';
  }
}
