// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
removeNeg()