let lists=document.getElementsByClassName('list')
let rightBox=document.getElementsByClassName("right")
let leftBox=document.getElementsByClassName("left")

for(list in lists){
    list.addEventListener("dragstart",(e)=>{
        let selected=e.target;
        leftBox.addEventListener("dragover",(e)=>{
            e.preventDefault();

        })

        leftBox.addEventListener("drop",(e)=>{
            leftBox.appendChild(selected)
            selected=null
        })
    })
}