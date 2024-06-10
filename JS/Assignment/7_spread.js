console.log("Applying spread to array")
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); 



console.log("Merging two array by applying spread")
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);


console.log("Adding new element to array with spread")
const array = [1, 2, 3];
const newArray = [0, ...array, 4,5];
console.log(newArray);


console.log("Applying sperasd to object")
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject);


console.log("Merging two object by spread")
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);

console.log("Adding new element to object by spread ")
const taza = { a: 1, b: 2 };
const newObject = { ...taza, c: 3 };
console.log(newObject);


console.log("Applying spread to function")
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));


console.log("Applying spread to String")
const str = "hello";
const chars = [...str];
console.log(chars);


console.log("Applying spread to String array")
const fruits = ['apple', 'banana', 'cherry'];
const moreFruits = ['date', ...fruits,'Orange']
console.log(moreFruits)
