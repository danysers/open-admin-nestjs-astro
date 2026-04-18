import { expect, test } from '@playwright/test';

test('login screen matches OpenAdmin style baseline', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
  await expect(page.getByText('OpenAdmin')).toBeVisible();
  await expect(page.getByPlaceholder('admin@example.com')).toBeVisible();
  await expect(page.getByPlaceholder('Password')).toBeVisible();

  await page.screenshot({ path: 'test-results/login-screen.png', fullPage: true });
});

test('admin can sign in and see dashboard shell', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('admin@example.com').fill('admin@example.com');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/\/admin\/dashboard/);
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Users' })).toBeVisible();

  await page.screenshot({ path: 'test-results/admin-dashboard.png', fullPage: true });
});
