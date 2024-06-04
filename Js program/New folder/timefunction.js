function fun(){
    setTimeout(() => {
        console.log("Enter fun......")
        
    },5000);
}

let time=function(){
    console.log("King is the king ")
}
setTimeout(time,1000) // here we used the reference of above function 
fun()
