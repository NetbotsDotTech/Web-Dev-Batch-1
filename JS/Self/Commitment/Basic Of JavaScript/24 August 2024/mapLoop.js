const myNum=[1,2,3,4,5,6,7,8,9,10]
// console.log(myNum.map(val=>val+10))
let newNum=myNum.map(val=>val*10)
// console.log(newNum)
//Chaning 
newNum=myNum.map(val=>val**2)
            .map(val=>val/2)
            .filter(ele=>ele>=30)
// console.log(`${newNum}`)



const Name=["basit","Muhammad","Sakina","Khadija","Kubra"]
// console.log(Name.map(str=>str.concat(" Ali")))
console.log(Name.map(str=>{
   return str+"King"
}).filter(ele=>ele.length>=10))
