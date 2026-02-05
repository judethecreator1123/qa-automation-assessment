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
        const loginPage = new LoginPage(page);
        await loginPage.login(process.env.USERID!,process.env.PASSWORD! );
        await page.context().storageState({ path: 'auth.json' });
        console.log(`Login Successful! Session saved to`);
    } catch (error) {
        console.log('Unable to login',error)
    }

    await browser.close();

}

export default loginViaUi;