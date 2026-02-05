import fs from 'node:fs/promises';
require('dotenv').config();

export default async function logout() {

        // Delete auth.json
        console.log('Deleting auth.json');
        try {
            await Promise.all([
                fs.rm('./auth.json').catch(() => { }),
            ]);
            console.log('Successfully deleted Auth.json');
        } catch (error) {
            console.error(`Error cleaning up files: ${error}`);
        }
    
        
}