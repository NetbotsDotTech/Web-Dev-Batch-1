//First array in we can change values and add attributes
var arr1 = [22,
    true,
    "Hello",
    obj={
        name : "Kashan",age: 34,cgpa:3.5,
}]
console.log(arr1);
// Add a new property to the object inside the array
arr1[3].grade = 'A';
console.log(arr1);
//change value of name
arr1[3].name = "ALI"
console.log(arr1)
arr1.push("New value")
console.log(arr1)


//Array second in which we are not able to add new value and cannot modify existing value
"use strict";
let arr2 = [22,
    true,
    "Hello",
    {
        name : "Kashan",
        age: 34,
        cgpa:3.5,
    }];

Object.freeze(arr2[3]);
Object.freeze(arr2);
// arr1[3].grade = 'B'; //cannot modify
// arr1[3].name = "Muhammad" // cannot modify
console.log(arr2);

//Third arry in which we are able to add new attributes but cant modify the existing values

const arr3 = [
    22,
    true,
    "Hello",
    {
        name: "Kashan",
        age: 34,
        cgpa: 3.5,
    }
];
Object.defineProperty({},"name",{writable: false})
Object.defineProperty({},"age",{writable: false})
Object.defineProperty({},"cgpa",{writable: false})

arr3.push('Hello world'); //Adding new element in an array
console.log(arr3);

arr3[3].grade = "A"; //Adding new attributes in object inside array
console.log(arr3)

// arr3[3].age = 45; //This will throw an error we cannot modify existing value 
// console.log(arr3);

