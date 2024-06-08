let person = {
    name:"Ali",
    age:20,
    married:false
}

console.log(person)


const Fruits = {
    name:"Apple",
    KG:20,
    price:1000,
    is_fruit:true
}
const Fruit = {name: "Banana",KG: 10};

console.log(Fruits)
let fruits = Object.assign(Fruits,Fruit)
console.log(fruits)

const Animal = {
    name:"Lion",
    Color:"orange",
    SpeedPerHour:100,
    is_halal:false,
}
const Add = {LionIs: "King of Jungle"};

console.log(Animal)
let Animals = Object.assign(Animal,Add)
console.log(Animals)

