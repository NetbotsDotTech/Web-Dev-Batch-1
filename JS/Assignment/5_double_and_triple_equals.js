let a = 5;
let b = '5';

// should return true bc '5' will convert to 5 by js 
console.log("Result for duobles equal");
console.log(a == b);
// should return false bc 5 and '5 ' is ot of same data type
console.log("Result for triple equal");
console.log(a === b);

let c = 0;
let d = false;
// should return true bc false will convert to 0 by js 
console.log("Result for duobles equal");
console.log(c == d);  
// should return false bc both are different data type 
console.log("Result for triple equal");
console.log(c === d); 