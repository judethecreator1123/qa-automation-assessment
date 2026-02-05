import { expect, Locator, Page } from '@playwright/test';
require('dotenv').config();

export class InventoryPage {
  private page: Page;
  private cartIconButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIconButton = page.locator('[data-test="shopping-cart-link"]');
  }

  async addAnItemToCart(item: string) {
    await this.page.locator(`[data-test="add-to-cart-${item}"]`).click();
  }

  async removeAnItem(item: string) {
    await this.page.locator(`[data-test="remove-${item})"]`).click();
  }

  async clickCartIconButton() {
    await this.cartIconButton.click();
  }
  
}