let date=document.getElementById("date")
let day=document.getElementById("day")
let month=document.getElementById("month")
let year=document.getElementById("year")

let curretDate=new Date()
// console.log(curretDate)
const weekDays=["Sunday","Monday","TuesDay","Wednesday","Thursday","Friday","Saturday"]
const monthName=["Junuary","February","March","Apirl","May","June","July","August","September","October","November","December"]
date.innerHTML=(curretDate<0?"0":"")+curretDate.getDate()
day.innerHTML=weekDays[curretDate.getDay()]
month.innerHTML=monthName[curretDate.getMonth()];
year.innerHTML=curretDate.getFullYear();