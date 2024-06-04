//console.log("Hello Jalal Hussain");
const a = 2;
const myName = "Jalal HUssain";
const isMale = true;
//console.log(a);
//console.log("Name =", myName);
//console.log("isMale =", isMale);

{
  let a = 10;
  // let a = 23;
  // console.log(a);
}
{
  let a = 2;
  let b = 67;
  // console.log(a);
  //console.log("inside block  b =", b);
}
{
  // var a = 10;
  // const a = 45;
  var b = 34;
  // let a = 23;
  // console.log(a);
  // console.log("inside block  b =", b);
}

//console.log("outside block  b =", b);

//object

const student = {
  fullName: "Jalal Hussain",
  age: 25,
  isMale: true,
  marks: [
    {
      Phy: {
        Theory: 60,
        Practical: 30,
      },
    },
    {
      Chem: {
        Theory: 78,
        Practical: 40,
      },
    },
    {
      Bio: {
        Theory: 89,
        Practical: 50,
      },
    },
    { urdu: 90 },
  ],
};

//console.log(student);

// let person2 = {
//   fullName: "Jamal Hussain",
//   age: 20,
//   isMale: true,
// };
// // person = person1;
// console.log(person2);

// array
let marks = [23, 34, 46, 56];

//console.log(marks);

let num1 = 1;
let num2 = 2;
//let sum = ++num1 + --num2;
//console.log(sum);+
if (num1 !== num2) {
  console.log("True");
} else console.log("False");

if (num1 >num2 && num2+1==num2){
 
  console.log("True");

}else 
  console.log("False");
if(num1+num2||num1++>num2){
     console.log("True");

}else
    console.log("False");

 