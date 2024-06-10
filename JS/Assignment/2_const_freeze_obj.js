// Geting the same example for conviniance
const obj ={
    Name : "Zeeshan Haider",
    Department : "BSCS",
    Reg : "S23BSCS036",
    Institution : "UOBS"
}

console.log("Printing constant obj")
console.log(obj)

// Updating the values of obj
Object.preventExtensions(obj)
obj.Name = "Shahid Hussain"
obj.Department = "BSCS"
obj.Reg = "S23BSCS018"
obj.Institution = "UOBS"
obj.skills ="Mern Stake Development"
console.log("The Updated Constant Obj")
console.log(obj)

Object.freeze(obj)
// now we will try to change the obj values after using freeze method
obj.Name = "Basit Ali"
obj.Department = "BSCS"
obj.Reg = "S23BSCS012"
obj.Institution = "UOBS"

console.log("Trying to change freeze Obj")
obj.skills ="Mern Stake Development"
console.log(obj)
// since this is a freezed obj it is not accapt any change
