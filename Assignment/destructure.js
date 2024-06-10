//Array Destructuring


let arr1 = [1, 2, 3];
let [a, b, c] = arr1;
console.log(a, b, c); 



let arr2 = [1, 2, 3, 4, 5];
let [a, b, , , c] = arr2;
console.log(a, b, c); 



let arr = [1, 2];
let [a, b, c = 3] = arr;
console.log(a, b, c); 


//Object Destructuring



let obj2 = { x: 1, y: 2, z: 3 };
let { e, f, g } = obj2;
console.log(e, f, g); 


//Renaming variables

let obj = { x: 1, h: 2, k: 3 };
let { x: h, i: j, k: l } = obj;
console.log(x, h, k); 


