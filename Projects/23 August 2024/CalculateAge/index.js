let userInput=document.querySelector("#date")
userInput.max=new Date().toISOString().split("T")[0]

let result=document.querySelector("#result")



function calculateAge(){
    let dateOfBirth=new Date(userInput.value)

    let d1=dateOfBirth.getDay()
    let m1=dateOfBirth.getMonth()+1
    let y1=dateOfBirth.getFullYear()

    let today=new Date()

    let d2=today.getDay()
    let m2=today.getMonth()+1
    let y2=today.getFullYear()

    let y3,m3,d3;
    y3=y2-y1

    if(m2>=m1){
        m3=m2-m1
    }else{
        y3--
        m3=12+m2-m1
    }

    if(d2>=d1){
        d3=d2-d1
    }else{
        m3--
        d3=getMonthInDay(y1,m1)+d2-d1
    }
    if(m3<0){
        m3=11
        y3--

    }
    

result.innerHTML=`You are <span>${y3}</span> Year <span>${m3}</span> Month and <span>${d3}</span> Days Old`


}
function getMonthInDay(year,month){
    return new Date(year,month,0).getDate()
}