//Method-1
let objLet = {
    name: "John",       // string
    age: 30,            // number
    isEmployed: true,   // boolean
    skills: ["JavaScript", "Python"] // array of strings
};

// Convert object to array
let arr=objLet
console.log(arr)
let arrLet = Object.entries(objLet); // entries is used to convert the object to array

console.log(arrLet);


//method -3
let person = {
    name: "Alice",
    age: 25,
    isEmployed: true
};

let isEmployedString = String(person.isEmployed);
console.log(isEmployedString); // Output: "true"
console.log(typeof isEmployedString); // Output: "string"



