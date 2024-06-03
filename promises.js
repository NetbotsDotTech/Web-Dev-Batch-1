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

function getData(DataID,NextData){
    setTimeout(()=>{
        console.log("Data ",DataID)
        if(NextData){
            NextData();
        }
    },3000)
}
getData(1,()=>{
    console.log("getting data 2........");
    getData(2,()=>{
        console.log("getting data 3........");
        getData(3)
    })
})

// Example 6 

function asyncFun1(){
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            console.log("Data 1 ")
            resolve("success")
        },5000)
    })
}

function asyncFun2(){
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            console.log("Data 2 ")
            resolve("success")
        },5000)
    })
}

console.log("Fetching data 1...........");
let p1 = asyncFun1();
p1.then((res)=>{
    console.log("Fetching data 2.........");
    let p2 = asyncFun2();
    p2.then((res)=>{
        console.log(res);
    })
})

//Example 7

function GetData(data){
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            console.log("Data ",data);
            resolve("Success");
        },3000)
    })
}
console.log("Geting data 1......")
GetData(5).then((res)=>{
    console.log(res);
    console.log("Geting data 2......")
    GetData(6).then((res)=>{
        console.log(res);
        console.log("Geting data 3......")
        GetData(7).then((res)=>{
            console.log(res);
        })
    })
})

//Example 8 async await

function Dataget(dataA){
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            console.log("Data : ",dataA);
            resolve("Success");
        },3000)
    });
}

async function getAllData() {
        console.log("Fetching data 1........");
        Dataget(1);
       console.log("Fetching data 2........");
        Dataget(2);
       console.log("Fetching data 3........");
        Dataget(3);  
    }
    getAllData();



