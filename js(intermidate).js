console.log("User Defined Function")
function sum(a,b)
{
    return a+b;
} 
let x=sum(5,6)
console.log(x)

console.log("STRINGS")

var favgame="Call of Duty";
console.log(favgame.length) //will show string length
console.log(favgame[0]) //will show the specified index alphabet
console.log(favgame[favgame.length-1])  //last alphabit 
console.log(favgame.indexOf("of")) //search the index
console.log(favgame.slice(0,3))//will show only the specified alphabits

var nam="my Name is Shahid hussain." 
console.log(nam.toUpperCase());
console.log(nam.toLowerCase());

//ARRAYs
console.log("Arrays In JS")
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars) //printing all array elements

let courses=["HTML","CSS","Javascript","React"]
console.log(courses[0])
console.log(courses[1])
console.log(courses[2])
console.log(courses[3])
//overwrite element with index
courses[1]= "Bootstrap";
console.log(courses);
//for length
console.log(courses.length)

// Iterating through for loop
console.log("IN LOOP")
for (let i = 0; i < courses.length; i++) 
    {
    console.log(courses[i])
}
//Array Concotation
let other_array=["Reacct","Express"]
concat_array=courses.concat(other_array)
console.log(concat_array)

// Convert array ot String
console.log("TO String: ")
console.log(courses.toString());

//FUNCTIONS
function MyFunc()
{
    console.log("Hello Function")
}
MyFunc() //Calling Function
function MyFunc(first,second)
{
    console.log("First Name: ",first);
    console.log("Last Name: ",second);
}
MyFunc("Shahid","Noori")

//Objects
let Std=
{
    name: "Shahid Hussain",
    age: 19

}
console.log(Std)

