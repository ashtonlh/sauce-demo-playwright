import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../utils/testData';

test('user can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
  await loginPage.verifySuccessfulLogin();
});