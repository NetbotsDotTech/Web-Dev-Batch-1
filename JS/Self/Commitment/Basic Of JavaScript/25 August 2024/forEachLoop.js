//ForEach
/*
For Each return 3 thing 
first is : value (what ever in an array or all element array contain)
second is: index of all element from 0 to end 
third is: the same array as it is what i define it


*/
const arr1=["Ali","Safia",
    {
        son:"Basit",
        daughter:"Sakina"
    },
    {
        son:'Muhammad',
        daughter:"Kubra"
    },
    "Khadija..."

 
]
arr1.forEach((key,index)=>{
    // console.log(index)
  
})
arr1.forEach((key,index)=>{

    // console.log(index,key )
  
})
arr1.forEach((key,index,arr)=>{
    // console.log(arr )
  
})
arr1.forEach((key,index,arr)=>{
    // console.log(arr[4].toLowerCase() )
})
//To acces object from an array
arr1.forEach((key,index,arr)=>{
    // console.log(arr[2] ) // i want to value but it give as it is an object
})
// to access object value form an array
arr1.forEach((key,index,arr)=>{
    // console.log(arr[2].son)
})

arr1.forEach((key,index,arr)=>{
    // console.log(arr[2].son.toUpperCase())
})
/*
the limitation of forEach loop is that it does return any value there we move these loops like map,filter and reduce but if we want to then we can 
*/