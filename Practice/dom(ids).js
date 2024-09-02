
let boxes=document.getElementsByClassName("box")
console.log(boxes)

// boxes[2].style.backgroundColor="red"
document.getElementById("box-3").style.backgroundColor="red"

//QUERY SELECTOR
document.querySelector(".box") //Select only the 1st box which class is "box"
document.querySelector(".box").style.backgroundColor="green"

/* document.querySelectorAll(".box").forEach(e=>{e.style.backgroundColor="blue"}) //Select all boxes which class is "box" but returns html collection, we need to specify to apply changes so we use for loop*/

//BY TAG NAME:
document.getElementsByTagName("div") //returns all div as HTML collection
//

