//Array Methods
//1-Array length
const fruits = ["Banana", "Orange", "Apple", "Mango", "kiwi"];
let size = fruits.length;
console.log(size);

//toString it convert the array to string
let arr2 = ["Banana", "Orange", "Apple", "Mango", "kiwi"];
console.log(arr2.toString());

//Array at() this is used to print the array value at any index
let arr3  = ["Banana", "Orange", "Apple", "Mango", "kiwi"];
console.log(arr3.at(3));

//Array join method is used to join array element

let arr4 = ["Banana", "Orange"];
let arr5 = ["Mango", "kiwi"];
let arr6 = arr4.join(arr5);
console.log(arr6);

//Array pop is used to delete last element in array

let arr7 = ["Banana", "Orange", "Apple", "Mango", "kiwi"];
console.log(arr7);
let D = arr7.pop();
console.log("pop element from arrar : ",D);

//Array push is used to add element in last of array

let arr8 = ["Banana", "Orange", "Apple", "Mango", "kiwi"];
let p = arr8.push("charee");
console.log("push new element : ",p);
console.log(arr8);

//Array shift method is used to delete first element of array

let arr9 = ["Orange", "Apple", "Mango", "kiwi"];
console.log(arr9);
let s = arr9.shift();
console.log("shift element : ",s);

//Array unshift is used to add element at starting of array

let arr10 = ["Orange", "Apple", "Mango", "kiwi"];
let uns = arr10.unshift("Lemon");
console.log(arr10);

//Array length  property provides an easy way to append a new element to an array

let arr11 = ["Orange", "Apple", "Mango", "kiwi"];
arr11[arr11.length] = "Nimboo";
console.log(arr11);

//Delete methode is used to delete eny element from array using index but it leaves undefined holes in the array

let arr12 = ["Orange", "Apple", "Mango", "kiwi"];
delete arr12[2];
console.log(arr12);

//concat method is used to concatenate to arrays

let arr13 = ["Orange", "Apple"];
let arr14 = ["Mango", "kiwi"];
let arr15 = arr13.concat(arr14);
console.log(arr15);

//flat is used to convert a multi-dimensional array into a one-dimensional array.

const myArr = [[1,2],[3,4],[5,6],[5,9]];
const newArr = myArr.flat();
console.log(newArr);

//The splice() method adds new items to an array.first we give index no where we wnat to add element and second no is used to delete rest of values if we want no delete we give 0 .
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(2, 0, "Lemon", "Kiwi");
console.log(fruit);

//slice method is used to take pice of an array
const cruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = cruits.slice(1, 3);
console.log(citrus);




