import { test, expect } from '@playwright/test';
import { testData } from '../data/testData';

test('verify add to cart button is changed when clicked', async ({ page }) => {

    const data = testData();
    // Navigate to Inventory
    await page.goto(process.env.INVENTORYPAGE!);

    // Verify if page is in inventory page
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    console.log('Successfully navigated to inventory page');

    // Verify if Add to Cart button is clickable
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeEnabled();
    console.log('Add to Cart button is clickable');

    // Click Add to Cart Button
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    // Verify if button is changed to Remove 
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toHaveText('Remove');
    console.log(`Button is changed to ${data.removeButton}`)

    // Verify if button text is changed to Red 
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toHaveCSS('color', 'rgb(226, 35, 26)');
    console.log('Remove button Font color is changed to red.');

    // Test Passed
    console.log(`Test passed`)
});
    

