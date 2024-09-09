//Example of function
function add(a,b){
    return a+b
}
console.log(add(4,5))


function sum(a,...b){
    for (const i of b) {
        console.log(i)
        return b.map((ele)=>ele+a)
    }
}
console.log(sum(34,5,4,2,2))

let func2=function(a,b=90){
    return a+b
}

console.log(func2(45))

let arrow=()=>{
    console.log("I am an arrow function")
}
// console.log(arrow())

(function iffe(){
    console.log("Heey i am iffe funtion........")
})()