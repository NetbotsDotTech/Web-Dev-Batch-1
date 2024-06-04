const url = "www.rinor.pk/videostreaming"

fetch(url, {
  method: "POST",
  headers: {
    "Content-type": "application/json",
    apikey: apiKey,
  },
  body: data,
  
}).then(
  (response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Request failed!");
  },
  (networkError) => {
    console.log(networkError.message);
  }
);

fetch()
