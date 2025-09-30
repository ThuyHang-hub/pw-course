// Bài 3:
// Create test
import { test } from '@playwright/test';

test('Add Task', async ({ page }) => {
// Navigate
  await page.goto('https://material.playwrightvn.com/');

//Click on Bài học 3
  await page.locator("//a[text()='Bài học 3: Todo page']").click();
  
// Add 100 task
  for (let i = 1; i <= 100; i++){
    await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
    await page.locator("//button[@id='add-task']").click();
  };
});
