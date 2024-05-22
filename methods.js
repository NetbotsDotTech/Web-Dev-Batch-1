let paragraph = "Javascript strings are primitive and immutable: All string methods produces a new string without altering the original string.";

let Length = paragraph.length;

console.log(Length)

let position = paragraph.charAt(20)
console.log(position)

let charCode = paragraph.charCodeAt(0)
console.log(charCode)

let at = paragraph.at(20)
console.log(at)

let access = paragraph[20]
console.log(access)


let slice = paragraph.slice(-78)
console.log(slice)

let sliceNeg = paragraph.slice(-79,-8)
console.log("Slice",sliceNeg)

let subString = paragraph.substring(-78,7)
console.log("Substring",subString)

let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2)


let text3 = text2.toLocaleLowerCase();
console.log(text3)

let t1 = "Hello";
let t2 = "World";
let t3 = t1.concat("-", t2);
console.log(t3)
let t4 = t1 +"-"+ t2;
console.log(t4)

let tex1 = "      Testing the trim!      ";
let tex2 = tex1.trim();
console.log(tex2);

let text = "5";
let padded = text.padEnd(4,"0");

console.log(padded)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log("Length of array =",size)

let string = fruits.toString();
console.log("Array convert into string =",string);

let fruit = fruits.at(2);
console.log("At methods=",fruit)

let join = fruits.join("*");
console.log("Join of array list=",join);

let pop =fruits.pop();
console.log("Pop is remove the last element of the array:",pop)

let push =fruits.push("Kiwi");
console.log("Push is add the new element to an array at the end:",fruits)

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit2 = fruits2.shift();
console.log("Shift mehtods:", fruit2)
console.log("After Shift mehtods array elements:", fruits2)

fruits2.unshift("Lemon");
console.log("Unshift mehtods:", fruits2)

const myArr = [[1,2],[5,6],[7,8]];
const newArr = myArr.flat();
console.log("Flat (concatenated new with sub array:)",newArr)

myArr.splice(1, 0, [3, 4]);
console.log("Spice (add new elements to the array:)",myArr)


