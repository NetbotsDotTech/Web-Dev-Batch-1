const arr1=[1,2,3,4,5,6,7,8]
const arr2=['basit','ali','muhammad']
// console.log(arr1)
// console.log(typeof arr1)// typeof array is also an object
const arrmethod=arr1.map((value)=>value*2)
// console.log(arrmethod)

arr1.forEach((val)=>{
    // console.log(val.valueOf())
})
const filter=arr1.filter((ele)=>{
    return ele>2
})
// console.log(filter)
const reduce=arr1.reduce((acc,curr)=>{
    return acc+curr
},0)
// console.log(reduce)
// console.log(arr1.concat(5))
// console.log(arr1.includes(4)) return true or false
// console.log(arr1.pop())
// console.log(arr1.shift())
// console.log(arr1)
// console.log(arr1.push(90))
// console.log(arr1.unshift(34))
// console.log(arr1)
// console.log(arr1.length)
// console.log(arr1.reverse())
// console.log(arr1.slice(2,4))
// console.log(arr1.toString())
// console.log(arr1.join(arr2))
// console.log(arr2.lastIndexOf())

// Object

const StudentInfo={
    firstName:"Baist",
    lastName:"Ali",
    course:[
        "DAA",
        "DataBase",
        "DE"
    ]
}
// console.log(StudentInfo)
// console.log(typeof StudentInfo)
// console.log(StudentInfo.firstName)
// console.log(StudentInfo.course)
// console.log(StudentInfo.course[1])

// spread operator
const arr3=[1,2,3,4,5,6,7,8,9]
const arr4=["basit","kaleem","neseem"]
const arr5=[...arr1,...arr2,...arr3]
console.log(arr5)
//Destructuring
const[a,b,c,...d]=arr3
console.log(d)
const[,,,f]=arr1
console.log(f)

const {firstName,...other}=StudentInfo
console.log(firstName)
console.log(other)




