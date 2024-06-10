// console.log("hellow world")
let divs=document.querySelectorAll("#box")
// saif.innerText="unique value"
let count=0;
for(div of divs){
    div.innerText=`new unique value ${count}`
    count++;
}
console.log(div.innerText)
// divs[1].innerText="newunique value"



