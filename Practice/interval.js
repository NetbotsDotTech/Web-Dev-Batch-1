function GetRandomColor(){
    let val1=Math.ceil(0+Math.random()+255);
    let val2=Math.ceil(0+Math.random()+255);
    let val3=Math.ceil(0+Math.random()+255);
    return `rgb(${val1},${val2},${val3})`
}

setInterval(() => {
    document.querySelector(".childcontainer").style.background=GetRandomColor()
}, 1000); //a fucntion while takes fucntion and a time as argument
/*clearInterval(1) //the return number of setinterval
*/
setTimeout(() => {
    document.querySelector(".childcontainer").style.backgroundColor="Red"
}, 3000);
// clearTimeout(1)