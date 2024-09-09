import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products); // Assuming the response has a 'products' array
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setLoading(false);
      });
  }, []);

  // Define columns for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'description', headerName: 'Description', width: 100 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'price', headerName: 'Price ($)', width: 100 },
    { field: 'rating', headerName: 'Rating', width: 100 },
    { field: 'stock', headerName: 'Stock', width: 100 },
    { field: 'brand', headerName: 'Brand', width: 150 },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <h1>Products List</h1>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={10}
        loading={loading}
        checkboxSelection
      />
    </div>
  );
};

export default ProductsTable;
