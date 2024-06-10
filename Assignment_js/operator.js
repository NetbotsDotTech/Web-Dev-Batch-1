//operator in js

//pre operator

let num = 5;
console.log(num);
++num;
console.log(++num); //increment before exicution
console.log(num++);//increment after exicution exicution
console.log(num)

console.log("*****************************************************");

//post operator in js
let num2 = 11;
num2++;
console.log(num2++) //increment after exicution
console.log(num2);
console.log(++num2); //increment before exicution
console.log("*****************************************************");

//Double equal only check value in this case same is print
let value = 10;
let str = "10";
if(value==str){
    console.log("same");
}else{
    console.log("Different");
}
//Triple equal check value as well as datatype in this case different is print
let val = 10;
let strng = "10";
if(value===str){
    console.log("same");
}else{
    console.log("Different");
}