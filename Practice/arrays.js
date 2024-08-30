let arr=[1,2,3,5,7,8]
console.log(arr)

console.log("Length: ",arr.length)
console.log(arr[0])
console.log(arr[4])

arr[2]=12;  //Array can be changed(mutable)

console.log("updated array: ",arr)  //type of array is object

console.log(arr.toString())

//JOIN

console.log(arr.join(" and ")) //where is comma wll replace with "and"
let a=[1,2,3,4]
console.log(a.pop()) //Last element is pop out from orginal array

a.push(100)
a.push("Noori")
console.log(a)

a.shift() //will pop out first index to orginal array
console.log("Shift (pop): ",a)
a.unshift("Add") //will add at first of orginal array
console.log("UnShift (push): ",a)

//CONCATINATION
let a1=[1,6,7,4]
let a2=[5,2,3,8]
let a3=[9,10]
console.log(a1.concat(a2,a3))

console.log("Sort: ",a1.sort())

// SPLCE used for adding and removing elements from 1 position
let a4=[1,2,3,4,5,6]
a4.splice(1,2) //(starts,how much to delete)
console.log("Splice: ",a4) 

let a5=[1,2,3,4,5,6]
 a5.splice(1,2,22,33)//remove forst 2 and add other 2 inplace of that
 console.log("Splice(add): ",a5)
//SLICE
const a6=[1,2,3,4,5,6,7,8]
console.log("Slice1: ",a6.slice(3)) // delete ([0],[1]) from only function
console.log("Slice2: ",a6.slice(0,2)) //Only this index will shown

let a7=[1,56,2,4,88]
for (let i = 0; i < a7.length; i++) {
    const element = a7[i];
    console.log(element)
}

console.log("FOR EACH LOOP:")
 a7.forEach((value,inedx,arr) => {
    console.log("Value: ",value," Index: ",inedx," Array:",arr)
 })

 //FOR In
let obj=
{
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
        
    }
}

//FOR_OF
console.log("FOR_OF")
for (const value of a7) {
    console.log(value)
}
//MAP
console.log("MAP")

let a8=[2,4,6,8,10]
let newarray=[]
/*
for (let i = 0; i < a8.length; i++) {
    const element = a8[i];
    newarray.push(element**2)
}
console.log(newarray)*/
newarray= a8.map((e)=>{
    return e**2
})
console.log(newarray)

//Can be used as  map(element,index,Array)

//Filter:*
console.log("Filter")
const  check_no=(no)=>{
    if (no>50)
        return true
    else
    return false
}
console.log(newarray.filter(check_no))