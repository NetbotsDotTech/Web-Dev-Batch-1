//CALL BACK

// ASYNCRONOUS OF JS
console.log("I am First line")
console.log("I am Second line")
setTimeout(() => {
    console.log("I am inside Timeout")
    
}, 2000); //this will execute after all others
console.log("The End")
