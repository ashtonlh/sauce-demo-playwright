import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { users } from '../utils/testData';

test('user can add item to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await inventoryPage.addBackpackToCart();
  await inventoryPage.verifyCartBadgeCount('1');
});