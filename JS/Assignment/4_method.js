console.log("Printing the original object ")
let obj = {
    Name : "Zeeshan",
    Reg : 23036,
    Student : true
}
console.log(obj)



console.log("Converting the object into nested array of key and value")
var obj1 = Object.entries(obj)
console.log(obj1)



console.log("Storing the boolean property of obj in a variable ")
let {Name , Reg ,Student} = obj
console.log(Student)





console.log("now convert the boolean value to string")
let badal = obj.Student.toString()
console.log(badal)


console.log("Printing the type of boolean after converting to string  ")
console.log(typeof badal)

