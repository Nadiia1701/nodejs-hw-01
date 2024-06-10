import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);

        for (let i = 0; i < number; i++) {
            const newContact = createFakeContact();
            contacts.push(newContact);
        }
        
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
        console.log(`${number} contacts were successfully generated and added to ${PATH_DB}`);
    } catch (error) {
        console.error('Error generating contacts:', error);
    }
};

await generateContacts(5);
