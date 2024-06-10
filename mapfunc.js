const numbers = [2, 4, 6, 8, 10];
const squareRoots = numbers.map(num => Math.sqrt(num));

console.log(squareRoots); // Output: [1, 2, 3, 4, 5]


// Input array
let arr = [4, 5, 6, 7, 8, 10];

// Using map to transform elements
let newArr = arr.map(function (val, index) {
    return { key: index, value: val * val };
})

// Display output
console.log(newArr)
