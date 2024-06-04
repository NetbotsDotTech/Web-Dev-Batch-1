//  setTimeout(()=>{
//     console.log("hellow")
// },400)
// function sum(a,b){
//     console.log(a+b)
//     console.log("sum functin is exicuted")
// }
// function calc(c,d,sumcallback){
//     console.log("calc is axicuted=",c+d)
//     sumcallback(3,4)
   
// }
// calc(1,2,sum)
// let myfun=()=>{
//     console.log("hellow world")
// }
// setTimeout(myfun,4000);
function saif(dataid,data2){
   setTimeout(() => {
    console.log("data=",dataid)
    // if(data2){
    //     console.log("if statment")
 data2();
     
   }, 2000)
}
// saif(4,()=>{
//     saif(5,()=>{
//         saif(6)
//     })
// })
saif(1,()=>{
    
})
saif(2,()=>{})
// function saif(id){
//     setTimeout(() => {
//         console.log(id)   
//     }, 2000);

// }
// saif(4,saif(3,saif(5)))

