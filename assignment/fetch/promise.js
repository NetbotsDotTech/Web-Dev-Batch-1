const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
const apiUrl2='https://dummyjson.com/products/1';

const promise1 = new Promise((resolve, reject) => {
    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json(); 
            } else {
                throw new Error('Network response was not ok'); 
            }
        })
        .then(data => {
            resolve(data); 
        })
        .catch(error => {
            reject('Failed to fetch data: ' + error.message); 
        });
});

const promise2 = new Promise((resolve, reject) => {
    fetch(apiUrl2)
        .then(response => {
            if (response.ok) {
                return response.json(); 
            } else {
                throw new Error('Network response was not ok'); 
            }
        })
        .then(data => {
            resolve(data); 
        })
        .catch(error => {
            reject('Failed to fetch data: ' + error.message); 
        });
});

promise1
    .then(data => {
        console.log('Data fetched successfully:', data); 
        return promise2;
    })
    .then(data => {
        console.log('Promise2 Data fetched successfully:', data); 
    })
    .catch(error => {
        console.error('Error:', error);
        return promise2;
    })
    .then(data => {
        console.log('Promise2 Data fetched successfully:', data); 
    })
    .catch(error => {
        console.error('Error:', error);
    });
