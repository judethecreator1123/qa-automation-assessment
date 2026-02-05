import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private username: Locator;
  private password: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page
    this.username = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async login(userName: string, password: string) {
    await this.username.fill(userName);
    await this.password.fill(password);
    await this.loginButton.click();
  }
  
}