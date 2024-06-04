let func1=function (callback) {
  setTimeout(() => {
    console.log("First function .......1")
    callback()
    
  }, 1000);
  
}
let func2=function (callback) {
setTimeout(() => {
  console.log("Second function......2") 
  callback()
}, 2000); 
}
function func3(callback) {
  setTimeout(() => {
    console.log("Third function.....3")
    callback()
    
  },3000);
  
}
func3(()=>{
  func2(()=>{
    func1(()=>{
      console.log("Done.............")
    })
  })
})