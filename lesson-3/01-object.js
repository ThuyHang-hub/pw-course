// Bai1
console.log("Bài 1:");
let car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2021
};

console.log("Năm sản xuất của xe là:", car.year);

// Bai2
console.log("Bài 2:");
let person = {
    "name": "Hằng",
    "address": {
        "street": "Nguyễn Khành Toàn",
        "city": "Hà Nội",
        "country": "Việt Nam",
    }

};
console.log("Tên đường của", person.name, "là:", person.address.street);

// Bai3
console.log("Bài 3:");
let student = {
    "name": "Hằng",
    "grades": {
        "math": 10,
        "english": 8,
    }
};
console.log("Điểm toán của", student["name"], "là:", student["grades"]["math"]);

// Bai4
console.log("Bài 4:");
let settings = {
    "volume": 50,
    "brightness":50,
};
settings.volume = 32;
console.log("Volume:", settings.volume);
console.log("Brightness:", settings.brightness);

// Bai5
console.log("Bài 5:");
let bike;
bike = {"color": "white"};
console.log("Màu của xe đạp:", bike.color);

// Bai6
console.log("Bài 6:");
let employee = {
    "name": "Hằng",
    "age": 32,
};
delete employee.age;

// Bai7
console.log("Bài 7:");
let school = {
    "classA": ["An", "Bình", "Châu"],
    "classB": ["Đào", "Hương", "Giang"],
};