// fetch data with 


function fetchData() {
    return new Promise((resolve, reject) => {
      fetch(('https://fakestoreapi.com/products?limit=5'))
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
  fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  