function add(a, b) {
    return a + b;
}

// Usage: Often used for utility functions that need to be used throughout your code.
console.log(add(2, 3));

const subtract = function(a, b) {
    return a - b;
};

// Usage: Useful for defining functions that need to be assigned to variables or passed as arguments.
console.log(subtract(5, 2));
const multiply = (a, b) => a * b;

// Usage: Great for concise, one-line functions or for use as callback functions.
console.log(multiply(3, 4)); 
