# Lesson 2: Học về Git và Javascript cơ bản
## 1. Giới thiệu về VSC
- Là một hệ thống quản lý các phiên bản
- Có nhiều hệ thống khác nhau và Git là một trong số đó
- Có một số dạng VCS:
  + Local
  + Centralize
  + Distributed 

## 2. Git
### 2.1. Giới thiệu Git
- Ưu điểm: dễ dùng, free và sử dụng rộng rãi
- Là phần mềm trên máy với một số tính năng: vsc, đưa file, repository
- Khác GitHub (dịch vụ chia sẻ, quản lý code trên web)

### 2.2. Câu lệnh và luồng cần nhớ
![Git_Diagram](https://drive.google.com/file/d/1UylaldZpd1-Jnidvizk4Q1Xz2rZRNQW4/view?usp=drive_link)

## 3. Javascript cơ bản
### 3.1. Biến
- Dùng let
- Không dùng var
### 3.2. Hằng
- Dùng const
- Luôn dùng hằng số trừ khi chắc chắn sẽ phải gán lại giá trị
### 3.3 Loại dữ liệu
- Number:
  + ko phân biệt int hay float
  + Infinity (khi chia 0)
  + NaN (khi thực hiện giữa số và không phải số)
- String
- Boolean: T/F

! Dùng typeof để check xem biến là type gì

### 3.4 So sánh
- Bằng:
 + == : ko phân biệt type
 + === : phân biệt type
- Không bằng:
 + != :ko phân biệt type
 + !== : phân biệt type
- Lớn hơn, nhỏ hơn:
 + `>`
 + `<`
 + `>=`
 + `<=`

### 3.5. Logic
- AND: &&
- OR: ||

### 3.6. Một ngôi
- **Pre**fix: ++x hoặc --x: gán giá trị trước rồi cùng trả giá trị
- **Post**fix: x++ hoặc x--: trả giá trị trước rồi mới gán

### 3.7. Toán học:
Thường dùng: + - * /

### 3.8. Điều kiện
**IF**
Kiểm tra một điều kiện -> nếu đúng đi tiếp luồng.

*if (<điều kiện>) {*

*// code...*

*}*


### 3.9. Vòng lặp
**FOR**
Một vòng lặp thường có: một điều kiện khởi tạo +  một điều kiện lặp và một cập nhật:
Một lệnh sẽ lặp lại liên tục đến khi điều kiện lặp không còn thoả mãn nữa.

*for (<khởi tạo>; <kiểm tra>; <cập nhật>) {*

*// code*

*}*

## 4. Chú ý:
- Đặt message commit file git logic: `<type>: <short_description>`
- Code sạch, đẹp và đúng format.