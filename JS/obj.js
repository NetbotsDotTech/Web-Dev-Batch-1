const person = {
  name: "",
  age: 56,
  marks: [
    50,
    {
      theory: 30,
      practical: 15,
    },
    70,
  ],
  isMale: true,
};

const person1 = {
  name1: "",
  age1: 56,
  marks1: [
    50,
    {
      theory: 30,
      practical: 15,
    },
    70,
  ],
  isMale1: true,
};
const userData = [" ", 56, true];
person.name = "saqlain";
//person = person1;
console.log("Object", person);
console.log("Object", person1);
//person = person1;
console.log("userData", userData);


//console.log("Array", userData);

userData[1] = 98;

//console.log("Array", userData[1]);

//console.log("Practical", person.marks[1].practical);
//let a = 10;
//let b = a;


