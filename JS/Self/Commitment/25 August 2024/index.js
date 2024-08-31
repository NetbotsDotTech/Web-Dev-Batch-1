//for Each method in array
const forEach=["Baist","Muhammad","Sakina",'Hassan',"Ejaz"]
// console.log(forEach)
forEach.forEach((index,key,arr)=>{
    // console.log(index,key,arr)
})

const returnValue=forEach.forEach((index,key,arr)=>{
    // console.log(index,key,arr)
// return index    
})
// console.log(returnValue)// for does not return anything

// map
const arrMap=[1,2,3,4,5]
const mapMethod=arrMap.map((value)=>{
    // return value.toString().concat("Ali").toUpperCase()
    return value+"Basit Ali"
})
// console.log(`${mapMethod}`)

//filter
const filter=[
    {id:1, familyMember:12,familyName:"ABC",monthlyIncome:12330},
    {id:2, familyMember:10,familyName:"ABCDEF",monthlyIncome:23430},
     {id:3, familyMember:3,familyName:"GHIJ",monthlyIncome:78630},

]
// const afterFilter=filter.filter((ele)=>ele.id>1)
// const afterFilter=filter.filter((ele)=>{
//     return ele.familyMember>11
// })
// const afterFilter=filter.filter((ele)=>ele.monthlyIncome<20001)
const afterFilter=filter.filter((ele)=>ele.familyName==="ABCDEF")



// console.log(afterFilter)


//Reduce

const shop=[
    {
        labtop:"hp",
        price:120000
    },
    {
        
        labtop:"lenovo",
        price:99000
    
    },
    {
        
        labtop:"Dell",
        price:69000
    }
]

const sumAmount=shop.reduce((acc,curr)=>{
    total= acc+curr.price
    return total
    
},0)
// console.log('Your Total Bill is:',sumAmount)


// sort
const sort=[1,4,7,4,8,9,0]
// console.log(sort.sort())

console.log(forEach.sort())
// console.log(forEach.sort().reverse())
