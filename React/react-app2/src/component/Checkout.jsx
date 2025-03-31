import React, { useState, useContext } from 'react';
import { CartContext } from '../App';
import { Stepper, Step, StepLabel, Button, Typography, TextField, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const steps = ['Shipping Address', 'Payment Details', 'Order Summary'];

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  // Handle moving to next step
  const handleNext = () => setActiveStep((prev) => prev + 1);
  
  // Handle going back a step
  const handleBack = () => setActiveStep((prev) => prev - 1);

  // Handle form submission (final step)
  const handlePlaceOrder = () => {
    // Process order (e.g., send data to server)
    alert('Order placed successfully!');
    navigate('/');
  };

  // Step 1: Shipping Address Form
  const ShippingForm = () => (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField 
        label="Full Name" 
        value={shippingData.fullName}
        onChange={(e) => setShippingData({ ...shippingData, fullName: e.target.value })}
        required 
      />
      <TextField 
        label="Address" 
        value={shippingData.address}
        onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
        required 
      />
      <TextField 
        label="City" 
        value={shippingData.city}
        onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
        required 
      />
      <TextField 
        label="Postal Code" 
        value={shippingData.postalCode}
        onChange={(e) => setShippingData({ ...shippingData, postalCode: e.target.value })}
        required 
      />
      <TextField 
        label="Phone Number" 
        value={shippingData.phoneNumber}
        onChange={(e) => setShippingData({ ...shippingData, phoneNumber: e.target.value })}
        required 
      />
    </Box>
  );

  // Step 2: Payment Details Form
  const PaymentForm = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">Choose Payment Method</Typography>
      <Button 
        variant={paymentMethod === 'Credit Card' ? 'contained' : 'outlined'}
        onClick={() => setPaymentMethod('Credit Card')}
      >
        Credit Card
      </Button>
      <Button 
        variant={paymentMethod === 'Cash on Delivery' ? 'contained' : 'outlined'}
        onClick={() => setPaymentMethod('Cash on Delivery')}
      >
        Cash on Delivery
      </Button>
    </Box>
  );

  // Step 3: Order Summary
  const OrderSummary = () => (
    <Box>
      <Typography variant="h6">Order Summary</Typography>
      <Grid container spacing={2}>
        {cart.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Typography>{item.title} - {item.size}</Typography>
            <Typography>Price: {item.price} PKR</Typography>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6">Total: {cart.reduce((acc, item) => acc + item.price, 0)} PKR</Typography>
    </Box>
  );

  return (
    <div>
      <Typography variant="h4" align="center">Checkout</Typography>
      <Stepper activeStep={activeStep} sx={{ margin: '20px 0' }}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <div>
          <Typography variant="h6">Thank you for your order!</Typography>
        </div>
      ) : (
        <>
          {/* Step Content */}
          {activeStep === 0 && <ShippingForm />}
          {activeStep === 1 && <PaymentForm />}
          {activeStep === 2 && <OrderSummary />}
          
          {/* Navigation Buttons */}
          <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'flex-end' }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ marginRight: 1 }}>
                Back
              </Button>
            )}
            {activeStep === steps.length - 1 ? (
              <Button variant="contained" color="primary" onClick={handlePlaceOrder}>
                Place Order
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
            )}
          </Box>
        </>
      )}
    </div>
  );
};

export default Checkout;
