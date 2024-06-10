import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

async function removeAllContacts() {
  try {
    const emptyContacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts, null, 2));
    console.log('All contacts have been removed.');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
}

await removeAllContacts();
