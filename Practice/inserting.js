document.querySelector(".box")
document.querySelector(".box").innerHTML
document.querySelector(".box").innerText
document.querySelector(".contianer").innerText //only inner contains wills show

document.querySelector(".container").outerHTML
//OUTPUT: '<div class="container">\n        <div class="box">I am a Box.</div>\n\n    </div>' 
document.querySelector(".container").tagName//only for elements
document.querySelector(".container").nodeName //for all nodes
document.querySelector(".container").textContent

document.querySelector(".container").hidden=true //to hide the box
document.querySelector(".box").innerHTML="can modify the text content"

/*
.hasAttribute("style")
.setAttribute("style","display: inline") //changes in style
document.querySelector(".box").attributes
document.querySelector(".box").removeAttribute("style")
*/

//INSERTION
 let div=document.createElement("div");
 div.innerHTML="I have been created by <b>JS</b>";
 div.setAttribute("class","created");
 document.querySelector(".container").append(div) //insert on last their are so many other options

 let cont=document.querySelector(".container")
 cont.insertAdjacentHTML("afterend","<b>I am the html written by JS</b>") //many options
 
document.querySelector(".container").classList/className //to get all class name of "container"
document.querySelector(".container").classList.add("1st container")
document.querySelector(".container").classList.remove("1st container")
document.querySelector(".container").classList.toggle("noori") //if contains then remove and vice versa


