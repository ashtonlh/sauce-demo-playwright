import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { users, checkoutData } from '../utils/testData';

test('user can complete checkout flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();

  await loginPage.login(
    users.standard.username,
    users.standard.password
  );

  await inventoryPage.addBackpackToCart();

  await cartPage.goToCart();
  await cartPage.startCheckout();

  await cartPage.fillCheckoutInfo(
    checkoutData.firstName,
    checkoutData.lastName,
    checkoutData.zipCode
  );

  await cartPage.continueCheckout();
  await cartPage.finishCheckout();

  await cartPage.verifyOrderComplete();
});