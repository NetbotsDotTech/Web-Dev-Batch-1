
let x1 = 10;
let y1= 10;

console.log("Initial values:");
console.log("x =", x1); // Output: x = 10
console.log("y =", y1); // Output: y = 10

console.log("\nUsing pre-increment on x:");
console.log(++x1); // Output: 11
console.log("x after pre-increment:", x1); // Output: x after pre-increment: 11

console.log("\nUsing post-increment on y:");
console.log(y1++); // Output: 10
console.log("y after post-increment:", y1); // Output: y after post-increment: 11









console.log("Comparing using `==` and `===` in JavaScript\n");

// Examples where `==` and `===` behave differently
let a = 5;
let b = '5';

console.log("a = 5 (number)");
console.log("b = '5' (string)");

console.log("\nUsing `==` (Equality Operator):");
console.log("a == b:", a == b); // true, because '5' is converted to 5 before comparison

console.log("\nUsing `===` (Strict Equality Operator):");
console.log("a === b:", a === b); // false, because the types are different (number vs. string)

// Examples where `==` and `===` behave the same
let x = 10;
let y = 10;

console.log("\nx = 10 (number)");
console.log("y = 10 (number)");

console.log("\nUsing `==` (Equality Operator):");
console.log("x == y:", x == y); // true, both are numbers and equal

console.log("\nUsing `===` (Strict Equality Operator):");
console.log("x === y:", x === y); // true, both are numbers and equal

// Additional examples
let c = 0;
let d = false;

console.log("\nc = 0 (number)");
console.log("d = false (boolean)");

console.log("\nUsing `==` (Equality Operator):");
console.log("c == d:", c == d); // true, because 0 is considered false in a boolean context

console.log("\nUsing `===` (Strict Equality Operator):");
console.log("c === d:", c === d); // false, because the types are different (number vs. boolean)

// Example with objects
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };

console.log("\nobj1 and obj2 are separate objects with identical properties");

console.log("\nUsing `==` (Equality Operator):");
console.log("obj1 == obj2:", obj1 == obj2); // false, because they are different objects in memory

console.log("\nUsing `===` (Strict Equality Operator):");
console.log("obj1 === obj2:", obj1 === obj2); // false, because they are different objects in memory

// Example with null and undefined
let e = null;
let f;

console.log("\ne = null");
console.log("f is undefined");

console.log("\nUsing `==` (Equality Operator):");
console.log("e == f:", e == f); // true, because null and undefined are considered equal in non-strict comparison

console.log("\nUsing `===` (Strict Equality Operator):");
console.log("e === f:", e === f); // false, because null and undefined are of different types
