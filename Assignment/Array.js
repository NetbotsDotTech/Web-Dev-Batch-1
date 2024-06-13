let Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//method 01
Array1 = [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(Array1)
//method 02
let indexreplace = 2;
let newvalue = 32;
let originalvalue = Array1[indexreplace];
Array1[indexreplace] = newvalue;
console.log(Array1)


const Array2 = [4, 5, 6];
Array2.push(20);
//   Array3.push(22); here its not allowed to push the value because the freeze method 
console.log(Array2);

const Array3 = [7, 8, 9];
Object.freeze(Array3)
console.log(Array3);


let arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6]
]

arrayOfArrays[0][1] = 10;

console.log(arrayOfArrays);
