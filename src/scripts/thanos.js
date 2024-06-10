import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);
        const filteredContacts = contacts.filter(() => Math.random() >= 0.5);

        await fs.writeFile(PATH_DB, JSON.stringify(filteredContacts, null, 2));
        console.log(`${contacts.length - filteredContacts.length} contacts were removed.`);
    } catch (error) {
        console.error('Error snapping contacts:', error);
    }
};

await thanos();
