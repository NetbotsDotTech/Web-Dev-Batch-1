// let marks=[50,60,70,80,90]
// console.log("the lenght of this array is",marks.length)
// for(let i=0;i<marks.length;i++){
//     //  sum=0
//     sum=sum+marks[i]
// }
// let avg=sum/5
// console.log(`the average marks of the student is ${avg}`)
// let item=[100,150,160]
// for(let i=0;i<item.length;i++)
//     {
//         off=item[i]/10
//         item[i]=item[i]-off
//         console.log(item[i])
//     }
//     console.log(item)
let compnies=["google","emazoon","ibm","itel"]

let add1=compnies.push("netboot")
console.log(add1)
//add one more element in array at the end
console.log(  `name ${compnies}`)
//add one more array at starting idx
let add=compnies.unshift("renor")
console.log(compnies)
console.log(add)
compnies.shift()
console.log(compnies)
compnies.pop(4)
console.log(compnies)
let add3=compnies.slice()
console.log(add3)
compnies.splice(1,2,"iqbal")
console.log(compnies)


