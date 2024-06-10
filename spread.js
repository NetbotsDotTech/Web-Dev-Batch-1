const user1 = {
	name: 'Jen',
	age: 22,
};

const user2 = {
	name: "Andrew",
	location: "Philadelphia"
};

const mergedUsers = { ...user1, ...user2 };
console.log(mergedUsers);






// spread operator for copying 
let arr = ['a', 'b', 'c'];
let arr2 = [...arr];

console.log(arr); 
// [ 'a', 'b', 'c' ]

arr2.push('d'); 
//inserting an element at the end of arr2

console.log(arr2); 
// [ 'a', 'b', 'c', 'd' ]
console.log(arr);
// [ 'a', 'b', 'c' ]
