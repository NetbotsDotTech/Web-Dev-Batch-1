console.log("Hello WOrld")
var a=100 //Global variable
let b=99 //Local Variable
const c=55 //Constant 
console.log(a)
console.log(b)
console.log(c)

{
    console.log("In Block")
    let b=100 //Second Local Variable
    console.log(b)  //Second Local
    var a=1
    console.log(a)
}
console.log(b) //First Local 
console.log(a) //Here a changed its value to 1
console.log("Conditions")
if (5<=10)
    {
        console.log("True")
    }
else{
    console.log("False")
}
switch(a)
{
    case 1:
        console.log("a= "+a)
        break;
    case 2:
        console.log("a= "+a)
        break;
    default:
        console.log(a)
}
for(let i=0;i<=10;i++)
    {
        console.log(i)
    }
console.log("While Loops")
let d=1;
while(d!=10)
    {
        console.log(d)
        d++
    }
console.log("Do-While")
let e=1
do {
    console.log("e= "+e)
    e++
}
while(e!=4)
    {
        console.log("E= "+e+ " Break")
    }