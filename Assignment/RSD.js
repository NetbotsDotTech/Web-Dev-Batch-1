//    <=====Seperate operator=====>
function sum(...numbers) {
  return numbers.reduce(
    (total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));

//    <=====Rest operator=====>

const arr1 = [1, 2, 3];
const arr2 = [4, 5, ...arr1];

console.log(arr2);

//   <=====Destructuring======>
const person = { name: 'Muhammad', age: 30 };
const { name, age } = person;

console.log(name);
console.log(age);
