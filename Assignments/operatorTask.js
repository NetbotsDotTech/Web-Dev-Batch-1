let a = 5;
let b = 5;

console.log("Initial values:");
console.log("a =", a);
console.log("b =", b);

// Pre-increment: increments the value, then returns the new value
let preIncrementResult = ++a;
console.log("After pre-increment: ++a");
console.log("a =", a);
console.log("preIncrementResult =", preIncrementResult);

// Post-increment: returns the current value, then increments
let postIncrementResult = b++;
console.log("After post-increment: b++");
console.log("b =", b);
console.log("postIncrementResult =", postIncrementResult);
