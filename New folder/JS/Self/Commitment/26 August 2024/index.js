// Spread Operator
// With Arrays
const arr1=[1,2,3,4,5,6,7,8]
const arr2=["Basit ","Muhammad"]
// const arrJoined=arr1+arr2
// console.log(arr1)
// console.log(arr2)
// console.log(arrJoined)

let joinedArr=[...arr1,...arr2]
// console.log(joinedArr)
const str='Basit Ali'
joinedArr=[...arr1,...arr2,...str]
// console.log(joinedArr)

//With object
const myInfo={
    son:"basit",
    son2:"muhammad"
}
const girlInfo={
    da1:"Sakina",
    d2:"Kubra",
    d3:"khadija"
}
const joinedObj={...myInfo,...girlInfo}
// console.log(joinedObj)

