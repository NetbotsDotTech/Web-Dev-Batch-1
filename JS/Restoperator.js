// const numbers = [1,2,3,4,5,6];
// const [a,b,c,d,e,f]=numbers
// console.log(numbers)

// const numbers = [1,2,3,4,5,6]; 
// console.log("numbers",numbers)
// const [one,two,...third] = numbers;

// console.log(third)
// // console.log(one,two,...third)

// var a = [10,20,30,40,50];
// var b = [60,70,80,90,100];
// // var normal = [a+b];
// // var normal = [a,b];
// var normal = [...a,...b];
// console.log("Spread operator",normal)

const numbers = [1,2,3,4,5,6];
console.log("numbers",numbers);
const [one,two,...third] = numbers;
console.log(third)
// const value = [one,two,...third];
// console.log("value",value)