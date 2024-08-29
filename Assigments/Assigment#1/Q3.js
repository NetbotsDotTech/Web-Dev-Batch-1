// Array declared with let
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]

// Array declared with const
const arr2 = [5, 6, 7];
arr2.push(8); // Modification allowed
console.log(arr2); // [5, 6, 7, 8]

// Array declared with const but sealed to prevent modifications
const arr3 =[9, 10, 11];
Object.freeze(arr3);
// arr3.push(10);   This will throw an error in strict mode

console.log(arr3); // [9, 10, 11]
