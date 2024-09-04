import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      
      <Grid container spacing={4}>
        {/* Shipping Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Shipping Information</Typography>
          <TextField fullWidth label="Full Name" margin="normal" />
          <TextField fullWidth label="Address" margin="normal" />
          <TextField fullWidth label="City" margin="normal" />
          <TextField fullWidth label="Postal Code" margin="normal" />
          <TextField fullWidth label="Country" margin="normal" />
        </Grid>

        {/* Payment Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Payment Information</Typography>
          <TextField fullWidth label="Card Number" margin="normal" />
          <TextField fullWidth label="Cardholder Name" margin="normal" />
          <TextField fullWidth label="Expiry Date" margin="normal" />
          <TextField fullWidth label="CVV" margin="normal" />
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12}>
          <Typography variant="h6">Order Summary</Typography>
          {cartItems.map((item) => (
            <Box key={item.id} display="flex" justifyContent="space-between">
              <Typography>{item.name}</Typography>
              <Typography>{item.price}</Typography>
            </Box>
          ))}
          <Box display="flex" justifyContent="space-between" marginTop={2}>
            <Typography variant="h6">Total:</Typography>
            <Typography variant="h6">{totalPrice.toFixed(2)} PKR</Typography>
          </Box>
        </Grid>

        {/* Place Order Button */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Place Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
