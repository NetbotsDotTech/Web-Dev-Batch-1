// for basic methods of array like pop,push,shift and unshift 
let a =["ali","ahmad","aslam","ibahim","shahid"]
a.pop()
a.push("Basit")
a.shift()
a.unshift("Zeeshan")
console.log (a.length)
console.log(a)


// for changing to upper case
console.log ("Converts to upper case by using map")
let amap = a.map(para=>para.toUpperCase())
console.log(amap)


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

