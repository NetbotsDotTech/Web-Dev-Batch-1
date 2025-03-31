const form=document.querySelector("form") 
form.addEventListener('submit',(e)=>{
    e.preventDefault()

const height=parseInt(    document.querySelector("#Height").value)
const weight=parseInt(document.querySelector("#Weight").value)
const result=document.querySelector("#result")

if(height===""|| height<0 ||isNaN(height)){
     result.innerHTML=`Please give a valid height ${height}`
}else if(weight===""|| weight<0 ||isNaN(weight)){
    result.innerHTML=`Please give a valid weight ${weight}`
}else{
       const bmi= (weight/((height*height)/10000)).toFixed(2)
       if(bmi<18.9){
        result.innerHTML=`<span>Your Weight is:${bmi} which is under weigt</span>`

       }else if(bmi>18.9 && bmi<=24.9){
        result.innerHTML=`<span>Your Weight is:${bmi} which is Normal weigt</span>`

       }else{
        result.innerHTML=`<span>Your Weight is:${bmi} which is Over weigt</span>`

        
       }
}


   
})
