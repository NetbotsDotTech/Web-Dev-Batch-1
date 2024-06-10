// for basic methods of array like pop,push,shift and unshift 
let a =["ali","ahmad","aslam","ibahim","shahid"]
console.log("printing the real array")
console.log(a)
console.log("Pop last element")
a.pop()
console.log(a)
console.log("insert at last element")
a.push("Basit")
console.log(a)
console.log("delete first element")
a.shift()
console.log(a)
console.log("insert at first element")
a.unshift("Zeeshan")
console.log(a)
console.log("Lenght of array")
console.log (a.length)


// for changing to upper case
console.log ("Converts to upper case by using map")
let a_map = a.map(para=>para.toUpperCase())
console.log(a_map)


// using filter method with certain conditions 
let man = ["ali","ahmad","aslam","ibahim","shahid"]
console.log("using filter method with certain conditions ")
let loqso = man.filter( (para) => [ para.man==="a"])
console.log(loqso)


// showing lenght of array
let arr = [1,2,3,4,5,6]
let size = arr.length;
console.log("Showing lenght of array")
console.log(size)


// Converts array  to string 
let ass = man.toString()
console.log("Convert to stirng")
console.log(ass)


//for foreach methods of arrray

let gama =  ["Ali","Ahmad","Aslam","Basit","Bashir"]
let chik = gama.forEach(par => par.toUpperCase())
console.log("Applying for each")
console.log(chik)