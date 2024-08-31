
// Reduce Loop:

// Basic Syntax:
const array=[1,2,3,4,5]
const initialValue=0
const sumWithInitail=array.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue)
// console.log(sumWithInitail)

// Syntax:2
const arr1=[10,20,30,40,50]
const initialVal=0
const reduceLoop=arr1.reduce((acc,curVal)=>{
    return acc+curVal
},initialVal)
// console.log(reduceLoop)

//Syntax:3
const arr2=[15,30]
const reduceLoop2=arr2.reduce((acc,curval)=>{
    return acc+curval
},100)
// console.log(reduceLoop2)

//simple practice  project
const shoping=[
    {
        itemName:"Egg",
        price:340
    },
    {
        itemName:"Carrot",
        price:70
    },
    {
        itemName:"Oil",
        price:790
    },
    {
        itemName:"Rice",
        price:540
    },
]

const buythings=    shoping.reduce((acc,curVal)=>{
        return acc+curVal.price
    },0)
console.log("Total Bill :-",buythings,"/Rs.")