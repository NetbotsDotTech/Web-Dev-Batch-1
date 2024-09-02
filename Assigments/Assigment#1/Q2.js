let Std={
    name: "Shahid Hussain",
    fname: "Gulab Deen",
    age: "19",
    domicle: "GB",

}
const Result={
    english: 80,
    maths: 90,
    urdu: 85,
    sci: 95,

}
const Fee={
    dues: 5000,
    pay: false,
}
Object.freeze(Fee);
//Modification
console.log(Result)
Result.english=10;
console.log(Result)
//No Modifictaion in obj Fee
Fee.pay=true; //Will not able to modify
console.log(Fee)