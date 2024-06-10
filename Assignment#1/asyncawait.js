// Async/Await
async function fetchDataAsyncAwait() {
    try {
      const response1 = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const userData = await response1.json();
      console.log('User Data (Async/Await):', userData);
  
      const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const postData = await response2.json();
      console.log('Post Data (Async/Await):', postData);
  
      const response3 = await fetch('https://jsonplaceholder.typicode.com/comments/1');
      const commentsData = await response3.json();
      console.log('Comments Data (Async/Await):', commentsData);
    } catch (error) {
      console.error('Error (Async/Await):', error);
    }
  }
  
  fetchDataAsyncAwait();
  
  // Promises
  function fetchDataPromises() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(userData => {
        console.log('User Data (Promises):', userData);
        return fetch('https://jsonplaceholder.typicode.com/posts/1');
      })
      .then(response => response.json())
      .then(postData => {
        console.log('Post Data (Promises):', postData);
        return fetch('https://jsonplaceholder.typicode.com/comments/1');
      })
      .then(response => response.json())
      .then(commentsData => {
        console.log('Comments Data (Promises):', commentsData);
      })
      .catch(error => {
        console.error('Error (Promises):', error);
      });
  }
  
  fetchDataPromises();
  
  // Callbacks
  function fetchDataCallback(callback) {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(userData => {
        console.log('User Data (Callback):', userData);
        fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then(response => response.json())
          .then(postData => {
            console.log('Post Data (Callback):', postData);
            fetch('https://jsonplaceholder.typicode.com/comments/1')
              .then(response => response.json())
              .then(commentsData => {
                console.log('Comments Data (Callback):', commentsData);
                callback(null, userData, postData, commentsData);
              })
              .catch(error => {
                console.error('Error (Callback):', error);
                callback(error);
              });
          })
          .catch(error => {
            console.error('Error (Callback):', error);
            callback(error);
          });
      })
      .catch(error => {
        console.error('Error (Callback):', error);
        callback(error);
      });
  }
  
  fetchDataCallback((error, userData, postData, commentsData) => {
    if (error) {
      console.error('Error occurred:', error);
    } else {
      console.log('User Data (Callback):', userData);
      console.log('Post Data (Callback):', postData);
      console.log('Comments Data (Callback):', commentsData);
    }
  });
  