function fetchapi1(Inner){
console.log("Fetching data 1.")
fetch('https://dummyjson.com/test')
.then(response=>response.json())
.then(data=>{
 setTimeout(() => {
    console.log(data)
 Inner();}, 3000);
})
}
function fetchapi2(Inner){
    console.log("Fetching data 2..")
    fetch('https://dummyjson.com/test')
    .then(response=>response.json())
    .then(data=>{
     setTimeout(() => {
        console.log(data)
     Inner();}, 3000);
    })
    }
    function fetchapi3(Inner){
        console.log("Fetching data 3...")
        fetch('https://dummyjson.com/test')
        .then(response=>response.json())
        .then(data=>{
         setTimeout(() => {
            console.log(data)
         Inner();}, 3000);
        })
        }
        try {
            fetchapi1(()=>{
                fetchapi2(()=>{
                    fetchapi3(()=>{
                        console.log("All is done")
                    })
                })
            })  
        } catch (error) {
            console.log("Something Wrong please Try again")
        }
       