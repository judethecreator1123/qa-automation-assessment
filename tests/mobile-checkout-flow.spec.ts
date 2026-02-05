import { test, expect, devices } from '@playwright/test';
import { CartPage } from '../pages/cartPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CheckOutPage } from '../pages/checkOutPage';
import { testData } from '../data/testData';

test.use({
  ...devices['iPhone 12'],
});

test.describe('Checkout Flow', () => {

  test('should be able to checkout an item via mobile phone', async ({ page }) => {
    // Initialize test data
    const data = await testData();

    // Navigate to inventory page
    await page.goto(process.env.INVENTORYPAGE!);

    // Assert if page is in inventory page
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    console.log('Successfully navigated to inventory page');

    // Add an item to cart=
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addAnItemToCart(data.firstItemLocatorName);
    await inventoryPage.clickCartIconButton();

    // Checkout an item
    const cartPage = new CartPage(page);
    await cartPage.clickCheckOutButton();

    // Fill information in Checkout Page
    const checkOutPage = new CheckOutPage(page);
    await checkOutPage.fillInformation(data.firstName(), data.lastName(), data.postalCode());
    await checkOutPage.clickContinueButton();

    // Assert if Item Name is correct in Checkout page:Overview
    await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText(data.firstItemName);
    console.log(`${data.firstItemName} is correctly added to checkout page`);

    // Click Finish button
    await checkOutPage.clickFinishButton();

    // Assert Thank you message
    await expect(page.locator('[data-test="complete-header"]')).toContainText(data.thankYouMesage);
    console.log(`Successfully checked out the item! Success Message: ${data.thankYouMesage}`);

    // Test Passed
    console.log(`Test passed`)
  });
});

