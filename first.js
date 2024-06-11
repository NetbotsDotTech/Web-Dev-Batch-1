var x = 10;

    console.log(x);//Global scope use in anywhere in the program.


let y = 20;

    console.log(y);//local scope use in this block.


const z = 30;

    console.log(z);//local scope use in this block.


let v;
console.log(v);
//This variable is declared but not assigne vale so this variable type is undefined.

let w = null;
console.log(w);
//This is a variable which initialized by null or assigned null to it so this variable type is null.

let student = {//This is an object variable which store key value pair.
    name : "Muhammad Nadeem",
    fatherName : "AbluHassan",
    age : 22,
    city : "skardu",
    institution : "NetBots",
}
console.log("Hello my name is " + student.name + " my father Name is " + student.fatherName + " and i am " + student.age + " year old. ");