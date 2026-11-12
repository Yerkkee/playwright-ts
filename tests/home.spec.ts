import { test, expect } from '@playwright/test';

test('home page opens and logo is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByAltText('Website for automation')).toBeVisible();
});
