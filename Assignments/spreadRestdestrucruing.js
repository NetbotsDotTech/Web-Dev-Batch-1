const numbers = [1, 2, 3, 4, 5];
const person = { name: 'John', age: 30, city: 'New York' };

// Spread Syntax
const newNumbers = [...numbers, 6, 7];
const newPerson = { ...person, country: 'USA' };

console.log("Spread Syntax:");
console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(newPerson); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }

// Rest Parameters
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

console.log("Rest Parameters:");
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Destructuring
const [first, second, ...restNumbers] = numbers;
const { name, age, ...restDetails } = person;

console.log("Destructuring:");
console.log("First number:", first); // Output: 1
console.log("Second number:", second); // Output: 2
console.log("Rest numbers:", restNumbers); // Output: [3, 4, 5]
console.log("Name:", name); // Output: John
console.log("Age:", age); // Output: 30
console.log("Rest details:", restDetails);