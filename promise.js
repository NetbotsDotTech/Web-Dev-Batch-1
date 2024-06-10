let data =
            {
                "id": 1,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. ",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }

            }
let promise = new Promise
    (
        function (fullfill, rejected) {
            

            let promise = true
            if (promise) {
                console.log("Operation successful!...")
                fullfill(fetch('https://fakestoreapi.com/products')
                    // .then(res=>res.json())
                    .then(json => console.log(data)))
            } else {
                rejected("Somethimg went wrong")
            }
        }
    )
promise
    .then((value) => {
        console.log("Promised resolved " + value);
    })
    .catch((error) => {
        console.log("Promised is rejected " + error)
    });

