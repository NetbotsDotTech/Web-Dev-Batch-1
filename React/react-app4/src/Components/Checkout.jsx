import React from 'react';
import { Container, Typography, Grid, TextField, Button, Paper } from '@mui/material';

const Checkout = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Paper style={{ padding: '20px' }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Billing Name" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Billing Address" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Shipping Address" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Payment Method" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Order Summary:</Typography>
              {/* Add order summary details here */}
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Place Order
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Checkout;
