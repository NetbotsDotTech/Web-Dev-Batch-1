const [first, last] = ["Nikola", "Tesla"];



let data = ["saqlain", 70, 432423, true];
const [name, age, ...others] = data

console.log(`Name : ${name} , Age : ${age}, Other Values :${others}`)

data.push("Shah")
console.log(`Data : ${data}`)