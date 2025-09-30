# Lesson 5: DOM terminology & Playwright basic

## 1. JavaScript Functions Advance

### 1.1. Function Expression 
- Function Declaration (khai báo hàm): truyền thống, đưa biến vào tên function
```js
function add(a, b) {
  return a + b;
}
```
- Function Expression (biểu thức hàm): khai báo biến là 1 function
```js
const add = function(a, b) {
  return a + b;
};
```
### 1.2. Lambda (Arrow) function

- Arrow function: bỏ {} và return, đưa luôn biểu thức vào
```js
const add = (a, b) => a + b;
```
- Không có tham số: phải có dấu ()
```js
const greet = () => console.log("Hello!");
```
- Một tham số: có hoặc không dấu ngoặc
```js
const double = x => x * 2;
const triple = (x) => x * 3;
```
### 1.3. Anomymous function
Hàm không tên, thường dùng 1 lần hoặc callback
- Anonymous function gán vào biến
```js
const anonymousFunc = function() {
  console.log("I'm anonymous!");
};
```
- Anonymous function làm callback
```js
setTimeout(function() {
  console.log("Anonymous callback!");
}, 1000);
```
## 2. DOM (Document Object Model)

### 2.1.
DOM là cây cấu trúc của HTML

Xem bằng Inspect (F12) → tab Element

Ví dụ:
```js
<option value="usa">United States</option>
<img src="image.jpg" alt="Image description"/>
```
- Thẻ mở: ```<option>```

- Thẻ đóng: ```</option>```

- Thuộc tính và value: ```value="usa"```

### 2.2.
Thẻ HTML thường gặp

-  Thẻ cấu trúc cơ bản:
```
<html>: gốc của trang
<head>: metadata (tiêu đề, SEO, ...)
<body>: nội dung hiển thị
<div>: container block
<span>: inline container
<header>, <footer>, <nav>, <section>: semantic tags
```
- Thẻ nội dung:
```
<h1> … <h6>: tiêu đề
<p>: đoạn văn
<a>: liên kết
<img>: hình ảnh
<ul>, <ol>, <li>: danh sách
```
- Thẻ form:
```
<form>: biểu mẫu
<input>: nhập liệu (text, password, checkbox, radio, …)
<button>: nút bấm
<select> & <option>: dropdown
<textarea>: văn bản nhiều dòng
```
## 3. Selector

### 3.1. Các loại selector
- Dùng để tìm phần tử khi automation

- 3 loại phổ biến:

    + XPath

    + CSS selector

    + Playwright selector

- Ví dụ:
```js
// XPath
page.locator("//button[normalize-space()='Add to cart']")

// CSS
page.locator(".add-to-cart")

// Playwright
page.getByText("Add to cart")
```
### 3.2. Cách lấy XPath
- Tuyệt đối: đi dọc theo cây DOM, bắt đầu bởi 1 /
- Tương đối: tìm dựa vào đặc tính
    + bắt đầu bởi 2 //
    + //tenthe[@thuoctinh=”gia tri”]
    + tìm text: //tagname[text()='Giá trị text']
    
## 4. Playwright Basic Syntax

### 4.1. Viết một test
```js
import { test } from '@playwright/test';

test('My first test', async ({ page }) => {
  await page.goto('https://example.com');
});
```
### 4.2. Viết step
```js
test('My test', async ({ page }) => {
  await test.step('Đi tới trang web', async () => {
    await page.goto('https://example.com');
  });
});
```
### 4.3. Thao tác cơ bản

```js
// Navigation
await page.goto('https://pw-practice.playwrightvn.com/');

// Locate element
page.locator("//input[@id='email']");

// Click
await page.locator("//button").click();
await page.locator("//button").dblclick();
await page.locator("//button").click({ button: 'right' });

// Input
await page.locator("//input").fill('Playwright VN');
await page.locator("//input").pressSequentially('Hello', { delay: 100 });

// Checkbox/Radio
const isChecked = await page.locator("//input").isChecked();
await page.locator("//input").check();
await page.locator("//input").setChecked(false);

// Select dropdown
await page.locator('//select[@id="country"]').selectOption({ label: 'USA' });

// Upload file
await page.locator("//input[@id='profile']").setInputFiles("<file-path>");

// Hover: di chuột vào phần tử
await page.locator("<xpath here>").hover();

//Text(): tìm phần tử có text chính xác
<div class="playwright">This is a text</div>

//Contains(): dùng khi text có khoảng trắng thừa hoặc giá trị không cố định.
<div> Tôi là Alex </div>   <!-- có space ở đầu và cuối -->
<div> Bây giờ là: 08:07 </div> <!-- thời gian thay đổi -->

