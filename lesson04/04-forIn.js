const person = {
    name: "Harry",
    age: 11,
    city: "London"
};

for (let property in person) {
    console.log(`Property: ${property}`);
    console.log(`Property value: ${person[property]}`);
};

const arr2 = ["Pi", " Ka", "Chu"];
for (let i in arr2) {
    console.log(i);
}