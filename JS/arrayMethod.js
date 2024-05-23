
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

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(addFunction);

function addFunction(item) {
  sum += item;
}

console.log("Sum=",sum)

numbers.forEach(multipleFun)
function multipleFun(item) {
    return item*5;
  }
// function multipleFun(item, index, arr) {
//     mult=arr[index]= item*10;
//   }
  const multipliedNumbers = numbers.map(multipleFun);
  console.log("Original Array =",numbers)
  console.log("Multiple by 5 of each item in the array =",multipliedNumbers)


const ages = [32, 33, 16, 40,12,17];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log("Greater then 17 : ",result)