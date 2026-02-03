import { test, expect } from '@playwright/test';

test('should be able to validate ui for inventory page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    // Assert if page is in inventory page
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    console.log('Successfully navigated to inventory page');

    await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeEnabled();
    console.log('Add to Cart button is clickable');

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toHaveCSS('color', 'rgb(226, 35, 26)');
    console.log('Font color is correct! rgb(226, 35, 26)');
});


