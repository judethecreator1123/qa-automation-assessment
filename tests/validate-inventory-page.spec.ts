import { test, expect, chromium } from '@playwright/test';
import { testData } from '../data/testData';

test('should validate inventory page if interactive within 2 seconds', async ({ page }) => {
    
    // Navigate to Inventory page
    await page.goto(process.env.INVENTORYPAGE!);

    // Initialize timer
    const startTimer = Date.now();

    // Click Add to cart button to check if page is interactive
    await page.waitForSelector('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Calculate time 
    const loadTime = (Date.now() - startTimer) / 1000;
    console.log(`Inventory page became interactive in ${loadTime.toFixed(2)}s`);

    // Verify load time is within 2 seconds
    expect(loadTime).toBeLessThanOrEqual(2);

    // Test Passed
    console.log(`Test passed`)
});


