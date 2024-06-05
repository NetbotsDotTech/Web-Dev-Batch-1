let num=[1,2,3,23]
for(let i=0;i<num.length;i++){
    console.log(num)
}
// for each loop methed in array
num.forEach((element)=>{
    console.log(element*element)
})
//array.from loop method in array
let Name="nadeem";
let arr=Array.from(Name)
console.log(arr)
// for....of loop in array
for(let item of Name){
    console.log(item)
}
// for..in loop in array
for(let i in Name){
    console.log(i)
}