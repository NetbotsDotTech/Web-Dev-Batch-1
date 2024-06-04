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



function Add(callback) {
  console.log("Adding Data...!");
  setTimeout(() => {
    const sum = 6+5; 
    callback(sum)
  }, 4000);
}

function mul(callback) {
  console.log("Multiplying Data...!");
  setTimeout(() => {
    const mult=5*5;
    callback(mult)
  }, 3000);
}

function sub(callback) {
  console.log("Subtracting Data...!");
  setTimeout(() => {
    const sub =11-4;
    callback(sub)
  }, 2000);
}

Add((a)=>{
  console.log(a)
  mul((m)=>{
    console.log(m)
    sub((b)=>{
      console.log(b)
      console.log("All done!");
    })
  })
})
