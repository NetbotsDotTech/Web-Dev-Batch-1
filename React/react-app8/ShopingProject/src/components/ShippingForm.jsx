// src/components/ShippingForm.js
import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';

const ShippingForm = () => {
  const location = useLocation();
  const { title, price } = location.state;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Shipping details submitted');
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4, p: 3, border: '1px solid #ccc', borderRadius: '8px' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Shipping Details
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        Product: {title}
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        Price: PKR {price}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="City"
              name="city"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Postal Code"
              name="postalCode"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Proceed to Payment
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ShippingForm;
