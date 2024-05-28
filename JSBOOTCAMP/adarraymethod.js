//array map method 
let arr=[34,23,21]
let a=arr.map((value, index , array)=>{
    console.log(value , index, array)
    return value
})
console.log(a)
//array for filter method
let arr1=[34,23,21,0,3,4]
let a1=arr1.filter((value)=>{
    return value<=10
})
console.log(a1)
//array for reduce method
let arr2=[1,2,3,4,7,8,9,1]
let a3=arr2.reduce((v1,v2)=>{
    return v1+v2
})
console.log(a3)
//array foreach method
let arr3=[1]