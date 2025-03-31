function sum(a,b){
    let result=a+b
    return result
}
add=sum(3,4)
console.log("Addition of tow number is:",add)

let Subtraction=function(a,b){
    if(a>b)
        {
            let result=a-b
            return result
        }
        else
        {
            let result=b-a
            return result
        }
}

let sub=Subtraction(4,6)
console.log("Subtraction of two number is:",sub)

let Multiplication=(a,b)=>{
    const result=a*b
    return result

}
 mult=Multiplication(3,5)
 console.log(mult)
