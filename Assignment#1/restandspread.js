// Example of rest parameters
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
      total += num;
    }
    return total;
  }
  console.log(sum(1, 2, 3, 4));
  console.log(sum(5, 10, 15));
// Example of spread syntax with arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = [...arr1, ...arr2];
console.log(combinedArray);
// Example of spread syntax with function arguments
function greet(name, age) {
  console.log(`Hello ${name}! You are ${age} years old.`);
}
let person1 = ['nadeem', 30];
greet(...person);
  // Example of array destructuring
let numbers = [1, 2, 3];
let [a, b, c] = numbers;
console.log(a);
console.log(b);
console.log(c);
// Example of object destructuring
let person2 = {
  name: 'Ali',
  age: 25,
  city: 'skardu'
};
let { name, age } = person;
console.log(name);
console.log(age);
