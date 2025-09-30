// Bài 2:
// Create test
import { test } from '@playwright/test';

test('Add product', async ({ page }) => {
// Navigate
  await page.goto('https://material.playwrightvn.com/');

//Click on Bài học 2
  await page.locator("//a[text()='Bài học 2: Product page']").click();

// Add 2 product 1
  await page.locator("//button[@data-product-id='1']").click();
  await page.locator("//button[@data-product-id='1']").click();

// Add 3 product 2
  await page.locator("//button[@data-product-id='2']").click();
  await page.locator("//button[@data-product-id='2']").click();
  await page.locator("//button[@data-product-id='2']").click();

// Add 1 product 3
  await page.locator("//button[@data-product-id='3']").click();

});