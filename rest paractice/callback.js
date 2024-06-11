// function mainfunction(callback){
//     console.log("exicution operation")
//     setTimeout(()=>{
//         callback("succes")
//     },2000)
// }
// function callbackfunction(result){
//     console.log("result"+result)
// }
// mainfunction(callbackfunction)
// function f1(dataid){
//    setTimeout(()=>{
//     console.log("dataid",dataid)
//     dataid("start second")
//    },2000)
// }
// function f2(dataid){
//     console.log("dataid="+dataid)
// }
// f1(1,f2(2))
// let number=[3,4,5,6]
// function mainfunction(callback){
// console.log("performing opretion")
// number.forEach(callback);
// }
// function callbackfunction(result){
//     console.log("result=",result)
// }
// mainfunction(callbackfunction)
// let arr=[1,2,3,4]
// //let n;
// arr.forEach()
// //console.log(n)
let promise=new Promise(function (resolve,reject){
    x="geek for geeks"
    y="geeks for geeks"
    if(x===y){
        resolve();
    }
    else{
        reject();
    }
})
promise.then(function(){
    console.log("success")
})
.catch(function(){
    console.log("some thine went wrong")
})


