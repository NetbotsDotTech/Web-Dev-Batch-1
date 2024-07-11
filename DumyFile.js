function fetchApi1(){
    let url = 'https://jsonplaceholder.typicode.com/todos/2'
    console.log("fetching api 2.....")
    return new Promise((resolve)=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then((url)=>url.json())
            .then((url)=>console.log(url.json))
        resolve("resolve successfull...")
        resolve();
        }, 3000);
    })
}

async function All(){
    await fetchApi();
    await fetchApi1();
}

//First array in we can change values and add attributes
var arr1 = [22,
    true,
    "Hello",
    obj={
        name : "Kashan",age: 34,cgpa:3.5,
}]
console.log(arr1);
// Add a new property to the object inside the array
arr1[3].grade = 'A';
console.log(arr1);
//change value of name
arr1[3].name = "ALI"
console.log(arr1)
arr1.push("New value")
console.log(arr1)

//Example 2

function func2(...num) {
    let sum = 0; // Initialize sum outside the loop
    
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i]; // Update sum with each element
    }
    
    console.log(sum);
}

func2(1, 2, 3, 4, 5);

//function which print even number
console.log("***************************************");

function fun2 (y){
    for(let i=0;i<=y;i++){
        if(i%2==0){
            console.log(i);
        }
    }
   
}
fun2(20);


//Destructring 

let arr = [1,2,3,4,5];
let [a,b,...rest] = arr;
console.log(a);
console.log(b);
console.log(rest);
console.log(...arr);

let student = {//This is an object variable which store key value pair.
    name : "Muhammad Nadeem",
    fatherName : "AbluHassan",
    age : 22,
    city : "skardu",
    institution : "NetBots",
}
console.log("Hello my name is " + student.name + " my father Name is " + student.fatherName + " and i am " + student.age + " year old. ");

let num = 5;
console.log(num);
++num;
console.log(++num); //increment before exicution
console.log(num++);//increment after exicution exicution
console.log(num)

console.log("**************************************************");
//var variable can be reinitialize and can be modify
var name = "Muhammad";
console.log(name);