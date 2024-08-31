const inputBox=document.getElementById("inputBox")
const listContainer=document.getElementById("listContainer")
function addTask(){
    if(inputBox.value===""){
        alert("You must write something!")
    }else{
        let li=document.createElement("li")
        li.innerHTML=inputBox.value
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value=""
    saveData()
}

listContainer.addEventListener("click",(e)=>{

    if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})
function saveData(){
    localStorage.getItem("data",listContainer.innerHTML)
}
function showList(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showList()