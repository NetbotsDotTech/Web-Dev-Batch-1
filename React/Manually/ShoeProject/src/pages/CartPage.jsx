import React from 'react';
import { Box, Typography, Grid, Button, Container, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, removeFromCart, totalPrice }) => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Box display="flex" alignItems="center">
                <img src={item.img} alt={item.name} style={{ width: '100px', marginRight: '16px' }} />
                <Box flexGrow={1}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2">{item.price}</Typography>
                </Box>
                <Button variant="outlined" color="secondary" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </Box>
              <Divider sx={{ marginY: 2 }} />
            </Grid>
          ))}
        </Grid>
      )}

      {cartItems.length > 0 && (
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5">Total: {totalPrice} PKR</Typography>
          <Button variant="contained" color="primary" component={Link} to="/checkout">
            Proceed to Checkout
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default CartPage;
