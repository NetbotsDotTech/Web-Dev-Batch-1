// function first(){
//     console.log("first function")
// }
// function second(){
//     console.log("second function")
// }
// first()
// second()
// function display (res){
//     console.log("display id call")
//     console.log(res)
// }
// function calc(num1,num2){
//     console.log("calc is call")
//     let sum=num1+num2
//     display(sum)
// }
// calc(3,4)
function display(some){
    console.log(some)
}
function calc(num1,num2,callBack){
let sum=num1+num2
callBack(sum)
}
calc(4,5,display)