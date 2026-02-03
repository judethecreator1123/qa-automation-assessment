import { test, expect, devices } from '@playwright/test';

test.use({
    ...devices['iPhone 12'], 
});

test('should be able to add to checkout an item via mobile page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    // Assert if page is in inventory page
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    console.log('Successfully navigated to inventory page');

    await test.step('Add an item to cart', async () => {

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');

    });

    await test.step('Checkout the item', async () => {

        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').fill('John');
        await page.locator('[data-test="lastName"]').fill('Doe');
        await page.locator('[data-test="postalCode"]').fill('6000');
        await page.locator('[data-test="continue"]').click();
        await expect(page.locator('[data-test="item-4-title-link"]')).toContainText('Sauce Labs Backpack');
        await page.locator('[data-test="finish"]').click();
        await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
        console.log('Successfully checked out the item!');
    });

});


