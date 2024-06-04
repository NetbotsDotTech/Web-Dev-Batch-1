async function awit(){

    let mypro = new Promise((resolve,reject)=>{

setTimeout(()=>{
    resolve(["Zeeshan"])
},5000)




})

    let mypros = new Promise((resolve,reject)=>{

setTimeout(()=>{
    resolve(["BSCS"])
},3000)




})

    let myprop = new Promise((resolve,reject)=>{

setTimeout(()=>{
    resolve(["S23BSCS036"])
},1000)




})


let a = await mypro
console.log(a)

let b = await mypros
console.log(b)

let pr = await myprop
console.log(pr)

}


awit()