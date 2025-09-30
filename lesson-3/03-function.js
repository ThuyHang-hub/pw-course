// Bài 1
console.log("Bài 1: Phép tính nhân:");
function multiply(a, b) {
    console.log(a, "x", b, "=", a * b);
};
multiply(2, 3);
multiply(8, 9);

//Bài 2
console.log("Bài 2: Giá trị nhỏ nhất");
function findMin(a, b, c) {
    if (a <= b && a <= c) return a;
    if (b <= a && b <= c) return b;
    return c;
};
let min1 = findMin(4, 5, 6);
console.log("Giá trị nhỏ nhất trong 3 số là:", min1);
let min2 = findMin(14, 16, 19);
console.log("Giá trị nhỏ nhất trong 3 số là:", min2);

// Bài 3
console.log("Bài 3: Danh sách học sinh top");
let students = [
    {"name": "Hiếu", "score": 10},
    {"name": "Quang Anh", "score": 9},
    {"name": "An", "score": 8},
    {"name": "Dương", "score": 10},
    {"name": "Hùng", "score": 9},
    {"name": "Phúc", "score": 8},
    {"name": "Khang", "score": 10},
    {"name": "Tài", "score": 7},
    {"name": "Thành", "score": 8},
    {"name": "Ngân", "score": 6},
    {"name": "Huy", "score": 5},
    {"name": "Hoa", "score": 3},
];
function getTopStudent(threshold) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            console.log("chúc mừng", students[i].name, "đã nằm trong top học sinh");
        };
    };
};
getTopStudent(9);

// Bài 4
console.log("Bài 4: Tính lãi theo năm");
function calculateInterest(principal,rate,years) {
    let a = principal;
    let b = rate;
    let c = years;
    let total = a + a * b * c / 100;
    console.log("Tổng tài sản của bạn sau", c, "năm gửi tiết kiệm", a, "đồng, với lãi suất", b + "% là:", total);
};
calculateInterest(1000000,6,8);

