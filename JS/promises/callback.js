function calculator(a,b, operation)
{
  return operation(a,b)
}

function multiply(n1,n2)
{
  return n1*n2;
}

const mulResult = calculator(4,6, multiply)
console.log('multiplication =',mulResult)

let addResult= calculator(5,4,function(num1,num2)
{
   return num1+num2;
});

console.log("Addition of two no =",addResult)

let subtraction = (x,y)=>x-y;
const subResult = calculator(9,3,subtraction);
console.log("Subtraction =",subResult)


