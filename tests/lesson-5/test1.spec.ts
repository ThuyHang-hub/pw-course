// Bài 1:
// Create test
import { test } from '@playwright/test';

test('Register successful', async ({ page }) => {
    // Navigate
  await page.goto('https://material.playwrightvn.com/');

  // Click on Bài học 1
  await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();

  // Input Username: //input[@id='username']
  await page.locator("//input[@id='username']").fill('Nguyen Thi Thuy Hang');
  
  // Input Email: //input[@id='email']
  await page.locator("//input[@id='email']").fill('hang123@gmail.com');

  // Select Gender: //input[@id='female']
  await page.locator("//input[@id='female']").check();

  // Select Hobbies: //input[@id='reading']
  await page.locator("//input[@id='reading']").check();

  // Select Interests: //option[@value='music']
  await page.locator("//option[@value='music']").click();
  
  // Open list country: 
  await page.locator("//select[@id='country']").click();
  
  // Select Country:
  await page.locator("//select[@id='country']").selectOption({ value: "canada" });

  
  // Input Date of Birth: //input[@id='dob']
  await page.locator("//input[@id='dob']").fill("1993-11-11");

  // Upload Profile Picture: //input[@id='profile']
  await page.locator("//input[@id='profile']").setInputFiles("F:\\Learn Auto Test\\data\\anh-dep-83.jpg");

  // Input Biography://textarea[@name='bio']
  await page.locator("//textarea[@name='bio']").fill("ABC\n123\n@#$%");
  
  // Input Rate Us: //input[@name='rating']
  await page.locator("//input[@name='rating']").fill("10");
  
  // Select Favorite color: //input[@id="favcolor"] #ffffff
  await page.locator("//input[@id='favcolor']").fill("#ffffff");
  
  // Checked on Newsletter: //input[@id="newsletter"]
  await page.locator("//input[@id='newsletter']").click();
  
  // Click on Enable Feature: //input[@id="toggleOption"]
  await page.locator("//span[@class='slider round']").click();

  // Star Rating: chưa làm được

  // Custom Date: read only => không nhập

  // Click Register: //button[@type="submit"]
  await page.locator("//button[@type='submit']").click();

});