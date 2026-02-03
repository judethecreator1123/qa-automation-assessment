import { chromium } from '@playwright/test';

async function loginViaUi() {
    const browser = await chromium.launch({
        headless: process.env.HEADLESS !== 'false'
    });

    try {
        const page = await browser.newPage();
        await page.goto('https://www.saucedemo.com/');
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        await page.context().storageState({ path: 'auth.json' });
        console.log('Login Successful! Session saved to auth.json');
    } finally {
        await browser.close();
    }

}

export default loginViaUi;
