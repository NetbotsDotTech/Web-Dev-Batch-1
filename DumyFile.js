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