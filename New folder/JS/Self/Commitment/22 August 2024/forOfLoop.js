// For of Loop(it is used with array not object)
const arr= [1,2,3,4,5,6]
for (const i of arr) {
    // console.log(i)    
}
const myname="Basit Ali"
for (const name of myname) {
    // console.log(name)
    
}
for (const name of myname) {
    if(name!==" "){
        // console.log(name)
    }else{
        break
    }
    
}

for (const name of myname) {
    if(name!==" "){
        // console.log(name)
    }else{
       continue
    }
    
}

for (const name of myname) {
    console.log(name.toLocaleUpperCase())
    
}

