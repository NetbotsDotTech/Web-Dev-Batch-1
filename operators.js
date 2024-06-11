//Arthematic operators

let x = 2;
let y = 3;
console.log("x + y = ",x + y);//addition
console.log("x - y = ",x - y);//subtraction
console.log("x * y = ",x * y);//multiplication
console.log("x / y = ",x / y);//division
console.log("x % y = ",x % y);//modules
console.log("x++",x++);//post increment
console.log("--x",--x);//pre increment
console.log("y--",y--);//post decrement
console.log("--y",--y);//pre decrement
console.log((x + y)-(x-y));//grouping

//conditional operators
// 1- 

let a = 10;
let b = 20;

if(a==b)
{
    console.log("a is equal to b");
}
else if(a>b)
{
    console.log("a is greater then  b");
}

else (a!=b)
{
    console.log("a is greater then  b");
}

//logical operators
//1-logical AND
let marks = 75;
if(marks<=100 && marks>=80)
{
    console.log("You remarks is grade A+");
}

else if(marks<=79 && marks>=70)
{
    console.log("You remarks is grade A");
}

else if(marks<=69 && marks>=60)
{
    console.log("You remarks is grade B");
}

else if(marks<=59 && marks>=50)
{
    console.log("You remarks is grade B");
}

else
{
    console.log("You are failed:");
}







