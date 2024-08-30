let naam="Shahid"
console.log(naam)

console.log(naam[0])
console.log(naam[1])
console.log(naam[2])
console.log(naam[3])
console.log(naam[4])
console.log(naam[5])
// console.log(naam[6]) //undefind no character
console.log(naam.length) //length

//Template Litrals
let name="noori"
let friend="Shehzad"
console.log("his name is "+name+" and his friend is "+friend)
console.log(`His name is ${name} and his friend name is ${friend}`)

let d="Skardu"
console.log(d.toUpperCase())
console.log(d.toLowerCase())
console.log(d.length)

//SLICE*
 let e="Zinger"
 console.log(e.slice(1,4)) //4 is not include
 console.log(e.slice(1)) //After 1 to onward all will give

 console.log(e.replace("Z","G"))

 console.log(e.concat(d))
 console.log(e.concat(" Khana hai"," Garma Garam"))
//After all of this the string of orginal can never changed

console.log(e.charAt(2))
console.log(e.indexOf("g"))

e.startsWith("G") //False 