


const numbers = [1, 2, 3, 4, 5, 6];
console.log("numbers", numbers)
const [num1, num2, ...others] = numbers;
console.log("value", ...others)
const value = [num1, num2, ...others]

 console.log("value", value)