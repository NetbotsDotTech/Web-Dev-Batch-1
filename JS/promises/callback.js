// function calculator(a,b, operation)
// {
//   return operation(a,b)
// }

// function multiply(n1,n2)
// {
//   return n1*n2;
// }

// const mulResult = calculator(4,6, multiply)
// console.log('multiplication =',mulResult)

// let addResult= calculator(5,4,function(num1,num2)
// {
//    return num1+num2;
// });

// console.log("Addition of two no =",addResult)

// let subtraction = (x,y)=>x-y;
// const subResult = calculator(9,3,subtraction);
// console.log("Subtraction =",subResult)



// function Calculator(num1, num2, Callback) {
//   setTimeout(() => {
    
//     let sum = num1 + num2;
//     Callback(sum);
//   }, 3000);
// }

// function Mul(num1, num2, Callback) {
//   setTimeout(() => {
    
//     let mul = num1 * num2;
//     Callback(mul);
//   }, 2000);
// }

// function Displayer(a)
// {
//   console.log(a);
// }
// Calculator(5, 5, Displayer);



// function fetchData(innerFunction) {
//   console.log("Fetching Data...!");
//   setTimeout(() => {
//     console.log("Data fetched");
//     innerFunction()
//   }, 4000);
// }

// function processData(innerFunction) {
//   console.log("Processing Data...!");
//   setTimeout(() => {
//     console.log("Data processed");
//     innerFunction()
//   }, 3000);
// }

// function saveData(innerFunction) {
//   console.log("Saving Data...!");
//   setTimeout(() => {
//     console.log("Data saved");
//     innerFunction()
//   }, 2000);
// }

// fetchData(()=>{
//   processData(()=>{
//     saveData(()=>{
//       console.log("All done!");
//     })
//   })
// })



// function Add(callback) {
//   console.log("Adding Data...!");
//   setTimeout(() => {
//     const sum = 6+5; 
//     callback(sum)
//   }, 4000);
// }

// function mul(callback) {
//   console.log("Multiplying Data...!");
//   setTimeout(() => {
//     const mult=5*5;
//     callback(mult)
//   }, 3000);
// }

// function sub(callback) {
//   console.log("Subtracting Data...!");
//   setTimeout(() => {
//     const sub =11-4;
//     callback(sub)
//   }, 2000);
// }

// Add((a)=>{
//   console.log(a)
//   mul((m)=>{
//     console.log(m)
//     sub((b)=>{
//       console.log(b)
//       console.log("All done!");
//     })
//   })
// })
function add(a, b, callback) {
  console.log('Adding Data....')
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 5000);
}

const multiply = function (a, b, callback) {
  console.log('Multiplying Data....')

  setTimeout(() => {
    const result = a * b;
    callback(result);
  }, 4000);
}

const subtract = (a, b,callback) => {
  console.log('Subtracting Data....')

  setTimeout(() => {
    const result = a - b;
    callback(result);
  }, 3000);
}

function divide(a, b, callback) {
  console.log('Dividing Data....')

  setTimeout(() => {
    if (b === 0) {
      callback("Error: Division by zero");
    } else {
      const result = a / b;
      callback(result);
    }
  }, 2000);
}

// Example usage of the functions with callbacks
const num1 = 10;
const num2 = 15;

add(num1, num2, (t) => {
  console.log(`Addition: ${num1} + ${num2} = ${t}`);
  multiply(num1, num2, (result) => {
    console.log(`Multiplication: ${num1} * ${num2} = ${result}`);
    subtract(num1, num2, (result) => {
      console.log(`Subtraction: ${num1} - ${num2} = ${result}`);
      divide(num1, num2, (result) => {
        console.log(`Division: ${num1} / ${num2} = ${result}`);
      });      
    });
  });
});





