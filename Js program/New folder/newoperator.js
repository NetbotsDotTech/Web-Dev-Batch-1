// Rest ,Spread and de-structuring 
let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,0]
let combine12=[...arr1,...arr2]
console.log(combine12)

const arr3=[10,20,30,40,50,60]
let [one,two,five,...arr4]=arr3 // this concept is de-structuring
console.log("Values in variable one",one)
console.log("Value in Variable in two",two)
console.log("Value in Variable three",five)
console.log("Value in array is:",...arr4)// it print  in the form of individual values
console.log("Value in array is:",arr4)// it print in the form of array
arr5=[one,two,five,...arr4] // it co
console.log(arr5)

const object={
    age:12,
    add:"Kushmarah",
    
}
const obj={
    names:"Basit"
}

const newobj={...object,...obj}
console.log(newobj)

