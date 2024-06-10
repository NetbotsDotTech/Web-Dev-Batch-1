// Function Declaration
function add(a, b) {
    return a + b;
}

console.log("Function Declaration:");
console.log("add(2, 3) =", add(2, 3)); // Output: 5

// Function Expression
const subtract = function(a, b) {
    return a - b;
};

console.log("Function Expression:");
console.log("subtract(5, 2) =", subtract(5, 2)); // Output: 3

// Arrow Function
const multiply = (a, b) => a * b;

console.log("Arrow Function:");
console.log("multiply(3, 4) =", multiply(3, 4)); // Output: 12

// Method in Object
const calculator = {
    a: 10,
    b: 20,
    add: function() {
        return this.a + this.b;
    },
    subtract() {
        return this.a - this.b;
    }
};

console.log("Method in Object:");
console.log("calculator.add() =", calculator.add()); // Output: 30
console.log("calculator.subtract() =", calculator.subtract()); // Output: -10

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("IIFE:");
    console.log("This function runs immediately upon definition.");
})(); // Output: This function runs immediately upon definition.