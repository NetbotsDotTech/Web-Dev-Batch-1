function usama(saif){
    console.log("fatching data..")
    setTimeout(() => {
        console.log("data is fatched")
        saif()
    }, 3000);
}
function usama2(saif2){
    console.log("fatching second data..")
setTimeout(() => {
    console.log("data2 is to be fatched..")
    saif2()
}, 2000);
    
}
usama(()=>{
    usama2(()=>{
        console.log("success")
    })
})
