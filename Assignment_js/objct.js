//This object allow to add new attributes and modification of values
var student = {
    name : "Ali",
    age : 22,
    remarks : true,
    arr : [1,2,3,4],
    obj : {a : 6, b : 7, c : 8, d : 9},
}
console.log(student);

student.newKey = "New key added in objct";
console.log(student);

student.age = 23 //modify age value
console.log(student);

 student.arr.push(5,6); //add new value in array 
 console.log(student);

 student.obj.e = 88;   //add new key value pair in object
 console.log(student);


 //object two 

 //this object is freez we cannot modify the values and cannot add new attributes 

 "use strict";
 let obj1 = Object.freeze({
    name : "Nadeem",
    age : 22,
    remarks : true,
    arr : [1,2,3,4],
    obj : {a : 6, b : 7, c : 8, d : 9},
 })

obj1.newKey = 'New value';//Here this key value is not added to the obj1 because the obj1 is freez and immutable
 console.log(obj1)


 //object 3

 //This code allow to add new attributes in the object but cannot allow to modify the existing value

 const student77 = {
    name : "sajid",
    age : 55,
    arr : ['a','b','c','d'],
    objct : {k:33,r:44,t:77}
 }
 Object.defineProperty(student77, "name", {writable: false});
 Object.defineProperty(student77, "age", {writable: false});
 Object.defineProperty(student77, "arr", {writable: false});
 Object.defineProperty(student77, "objct", {writable: false});

 student77.newKey = "newValue"; //adding new value 
  console.log(student77);

 student77.name = "ali"; //cannot modify value 
 console.log(student77);






    
