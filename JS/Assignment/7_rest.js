console.log("Applying rest to a function")
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("1"," : ",sum(1, 2, 3));
console.log("2"," : ",sum(4, 5, 6, 7)); 
console.log("3"," : ",sum(4, 5)); 


console.log("Using rest in destructuring of array")
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("1"," : ",first); 
console.log("2"," : ",second);
console.log("3"," : ",rest);  


console.log("Using rest in destructuring of object")
const person = { name: 'Alice', age: 25, city: 'Wonderland' };
const { name, ...details } = person;
console.log(name);
console.log(details); 