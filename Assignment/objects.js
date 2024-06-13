var object1 = {
    name: "Saira",
    age: 20,
    isStudent: true,
    hobbies: ["reading", "cooking"],
    address: null,
    details: {
        height: 175,
        weight: 70.5
    }
}

//     OBJECT1 CHANGES ALL THE VALUES
object1 = {
    name: "Maryam",
    age: 15,
    isStudent: false,
    hobbies: ["Sliding", "writing"],
    address: "Street#012 House#14",
    details: {
        height: 182,
        weight: 18.2,
    }
}

console.log(object1)

//   <===============Object2================>
const object2 = {
    name: "Maira",
    age: 18,
    isStudent: true,
    hobbies: ["playing", "sketching"],
    address: "StaateerW#108,house#17",
    details: {
        height: 160,
        weight: 55.8
    }
}

console.log(Object.seal(object2))

object2.name = "naira",
    object2.age = 10,
    object2.isStudent = false

console.log(object2.name + " " + object2.age + "  " + object2.isStudent)


//      <================Object3==============>
const object3 = {
    name: "Bushra",
    age: 15,
    isStudent: true,
    hobbies: ["reading", "singing"],
    address: null,
    details: {
        height: 135,
        weight: 40.2
    }
}
// FOR OBJECT3 WHOSE VALUES ARE  Not REPLACED BY THE NEW VALUES

Object.freeze(object3);
Object.freeze(object3.details);

object3.hobbies = ["Sliding", "writing"];
object3.details.weight = 76.4;
object3.address = "hgftyrwed";

console.log(object3);



