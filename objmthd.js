var person = {
    fname: "Saira",
    lname: "Batool",
    age: 20,
    eyecolor: "Blue"
};
console.log(person.keys());

const person = { fname: "saira", lname: "batool", age: 20 };

let text = "";
for (let x in person) {
    text += person[x] + "\n ";
}
console.log(text);

let objct ={
  name:"hassan",
  class : 5,
  age : 12
}
let text2 =Object.entries(objct);

let subs =" ";
text.forEach(myFunction);

function myFunction(value) {
  subs += value+" ";
}
console.log(subs)

let cars = {
    first: "BMW",
    scnd: "Volvo",
    thrd: "Mini"
};
let entry = Object.entries(cars);
let text3 = "";
for (let x of entry) {
    text3 += x + "\n ";
}
console.log(text3)