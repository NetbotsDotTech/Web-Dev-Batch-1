function func(){
    console.log("hello")
}
let func2 = function (a){
    console.log(a)
}
let func3 = () => {
    console.log("hello")
}
let func4 = a => {
    console.log(a*2/7)
}

func()
func2(2)
func3()
func4(34)