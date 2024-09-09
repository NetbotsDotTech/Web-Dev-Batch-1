import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, TextField, Grid } from '@mui/material';

const products = [
  { id: 1, name: 'Organic Coffee Beans', image: 'https://media.istockphoto.com/id/1349239413/photo/shot-of-coffee-beans-and-a-cup-of-black-coffee-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=ZFThzn27DAj2KeVlLdt3_E6RJZ2sbw2g4sDyO7mYvqk=', price: '₨3,500', manufacturingDate: '2024-01-01', expirationDate: '2025-01-01', discount: '10%' },
  { id: 2, name: 'Premium Green Tea', image: 'https://images.unsplash.com/photo-1701520839071-55bdfe64c5ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8fDA%3D', price: '₨2,200', manufacturingDate: '2023-06-01', expirationDate: '2024-06-01', discount: '15%' },
  // ... other products
];

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search Products"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Manufacturing Date: {product.manufacturingDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Expiration Date: {product.expirationDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Discount: {product.discount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductSearch;
