// # callback function fatching dummy data 
function Fun1(callback) {
    console.log("Fetching Data 1 ...!");
    
        fetch('https://fakestoreapi.com/products/1')
        .then(response => response.json())
        .then(data => {
            console.log("Data from Add:", data);
            callback();
        })
        .catch(error => console.error("Error fetching data from Add:", error));
}

function Fun2(callback) {
    console.log("Fetching Data 2 ...!");
        fetch('https://dummyjson.com/products/1')
        .then(response => response.json())
        .then(data => {
            console.log("Data from Add:", data);
            callback();
        })
        .catch(error => console.error("Error fetching data from Add:", error));
}


Fun1(() => {
    Fun2(() => {
        console.log("All done!");
    })
})
