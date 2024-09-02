console.log("Hello World")
/*
document.body 
document.body.childNodes
document.body.childNodes[0]//first space between <body> and first div will select(TEXT)
ocument.body.childNodes[1].childNodes// (Text,Div) because of space in div
let cont=document.body.childNodes[1]
 cont.firstchild //Gves 1sr node and also access lastchild

 //To eleminate the text and want to select the first div 
 cont.firstelementchild 
 cont.lastelementchild.style.backgroundcolor="red"
 cont.lastelementchild.parenelement //back to refer parent
 
 //Previoud Element Sibling
 document.body.firselementchild //div.container
  document.body.firselementchild.childnode //(text,comment,textnode)
  document.body.firstElementChild.children//All element nodes
  document.body.firstElementChild.children[0]
  document.body.firstElementChild.children[1].nextElementSibling
  document.body.firstElementChild.children[2].previousElementSibling

 */

//Lecture: 68 IDS etc
let boxes=document.getElementsByClassName("box")
console.log(boxes)
boxes[1].style.backgroundColor="red" //which change the index
document.getElementById("newbox").style.backgroundColor="green" //Now only target specfic id

//Query Selector
document.querySelector(".box").style.backgroundColor="black"; //only change first match

// document.querySelectorAll(".box").forEach(e=>
// {
//     e.style.backgroundColor="blue"
// }
// )

document.getElementsByName("div") //returns all div (returns html collection)



