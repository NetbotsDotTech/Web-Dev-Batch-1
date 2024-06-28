//          <=====Using AsyncAwait=====>
let data=
    // {
    //     "id": 1,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 109.95,
    //     "description": "Your perfect pack for everyday use and walks in the forest. ",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     "rating": {
    //       "rate": 3.9,
    //       "count": 120
    //     }
      
    // }

async function fetchdataasyncawait(){
    try{
    const response1=await fetch('http://api.endpoint1.com');
    const data1=await response1.json();
    console.log(data1);

    const response2=await fetch('http://api.endpoint2.com');
    const data2=await response2.json();
    console.log(data2);

    const response3=await fetch('http://api.endpoint3.com');
    const data3=await response3.json();
    console.log(data3);
}catch(error){
    console.error(error);
}
}
//          <=====Using Promises=====>

function fetchdatapromise(){
    fetch('http://api.endpoint1.com')
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error));

    fetch('http://api.endpoint2.com')
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error));

    fetch('http://api.endpoint3.com').
    then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error));
}
//          <=====Using Callback=====>

function fetchdatacallback(callback){
    fetch('http://api.endpoint1.com')
    .then(response=>response.json())
    .then(data=>console.callback(data))
    .catch(error=>console.log(error));

    fetch('http://api.endpoint2.com')
    .then(response=>response.json())
    .then(data=>console.callback(data))
    .catch(error=>console.log(error));

    fetch('http://api.endpoint2.com')
    .then(response=>response.json())
    .then(data=>console.callback(data))
    .catch(error=>console.log(error));
}
//          <=====Calling the functions to fetchdata=====>

fetchdataasyncawait();
fetchdatapromise();
fetchdatacallback(data=>{
    console.log(data);
})