//Method-1
let objLet = {
    name: "John",       // string
    age: 30,            // number
    isEmployed: true,   // boolean
    skills: ["JavaScript", "Python"] // array of strings
};


let arr=objLet
console.log(arr)// it print in the object form
let arrLet = Object.entries(objLet); // entries is used to convert the object to array

console.log(arrLet);// it print in the array form
