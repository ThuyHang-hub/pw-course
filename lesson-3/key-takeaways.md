# LESSON3: Git & Javascript basic
## I. Git
1. Undo
- Sửa commit message: 
*git commite --amend -m"message"*
- Bỏ file đang ở vùng staging: *git restore --staged <tên file>*
- Remove file đã đưa vào vùng repository: *git reset HEAD~N*
N = số lần gần nhất đã commit mà muốn thu hồi lại
- Ignore file: 
   + tạo file .gitignore
   + điền tên folder và file muốn ignore vào trong nội dung của file .gitignore này
   + save lại

2. Branching
2.1. Lấy code về: *git pull origin main*
2.2. Các phiên bản:
- Có 1 phiên bản chính mặc định sau khi khởi tạo git: nhánh main
- Có thể tạo các nhánh khác để làm việc
- Lệnh tạo nhánh: git branch <tên nhánh>
- Lệnh xem nhánh hiện có: git branch
- Lệnh chuyển nhánh: git checkout <tên nhánh>
- Lệnh gộp vừa tạo vừa chuyển sang nhánh đang tạo: git checkout -b <tên nhánh>
- Xoá nhánh: git branch -D <tên nhánh>

3. Checkout về một revision:
- Dùng lệnh *get log* để kiểm tra các revision
- Dùng lệnh *git check out <revision>* để xem code ở thời điểm đó

## II. Javascript
1. Quy tắc đặt tên
- Tên file: viết thường nối nhau dầu gạch (kebab-case)
- Tên biến: viết liền nhau xen kẽ thường-Hoa-thường (camelCase)
- Tên class: viết Hoa tất cả liền nhau (PascalCase)

2. console.log kết hợp:
- Kết hợp biến khi dùng ` `: console.log (`message $(tên biến)`)
- Kết hợp dấu: + và , để nối text và biến

3. Object
- Khai báo tập hợp các giá trị: 
let/ const <tenobject> = (tenthuoctinh1 = giatri1, tenthuoctinh2 = giatri2, ...);
- Object có thể là biến hoặc hằng số
- Nếu object là hằng số: Các giá trị bên trong có thể thay đổi, chỉ object ko thể thay đổi.

- Thêm thuộc tính:
sau khi đã khai báo object có thể thêm thuộc tính cho object:

    *<tênobject>.<tênthuoctinh> = giatri;*

  *<tenobject["tenthuoctinh"] =  giatri;*

- Xoá thuộc tính:
dùng *delete tenobject.tenthuoctinh;*

4. Logical:
- &&: và
- ||: hoặc
- !: đảo
thường dùng trong TH quan tâm xem bến có rỗng hay không hợp lệ không?

5. Array:
- Khai báo một danh sách các giá trị
- Có sắp xếp theo thứ tự khai báo: index, bắt đầu từ 0
- Tạo, khai báo: *let tênarr = [giatri1(index0), giatri2(index1), giatri3(index2)];*
- Truy xuất chiều dài: *tenarr.lenght;*
- Lấy phần tử: *tenarr[index];*
- Thêm giá trị vào mảng: dùng push: *tenarr.push giatrithem);*

*Chú ý: phân biệt object và array: 

- Object khai báo một đối tượng với nhiều thuộc tính
- Array khai báo nhiều giá trị theo một danh sách có đánh xếp thứ tự, chung 1 nhóm
- Có thể kết hợp array và object

6. Function:
- Giúp tái sử dụng code không cần lặp đi lặp lại một đoạn code nhiều lần.
- Hàm cơ bản:
function tenham() { lệnh };
 trong đó: 
  + function: khai báo hàm trong jvs
  + tenham: đặt tên cho hàm
  + (): nơi truyền tham số
  + {}: chứa các lệnh sẽ thực hiện khi gọi lại function

- Hàm có parameter:
truyền tham số vào trong dấu ()
ví dụ 
  + function goiten(name): tên function là goiten, name là tham số sẽ được truyền vào cho mỗi lần chạy function

- Hàm với return:
  + để trả giá trị
  + giá trị đó có thể là giá trị của phép tính, giá trị text, giá trị của biến, ...

- Chạy function:
chỉ cần gõ tên function và giá trị truyền vào.
