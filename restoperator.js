//  const numbers = [1, 2, 3, 4, 5];

//  const [first, ...rest] = numbers;

//  console.log(first); 
// console.log(rest)



// const person = { name: 'sherbaz', age: 20, city: 'skardu' };

// const { name, ...rest } = person;

// console.log(name); 
// console.log(rest);  


const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); 