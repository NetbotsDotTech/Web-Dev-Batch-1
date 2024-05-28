// const numbers = [1, 2, 3, 4, 5];

// const [first, ...rest] = numbers;

// console.log(first); 
// console.log(rest)

const person = { name: 'sherbaz', age: 20, city: 'skardu' };

const { name, ...rest } = person;

console.log(name); 
console.log(rest);  
