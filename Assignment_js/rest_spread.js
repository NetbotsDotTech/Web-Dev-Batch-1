//Rest operator example 1

function myFunc(...values){
    console.log(values);
}
myFunc(12,12,12);

//Example 2

function func2(...num) {
    let sum = 0; // Initialize sum outside the loop
    
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i]; // Update sum with each element
    }
    
    console.log(sum);
}

func2(1, 2, 3, 4, 5);

//Spread operator

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];
console.log(...arr3);

//Example 2

//spread operator on object

let obj1 = {a:1,b:2,c:3};
let obj2 = {d:4,e:5,f:6};
let obj3 = {...obj1,...obj2};
console.log(obj3);


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