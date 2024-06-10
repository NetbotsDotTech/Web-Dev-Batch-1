


            function fetchData1(callback) {
                fetch(('https://fakestoreapi.com/products?limit=5'))
                  .then(response => response.json())
                  .then(data => callback(null, data))
                  .catch(error => callback(error));
              }


              
            function fetchData2(callback) {
                fetch(('https://fakestoreapi.com/products?limit=6'))
                  .then(response => response.json())
                  .then(data => callback(null, data))
                  .catch(error => callback(error));
              }


              
            function fetchData3(callback) {
                fetch(('https://fakestoreapi.com/products?limit=7'))
                  .then(response => response.json())
                  .then(data => callback(null, data))
                  .catch(error => callback(error));
              }
              










              fetchData1(() => { 

                fetchData2(()=> {

                  fetchData3( ()=> {

                     console.log("all done")
                  })

                })
             })
              
              





