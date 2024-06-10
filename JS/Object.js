// Creating a javascript object...
// Create an Object
// const person = {};

// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// console.log(person)

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
//   const myFather = new Person("John", "Doe", 50, "blue")
 
//   console.log()

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// const mySister = new Person("Anna", "Rally", 18, "green");

// const mySelf = new Person("Johnny", "Rally", 22, "green");

// console.log(myFather)

// let detail = {
//     title: "Mern stack Course",
//     auther: "Saqlain Shah"
// };

// let { courseTitle, name } = detail;

// console.log("Name", courseTitle)
// console.log("course Title", name)

let detail = {
    title: "Mern stack Course",
    auther: "Saqlain Shah"
};

let { title: courseTitle, auther: name } = detail;

console.log("Name:", name);
console.log("Course Title:", courseTitle);
