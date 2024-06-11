// Q1 Create variables of different types

// var stringVariable = "Hello";
// var numberVariable = 42;
// var booleanVariable = true;

// Modify variables

// stringVariable += " World";
// numberVariable *= 2;
// booleanVariable = !booleanVariable;

// Output the modified variables

// console.log("Modified String Variable:", stringVariable);
// console.log("Modified Number Variable:", numberVariable);
// console.log("Modified Boolean Variable:", booleanVariable);


//Q2  make an object with let and two object with constant . one of the constant object 
// should accept new data but not modification and the other should not accept any change.

// Object using let
let mutableObject = {
    name: "John",
    age: 30
};

// Objects using const
const readOnlyObject = {
    city: "New York",
    country: "USA"
};

const immutableObject = Object.freeze({
    color: "blue",
    size: "medium"
});

// Try modifying the let object
mutableObject.age = 35;
mutableObject.gender = "Male"; // Adding new data is allowed

// Try modifying the read-only object
// readOnlyObject.city = "Los Angeles"; // This will throw an error
readOnlyObject.population = 8000000; // Adding new data is allowed

// Try modifying the immutable object
// immutableObject.color = "red"; // This will throw an error
// immutableObject.shape = "square"; // This will throw an error


//same task for array 

// Array using let
let mutableArray = [1, 2, 3, 4, 5];

// Arrays using const
const readOnlyArray = [6, 7, 8, 9, 10];

const immutableArray = Object.freeze([11, 12, 13, 14, 15]);

// Try modifying the let array
mutableArray.push(6); // Adding new element is allowed
mutableArray[0] = 0; // Modifying existing element is allowed

// Try modifying the read-only array
// readOnlyArray[0] = 5; // This will throw an error
readOnlyArray.push(11); // Adding new element is allowed

// Try modifying the immutable array
// immutableArray[0] = 10; // This will throw an error
// immutableArray.push(16); // This will throw an error


// // Function Declaration
function greet3(name) {
    return `Hello, ${name}!`;
}

// Calling the function
console.log(greet3("Alice"));  // Output: Hello, Alice!



// Function Expression (Anonymous)
const greet4 = function(name) {
    return `Hello, ${name}!`;
};

// Calling the function
console.log(greet4("Bob"));  // Output: Hello, Bob!


// Arrow Function
const greet5= (name) => {
    return `Hello, ${name}!`;
};

// Arrow Function with implicit return (single expression)
const greetShort = name => `Hello, ${name}!`;

// Calling the functions
console.log(greet5("Charlie"));  // Output: Hello, Charlie!
console.log(greetShort("Dave"));  // Output: Hello, Dave!



// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This function runs immediately!");
})();

// IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})("Eve");


// Generator Function
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

// Using the generator
const generator = generateSequence();
console.log(generator.next().value);  // Output: 1
console.log(generator.next().value);  // Output: 2
console.log(generator.next().value);  // Output: 3



// Async Function
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

// Using the async function
fetchData().then(data => console.log(data));



// Method Definition
const person = {
    name: 'Alice',
    greet1() {
        return `Hello, my name is ${this.name}`;
    }
};

// Calling the method
console.log(person.greet1());  // Output: Hello, my name is Alice




// Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet2 = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old`;
};

// Creating an object
const person1 = new Person('Bob', 30);

// Calling a method on the object
console.log(person1.greet2());  // Output: Hello, my name is Bob and I am 30 years old
