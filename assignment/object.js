let person = {
    name: "Ali",
    age: 20,
    married: false
}

console.log(person)


const Fruits = {
    name: "Apple",
    KG: 20,
    price: 1000,
    is_fruit: true
}
Fruits.name = "Apear";
Fruits.is_local = false;

console.log(Fruits)

const Animal = {
    name: "Lion",
    Color: "orange",
    SpeedPerHour: 100,
    is_halal: false,
}
console.log(Animal)

let Add = {
    name: "Tigar",
    Color:"Yellow",
    is_King: true
}
for (const key in Add) {
    if (!(key in Animal)) {
        Animal[key] = Add[key];
    } else {
        console.log(`The key "${key}" is already exist in Animal`);
    }
}


console.log("Updated Object=",Animal)

