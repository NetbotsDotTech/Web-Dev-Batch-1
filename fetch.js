



async function fetchData() {
  try {
    const response = await fetch(('https://fakestoreapi.com/products?limit=5'));
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

