import { test, expect } from '@playwright/test';

test('search liverpool fc in wikipedia', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');
  await expect(page.getByRole('link', { name: 'Wikipedia The Free' })).toBeVisible();
  await expect(page.getByLabel('Search Wikipedia')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').fill('liverpool fc');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('heading', { name: 'Liverpool F.C.' }).locator('span').click();
});