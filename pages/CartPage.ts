import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async startCheckout() {
    await this.page.locator('#checkout').click();
  }

  async fillCheckoutInfo(firstName: string, lastName: string, zipCode: string) {
    await this.page.locator('#first-name').fill(firstName);
    await this.page.locator('#last-name').fill(lastName);
    await this.page.locator('#postal-code').fill(zipCode);
  }

  async continueCheckout() {
    await this.page.locator('#continue').click();
  }

  async finishCheckout() {
    await this.page.locator('#finish').click();
  }

  async verifyOrderComplete() {
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
  }
}