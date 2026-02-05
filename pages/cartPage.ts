import { expect, Locator, Page } from '@playwright/test';
require('dotenv').config();

export class CartPage {
  private page: Page;
  private checkOutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkOutButton = page.locator('[data-test="checkout"]');
  }

  async clickCheckOutButton() {
    await this.checkOutButton.click();
  }

}