//Promises in javascript

let p = new Promise((resolve, rejected) =>{
    let a = 1+2;
    if (a==2){
        resolve("successfull")
    }
    else{
        rejected("Failed")
}})

p.then((message) => {
    console.log("This is then " + message)
})
.catch((message) => 
{
    console.log("This is catch " + message)
})

//example 2

async function fun (){
    await setTimeout(() =>{
        console.log("Hello one")
    },3000);
}

function fun2(){
    console.log("Hello two")
}

function fun3(){
    console.log("Hello three")
}

fun();
fun2();
fun3();

//Example 3

let pro = new Promise((resolve, rejected)=>{
    setTimeout((func)=>{
        let Promise = true
        if(Promise==true)
        resolve("success")
        else{
            rejected("some thing went wrong!")
        }
    },3000)
    
}) 

pro.then((res)=>{
    console.log("Then ",res)
})
.catch((res)=>{
    console.log("Catch ",res)
})

//Example 4

let proms = new Promise((resolve, rejected) =>{
    console.log("Fetching data 1 .............")
    setTimeout((func4)=>{
       resolve( console.log("Data 1"))
    },4000)
})

//Example 5



