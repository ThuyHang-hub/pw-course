import { test } from '@playwright/test';

test('Basic actions', async ({ page}) => {
    await test.step("Access", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    
    await test.step("Navigate to Bai hoc 1", async () => {
        await page.locator("//a[text()= 'Bài học 1: Register Page (có đủ các element)']").click();
    });
    
    await test.step("Input data", async () => {
        await page.locator("//input[@id='username']")
    });

    await test.step("Radio", async () => {
        await page.locator("") 
    });
});
