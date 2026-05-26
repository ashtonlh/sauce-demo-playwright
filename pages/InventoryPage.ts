import { Page, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addBackpackToCart() {
    await this.page.locator('#add-to-cart-sauce-labs-backpack').click();
  }
async addBikeLightToCart() {
  await this.page.locator('#add-to-cart-sauce-labs-bike-light').click();
}
  async verifyCartBadgeCount(count: string) {
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText(count);
  }
}