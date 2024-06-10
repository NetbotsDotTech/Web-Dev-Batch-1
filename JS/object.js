let Student = {

    Name : "Zeeshan Haider",
    Reg : 1234,
    Course : "BSCS",
    Institution : "UOBS",
    skill : "Web development",

}
console.log("Printing the original class")
console.log(Student)

console.log("Updating the name of student")
Student.Name="Basit Ali"
console.log(Student.Name)


let k = Object.keys(Student)
console.log("Printing the keys of object")
console.log(k)

let v = Object.values(Student)
console.log("Printing the values of object")
console.log(v)

Object.freeze(Student)
Student.Name = "Zeeshan Haider"
console.log("After freezing The Object")
console.log(Student)

let cr = Student
console.log("After creating a new Object")
console.log(cr)


cr.Name="Zeeshan Haider"
console.log("After updating the new object name")
console.log

let arr = Object.entries(Student)
console.log("Changing the object to array")
console.log(arr)
console.log("Printing the 0 index of array")
console.log(arr[0])

