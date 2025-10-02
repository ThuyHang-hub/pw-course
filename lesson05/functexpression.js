// Khai báo hàm có tham số name. Trả về chuỗi Hello <name>

const hello = function(name) {
    console.log (`Hello ${name}`)
};
hello('Hang');

// Khai báo hàm có tham số price, quantity, discount. Trả về giá trị, biết giá trị = price * quantity - discount

const total = function(price, quantity, discount) {
    console.log (`Total ${price * quantity * discount}`)
};
total(1,1,1);

// Lambda
const hello2 = (name) => {
    console.log (`Hello ${name}`)
};
hello('Hang');

// Lambda
const total2 = (price, quantity, discount) => {
    console.log (`Total ${price * quantity * discount}`)
};
total(1,1,1);

// Anonymous


