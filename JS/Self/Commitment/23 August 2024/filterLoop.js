/*
Filter:
    it is also a loop for an array ,it is same with the forEach Loop but it return anything 
    note:
        it works on the true or false base means if the condition is true the it execute otherwise not
*/
const myarr=[1,2,3,4,5,6,7,,8,9,10]
myarr.filter((val)=>{
// console.log(val)
// console.log(`${val}`)

})


myarr.filter((val)=>val>=4)// it return value don't visible because we does not store in any vairable or does not consle

const mynewarr=myarr.filter((val)=>val>=4)
// console.log(mynewarr)
// console.log(`${mynewarr}`)

const mynew=myarr.filter((val)=>{
    return val<5
})
// console.log(mynew)
// console.log(`${mynew}`)
//Simple project-1 to understand the filter
const bookInfo=[
{title:"Book One",genre:"History",publish:"1950",edition:"5th"},
{title:"Book_Two",genre:"Math",publish:"1970",edition:"10th"},
{title:"Book_Three",genre:"Science",publish:"1980",edition:"6th"},
{title:"Book_Four",genre:"History",publish:"2000",edition:"8th"},
{title:"Book_Five",genre:"Math",publish:"2022",edition:"5th"},
{title:"Book_Six",genre:"Fiction",publish:"2010",edition:"7th"},
{title:"Book_Seven",genre:"Non-Fiction",publish:"2020",edition:"10th"},
{title:"Book_Eight",genre:"Computer Science",publish:"1995",edition:"5th"},
{title:"Book_Nine",genre:"History",publish:"2005",edition:"1th"},
{title:"Book_Ten",genre:"Marsia",publish:"1985",edition:"12th"}

]
// console.log(bookInfo)
// console.log(`${bookInfo[2].genre}`)



// const filter=bookInfo.filter((bk)=>bk.genre==="History")// one line statement.
// console.log(filter)



// const filter=bookInfo.filter((bk)=>(bk.title==="Book One"))// it also for one line statement
// console.log(filter)


// const filter=bookInfo.filter((bk)=>{bk.title==="Book One"})
// console.log(filter)// this print this [] because we does not return anything to filter when we open the scope means {}


// const filter=bookInfo.filter((bk)=>{
//     return bk.title==="Book One"
// })
// console.log(filter)



// for multiple condition
const filter=bookInfo.filter((bk)=>{
    return  bk.publish>=1990 && bk.genre==="History"
})
// console.log(filter)








// const filter=bookInfo.filter((bk)=>{
//     if(bk.edition==="12th"){

//         return bk.edition

//     }else{
//     console.log("Not Found")
//     }
// })
// console.log(filter)




