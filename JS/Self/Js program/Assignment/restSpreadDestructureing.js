// Rest Parameters Example
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); 

// Usage: Useful when you want to work with any number of function arguments as an array.













// Spread Syntax Example
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];

console.log(arr2); 

// Spread Syntax with Function Arguments
function multiply(a, b, c) {
    return a * b * c;
}

let nums = [2, 3, 4];
console.log(multiply(...nums)); 

// Usage: Useful for expanding arrays into individual elements or function arguments.









// Array Destructuring Example
let [first, second, third] = [10, 20, 30];

console.log(first); 
console.log(second); 
console.log(third); 

// Usage: Useful for extracting values from arrays and assigning them to variables.







// Object Destructuring Example
let person = {
    fname: "Alice",
    age: 25,
    job: "Developer"
};

let { fname, age, job } = person;

console.log(fname);
console.log(age);
console.log(job); 

// Usage: Useful for extracting values from objects and assigning them to variables.












// Combined Example
function introduce({ name, ...details }) {
    console.log(`Hello, my name is ${name}.`);
    console.log(`Details:`, details);
}

let personDetails = {
    name: "Bob",
    age: 30,
    job: "Engineer",
    hobbies: ["reading", "gaming"]
};

introduce(personDetails);

// Output:
// Hello, my name is Bob.
// Details: { age: 30, job: 'Engineer', hobbies: [ 'reading', 'gaming' ] }

function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

let combined = combineArrays([1, 2, 3], [4, 5, 6]);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

function logArguments(...args) {
    console.log(args);
}

logArguments(1, 2, 3, 4); // Output: [1, 2, 3, 4]
