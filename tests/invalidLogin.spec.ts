import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../utils/testData';

test('user cannot login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(users.locked.username, 'wrong_password');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});