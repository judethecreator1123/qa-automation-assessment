import { chromium } from '@playwright/test';
import path from 'path';
import { LoginPage } from '../pages/loginPage';
require('dotenv').config();

async function loginViaUi() {
    const browser = await chromium.launch({
        headless: process.env.HEADLESS !== 'false'
    });

    const page = await browser.newPage();

    // Navigate to project url
    await page.goto(process.env.BASEURL!);

    // Login
    try {
        const fs = require('fs');
        const authPath = path.resolve(__dirname, '../auth.json');
        console.log('Saving auth.json to:', authPath);

        await page.context().storageState({ path: authPath });
        console.log('File exists?', fs.existsSync(authPath));
    } catch (error) {
        console.log('Unable to login', error)
    }

    await browser.close();

}

export default loginViaUi;