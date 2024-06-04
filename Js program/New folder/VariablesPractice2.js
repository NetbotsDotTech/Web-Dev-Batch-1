/*
Variable:
    It is like a container in which we store something(something means any value)
There are three key word used in javaScript to declare or initialized any type of variable which are given under:-
        i-var (Scope:Global):   
        ii-let(Scope:Block/local)
        iii-const(Scope:Block/local)
    Note:
        let and const introduced in Ecmascript of ES6 after 2015
    Syntax:

    var/let/const variableName = any Value

    Note:
        ---> We don't used var more
        ---> We work with let and const more
        --->const must be initalized at the declaration time
        ---->const cann't modify only access if we declare or initialize basic varible with key word const
        ---->const can modify when we make any object or array with the keyword const in this situation we modify it
        
*/
//Program about Variables:
// var num1=10 
// var num2=100
// console.log("Sum of two number is:",num1+num2)
// console.log("Type is: ",typeof(num1),"and",typeof(num2))



// var fname="basit"
// var lastName="ali"
// console.log("Sum of tow string is:",fname+lastName)
// console.log("Type is:",typeof(fname),"and",typeof(lastName))

// let  number
// console.log(typeof(number))
// let reg=null
// console.log(typeof(reg))



// let nigth=true
// console.log(nigth)
// console.log( typeof(nigth))

// const num3=45
// console.log(num3/0)
// num3=90
// console.log(num3)
// const num4=""
// console.log(typeof(num4))

// const str="king is the king"
// console.log(str)

let arr=[12,"basit",55/3]
console.log(arr)
const arr1=[{"name":"king","reg":"012"},"Uobs",123]
console.log(arr1)
let arr2=[12,34,54,["basit","muhammad",["Sakina","hassina","botool"]]]
console.log(arr2)

const obj={
    firstName:"Basit",
    lastName:"Ali",
    reg:"S23BSCS012",
    Section:"A",
  
}
console.log(obj)

let object={
    "1":"A",
    "2":"B",
    "3":"C",
    "4":"D",
    5:"E",
    "6":"F",
    7:"H"
}
console.log(object)
console.log(typeof(object))











