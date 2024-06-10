function saif(calback){
    setTimeout(() => {
        calback()
        console.log(calback)
    },4000);
}
function sai(callback){
    setTimeout(()=>{
        callback()
        console.log(callback)
    },3000)
}
saif(4)