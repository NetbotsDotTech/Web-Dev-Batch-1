// Creating an array
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log('Initial array:', fruits);
// 1. push(): 
fruits.push('Orange');
console.log('After push:', fruits);
// 2. pop():
fruits.pop();
console.log('After pop:', fruits);
// 3. unshift():
fruits.unshift('Mango');
console.log('After unshift:', fruits);
// 4. shift(): 
fruits.shift();
console.log('After shift:', fruits);
// 5. indexOf(): 
let index = fruits.indexOf('Banana');
console.log('Index of Banana:', index);
// 6. splice(): 
fruits.splice(1, 1); 
console.log('After splice:', fruits);
// 7. slice():
let newFruits = fruits.slice(0, 1);
console.log('After slice:', newFruits);
// 8. join():
let fruitString = fruits.join(', ');
console.log('After join:', fruitString);
// 9. forEach(): 
fruits.forEach(function(item, index) {
  console.log(index, item);
});
// 10. map():
let upperFruits = fruits.map(function(item) {
  return item.toUpperCase();
});
console.log('After map:', upperFruits);
// 11. filter():
let filteredFruits = fruits.filter(function(item) {
  return item.startsWith('C');
});
console.log('After filter:', filteredFruits);
// 12. reduce(): 
let fruitLengths = fruits.reduce(function(total, item) {
  return total + item.length;
}, 0);
console.log('After reduce:', fruitLengths);
// 13. some():
let hasCherry = fruits.some(function(item) {
  return item === 'Cherry';
});
console.log('After some:', hasCherry); 
// 14. every(): 
let allStartWithA = fruits.every(function(item) {
  return item.startsWith('A');
});
console.log('After every:', allStartWithA);
// 15. find():
let foundFruit = fruits.find(function(item) {
  return item.startsWith('C');
});
console.log('After find:', foundFruit);
// 16. findIndex(): 
let foundIndex = fruits.findIndex(function(item) {
  return item.startsWith('C');
});
console.log('After findIndex:', foundIndex); 
// 17. sort():
let numbers = [3, 1, 4, 1, 5, 9];
numbers.sort();
console.log('After sort:', numbers);
// 18. reverse(): 
numbers.reverse();
console.log('After reverse:', numbers);
