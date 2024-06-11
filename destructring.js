
//Destructring 

let arr = [1,2,3,4,5];
let [a,b,...rest] = arr;
console.log(a);
console.log(b);
console.log(rest);
console.log(...arr);

//example 2

let obj = { name: "Nadeem", age: 22, hobbies: ["cricket", "football"] };
let { name, age, hobbies } = obj;
console.log(name);
console.log(age);
console.log(...hobbies);

//example 3

let arr6 = [1,5,7,9,5];
let [x,y,...val] = arr6;
console.log(x,y,val);


//example 4
let arr7 = [3, 4, 5, 6, 7];
let [f, g, h, ...res] = arr7;
let firstThree = [f, g, h];
let [j, e] = res;

console.log(firstThree); // [3, 4, 5]
console.log(j);          // 6
console.log(e);


