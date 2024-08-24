//with async-await
async function fetchDataAsyncAwait(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

(async () => {
    const data = await fetchDataAsyncAwait('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Async/Await:', data);
})();















//with promise
function fetchDataPromise(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

fetchDataPromise('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log('Promise:', data))
    .catch(error => console.error('Error fetching data:', error));




//with callback
    function fetchDataCallback(url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(data => callback(null, data))
            .catch(error => callback(error, null));
    }
    
    fetchDataCallback('https://jsonplaceholder.typicode.com/posts/1', (error, data) => {
        if (error) {
            console.error('Error fetching data:', error);
        } else {
            console.log('Callback:', data);
        }
    });

    





//with fetch
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log('Fetch API:', data))
    .catch(error => console.error('Error fetching data:', error));


