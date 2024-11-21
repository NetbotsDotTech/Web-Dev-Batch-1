
//callback function

// Define the dummy API endpoint
const apiEndpoint = "https://jsonplaceholder.typicode.com/users";

// Function to make the API call
function fetchData(callback) {
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            // Call the callback function with the data
            callback(null, data);
        })
        .catch(error => {
            // Call the callback function with the error
            callback(error, null);
        });
}

// Define a callback function to handle the response
function handleResponse(error, data) {
    if (error) {
        console.error("Error fetching data:", error);
    } else {
        console.log("Data fetched successfully:", data);
    }
}

// Make the API call with the callback function
fetchData(handleResponse);

//promises
function fetchApi(){
    let url = 'https://jsonplaceholder.typicode.com/todos/1'
    console.log("fetching api 1.....")
    return new Promise((resolve)=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((url)=>url.json())
            .then((url)=>console.log(url.json))
        resolve("resolve successfull...")
        resolve();
        }, 3000);
    })
}

function fetchApi1(){
    let url = 'https://jsonplaceholder.typicode.com/todos/2'
    console.log("fetching api 2.....")
    return new Promise((resolve)=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then((url)=>url.json())
            .then((url)=>console.log(url.json))
        resolve("resolve successfull...")
        resolve();
        }, 3000);
    })
}


