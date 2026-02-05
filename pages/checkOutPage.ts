import { expect, Locator, Page } from '@playwright/test';
require('dotenv').config();

export class CheckOutPage {
    private page: Page;
    private firstName: Locator;
    private lastName: Locator;
    private zipCode: Locator;
    private continueButton: Locator;
    private finishButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.zipCode = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
    }

    async fillInformation(firstName: string, lastName: string, zipCode: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipCode.fill(zipCode);
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }

    async clickFinishButton(){
        await this.finishButton.click();
    }

}