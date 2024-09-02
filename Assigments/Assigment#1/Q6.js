// Regular function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6

// Anonymous function
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(5, 3)); // 2

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("IIFE executed");
})(); // "IIFE executed"
