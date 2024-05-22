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

//Write a function called greet that takes a name parameter and returns a greeting message (e.g., "Hello, [name]!").
function greet(Name) {
    return `Hello, ${Name}!`
}
console.log(greet("Usama"))

// Arrow Function:
// Write an arrow function called cube that takes a number parameter and returns the cube of that number
let cube = (a) => {
    return a*a*a;
}
console.log(cube(3))