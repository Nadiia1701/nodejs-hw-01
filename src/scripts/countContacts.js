import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

async function countContacts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts.length;
  } catch (error) {
    console.error('Error reading contacts:', error);
    return 0;
  }
}

console.log(await countContacts());
