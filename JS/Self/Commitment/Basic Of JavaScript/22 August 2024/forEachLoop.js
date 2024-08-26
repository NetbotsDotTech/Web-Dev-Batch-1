//ForEach
/*
For Each return 3 thing 
first is : value (what ever in an array or all element array contain)
second is: index of all element from 0 to end 
third is: the same array as it is what i define it
Note:
 the limitation of forEach loop is that it does return any value there we move these loops like map,filter and reduce 


*/
// const arr1=["Ali","Safia",
//     {
//         son:"Basit",
//         daughter:"Sakina"
//     },
//     {
//         son:'Muhammad',
//         daughter:"Kubra"
//     },
//     "Khadija..."

 
// ]
// arr1.forEach((key,index)=>{
//     // console.log(index)
  
// })
// arr1.forEach((key,index)=>{

//     // console.log(index,key )
  
// })
// arr1.forEach((key,index,arr)=>{
//     // console.log(arr )
  
// })
// arr1.forEach((key,index,arr)=>{
//     // console.log(arr[4].toLowerCase() )
// })
// //To acces object from an array
// arr1.forEach((key,index,arr)=>{
//     // console.log(arr[2] ) // i want to value but it give as it is an object
// })
// // to access object value form an array
// arr1.forEach((key,index,arr)=>{
//     // console.log(arr[2].son)
// })

// arr1.forEach((key,index,arr)=>{
//     // console.log(arr[2].son.toUpperCase())
// })
// /*

// */

const placeName=["Gound","Kushmarah","Nanayoor","Astana","Newranga","Fapa"]

placeName.forEach((item)=>{
    // console.log(item) // the frist parameter take only value from an array
})




placeName.forEach((item,key)=>{
    // console.log(key) // the second parameter gives the index number of each element
})

// console.log('Print Me')
function printMe(item){
    // console.log(item)
}

placeName.forEach(printMe)



placeName.forEach((item,key,arr)=>{
    // console.log(arr) // it gives us this:
    /*
    [ 'Gound', 'Kushmarah', 'Nanayoor', 'Astana', 'Newranga', 'Fapa' ]
[ 'Gound', 'Kushmarah', 'Nanayoor', 'Astana', 'Newranga', 'Fapa' ]
[ 'Gound', 'Kushmarah', 'Nanayoor', 'Astana', 'Newranga', 'Fapa' ]
[ 'Gound', 'Kushmarah', 'Nanayoor', 'Astana', 'Newranga', 'Fapa' ]
    */
})

// console.log("Index\t\tValue\t\t\tArray")
placeName.forEach((item,key ,arr)=>{
    // console.log(`${key}\t\t${item}\t\t\t${arr}`)
        

})

placeName.forEach((item,key,arr)=>{
    // console.log(arr[2])
})

placeName.forEach((item,key,arr)=>{
    // console.log(arr[key].toUpperCase())
    // console.log(key)
})

const relation=[
    {
        hasband:"Ali",
        wife:"Saifa"
    },
    {
        hasband:"Nabi",
        wife:"Zahida"
    },
    {
        hasband:"Nazir",
        wife:"Marzia"
    },
    {
        hasband:"Basit",
        wife:"Null"
    }
]
relation.forEach((rel)=>{
    // console.log(rel)
    /*
    the above console.log() print this:
{ hasband: 'Ali', wife: 'Saifa' }
{ hasband: 'Nabi', wife: 'Zahida' }
{ hasband: 'Nazir', wife: 'Marzia' }
{ hasband: 'Basit', wife: 'Null' }
    */
    // console.log(`${rel}`)// but it print this
    /*
    [object Object]
[object Object]
[object Object]
[object Object]
to reslove this problem we deal with it dot operator 
    */

console.log(`${rel.hasband} ==>${rel.wife}`)

})





