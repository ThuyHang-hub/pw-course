// Bài 1
console.log("Bài 1:");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log("Tổng các số từ 1 đến 100 là:", sum);

// Bài 2
console.log("Bài 2:");
for (let j = 2; j <= 9; j++) {
    console.log("Bảng cửu chương", j + ":");
    for (let k = 1; k <= 9; k++) {
        console.log(j, "*", k, "=", j * k);
    };
    console.log("---------------");
};

// Bài 3
console.log("Bài 3:");
let oddarr = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 == 1) {
        oddarr.push(i);
    }
};
// đề bài không yêu cầu, chỉ thêm vào để kiểm tra:
console.log("Mảng số lẻ từ 1 đến 99:", oddarr);

// Bài 4
console.log("Bài 4:");
let username = [
    "Anh",
    "Binh",
    "Chi",
    "Dung",
    "Enel",
    "Frank",
    "Giang",
    "Hoang",
    "Ian",
    "Jsol"
];
let email = [];
let stt = 1
for (let i = 0; i <= username.length; i++) {
    stt = i + 1;
    email.push(username[i] + stt + "@yahoo.com");
};
console.log("Danh sách emails:", email);

// Bài 5
console.log("Bài 5:");
let income = [
    { "month": "1", "total": 100},
    { "month": "2", "total": 200},
    { "month": "3", "total": 300},
    { "month": "4", "total": 400},
    { "month": "5", "total": 500},
    { "month": "6", "total": 600},
    { "month": "7", "total": 700},
    { "month": "8", "total": 800}, 
    { "month": "9", "total": 900},
    { "month": "10", "total": 1000},
    { "month": "11", "total": 1100},
    { "month": "12", "total": 1200},
];
let doanhthu = 0;
for (let i = 0; i < income.length; i++) {
    doanhthu = doanhthu + income[i].total;
}
console.log("Tổng doanh thu 12 tháng là:", doanhthu);