
import React from 'react';
import { Container, Grid, Paper, Typography, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const cartItems = [
  { id: 1, name: 'Product 1', price: '$10', quantity: 1 },
  // Add more cart items
];

const Cart = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Paper>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h6">{item.name}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="h6">{item.price}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="h6">{item.quantity}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <IconButton color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary">
        Checkout
      </Button>
    </Container>
  );
};

export default Cart;
