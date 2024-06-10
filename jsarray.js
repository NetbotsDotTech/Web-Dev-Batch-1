// Create and initialize an array 
let courses = ["HTML", "CSS", "JavaScript", "React"]; 

// Display the array items 
console.log(courses); 

// Create a new empty array 
let newArray = []; 

// forEach loop to push elements 
// into new array 
courses.forEach(function (course) { 
	newArray.push(course); 
}); 

// Display the new array of items 
console.log(newArray); 

// Using elements
const array1 = new Array(1, 2, 3, 4, 5)

// Using arrayLength
const array2 = new Array(10)

console.log(array1);
console.log(array2)

let arr = new Array("Geeks", "for", "Geeks");
console.log("arr.length:" + arr.length);

//// return array object
let myArr = Array.from("45878965412365");
console.log(myArr);

	// Here the Array.of() method creates a new Array instance with
	// a variable number of arguments, regardless of
	// number or type of the arguments.
	console.log(Array.of(0, 0, 0));
	console.log(Array.of(11, 21, 33));
	console.log(Array.of("Ram","Geeta"));
	console.log(Array.of('geeksforgeeks'));
	console.log(Array.of(2,3,4,'Sheeta'));

	const arr1 = [45, 32, 69, 21];
	const index = 3;

	console.log(arr1.at(index));

    // JavaScript code for concat() method
function func() {
	let num1 = [11, 12, 13],
		num2 = [14, 15, 16],
		num3 = [17, 18, 19];
	console.log(num1.concat(num2, num3));
}
func();

// Input array
let array = [1, 2, 3, 4, 5, 6, 7];

// placing at index position 0 the element
// between index 3 and 6
console.log("Array " + array.copyWithin(0, 3, 6));


// JavaScript code for every() method
function isEven(element, index, array) {
	return element % 2 === 0;
}
function func() {
	let arr = [56, 92, 18, 88, 12];

	// Check for even number
	let value = arr.every(isEven);
	console.log(value);
}
func();


// input array contain some elements.
let array3 = [1, 2, 3, 4];

// Here array.fill function fills with 0
// from position 2 till position 3.
console.log(array3.fill(0, 2, 4));

// input array contain some elements.
let array4 = [1, 2, 3, 4];

// Here array.fill function fills with 0
// from position 2 till position 3.
console.log(array4.fill(0, 2, 4));
// JavaScript to illustrate findIndex() method
function canVote(age) {
	return age >= 18;
}

function func() {
	let filtered = [24, 33, 16, 40].filter(canVote);
	console.log(filtered);
}
func();
