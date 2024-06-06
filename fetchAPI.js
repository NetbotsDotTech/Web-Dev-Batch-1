// let data=
//     {
//         "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. ",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "rating": {
//           "rate": 3.9,
//           "count": 120
//         }
      
//     }
// fetch('https://fakestoreapi.com/products/1')
//             // .then(res=>res.json())
//             .then(json=>console.log(data))

    
// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//            .then(json=>console.log(json))



async function fetchData() {
  try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error('Error fetching data:', error.message);
  }
}

// Call the function
fetchData();