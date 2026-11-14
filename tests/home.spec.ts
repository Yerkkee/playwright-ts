import { test, expect } from '@playwright/test';

test('home page opens and logo is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByAltText('Website for automation')).toBeVisible();
});

test('login with wrong password shows error', async ({ page }) => {
    await page.goto('/login');
    await page.getByRole('button', { name: 'Consent' }).click();
    await page.getByPlaceholder('Email Address').first().fill('test@gmail.com');
    await page.getByPlaceholder('Password').fill('test');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
});
