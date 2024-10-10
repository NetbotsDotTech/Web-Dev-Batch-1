import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Divider,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { useLocation } from 'react-router-dom';

const steps = ['Shipping Information', 'Payment Information', 'Review Order', 'Confirmation'];

const Checkout = ({ cartItems = [] }) => { // Set default value for cartItems
    const location =useLocation()
    const datafrom=location.state
  const initialShippingDetails = {
    name: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
    email: '',
    shippingMethod: 'standard',
  };

  const initialPaymentDetails = {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
    billingAddressSame: true,
  };

  const [activeStep, setActiveStep] = useState(0);
  const [shippingDetails, setShippingDetails] = useState(initialShippingDetails);
  const [paymentDetails, setPaymentDetails] = useState(initialPaymentDetails);
  const [promoCode, setPromoCode] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const details = activeStep === 0 ? shippingDetails : paymentDetails;

    if (activeStep === 0) {
      setShippingDetails({ ...details, [name]: value });
    } else {
      setPaymentDetails({ ...details, [name]: value });
    }
  };

  const handleShippingMethodChange = (e) => {
    setShippingDetails({ ...shippingDetails, shippingMethod: e.target.value });
  };

  const handleTermsChange = (e) => {
    setTermsAgreed(e.target.checked);
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleNext = () => {
    if (activeStep === 0 && isShippingDetailsValid()) {
      setActiveStep((prevStep) => prevStep + 1);
    } else if (activeStep === 1 && isPaymentDetailsValid()) {
      setActiveStep((prevStep) => prevStep + 1);
    } else if (activeStep === steps.length - 1) {
      console.log('Order submitted:', { shippingDetails, paymentDetails });
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingCost = shippingDetails.shippingMethod === 'express' ? 10 : 5;
    return subtotal + shippingCost;
  };

  const isShippingDetailsValid = () => {
    return Object.values(shippingDetails).every((field) => field);
  };

  const isPaymentDetailsValid = () => {
    return Object.values(paymentDetails).every((field) => field);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ marginTop: 2 }}>
        {activeStep === 0 && (
          <ShippingInformation
            shippingDetails={shippingDetails}
            handleInputChange={handleInputChange}
            handleShippingMethodChange={handleShippingMethodChange}
          />
        )}

        {activeStep === 1 && (
          <PaymentInformation
            paymentDetails={paymentDetails}
            handleInputChange={handleInputChange}
          />
        )}

        {activeStep === 2 && (
          <ReviewOrder cartItems={cartItems} shippingDetails={shippingDetails} calculateTotal={calculateTotal} />
        )}

        {activeStep === 3 && <Typography variant="h6">Thank you for your order!</Typography>}

        <Box sx={{ marginTop: 3 }}>
          <Button variant="contained" onClick={handleBack} disabled={activeStep === 0} sx={{ marginRight: 2 }}>
            Back to Cart
          </Button>
          {activeStep < steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleNext}
            >
              Continue to Payment
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={!termsAgreed || !isPaymentDetailsValid()}
            >
              Place Order
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

// Shipping Information Component
const ShippingInformation = ({ shippingDetails, handleInputChange, handleShippingMethodChange }) => (
  <Box component="form">
    <Typography variant="h6">Shipping Information</Typography>
    {Object.keys(shippingDetails).map((key) => (
      key !== 'shippingMethod' ? (
        <TextField
          key={key}
          label={key.charAt(0).toUpperCase() + key.slice(1)}
          name={key}
          value={shippingDetails[key]}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
      ) : null
    ))}
    <FormControl component="fieldset">
      <RadioGroup row name="shippingMethod" value={shippingDetails.shippingMethod} onChange={handleShippingMethodChange}>
        <FormControlLabel value="standard" control={<Radio />} label="Standard Shipping" />
        <FormControlLabel value="express" control={<Radio />} label="Express Shipping" />
      </RadioGroup>
    </FormControl>
  </Box>
);

// Payment Information Component
const PaymentInformation = ({ paymentDetails, handleInputChange }) => (
  <Box component="form">
    <Typography variant="h6">Payment Information</Typography>
    {Object.keys(paymentDetails).map((key) => (
      <TextField
        key={key}
        label={key.charAt(0).toUpperCase() + key.slice(1)}
        name={key}
        value={paymentDetails[key]}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
    ))}
    <FormControlLabel
      control={<Checkbox checked={paymentDetails.billingAddressSame} onChange={() => handleInputChange({ target: { name: 'billingAddressSame', value: !paymentDetails.billingAddressSame } })} />}
      label="Billing address is the same as shipping"
    />
  </Box>
);

// Review Order Component
const ReviewOrder = ({ datafrom, shippingDetails, calculateTotal }) => {
  if (!Array.isArray(datafrom) || datafrom.length === 0) {
    console.log('datafrom',datafrom)
    return <Typography variant="h6">No items in the cart.</Typography>;
  }

  return (
    <Box>
      <Typography variant="h6">Review Order</Typography>
      {cartItems.map((item, index) => (
        <Card key={index} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="body1">{item.name}</Typography>
            <Typography variant="body2">Quantity: {item.quantity}</Typography>
            <Typography variant="body2">Price: {item.price.toFixed(2)} PKR</Typography>
            <Typography variant="body2">Total: {(item.price * item.quantity).toFixed(2)} PKR</Typography>
          </CardContent>
        </Card>
      ))}
      <Divider />
      <Typography variant="h6">Subtotal: {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)} PKR</Typography>
      <Typography variant="h6">Shipping: {shippingDetails.shippingMethod === 'express' ? '10.00' : '5.00'} PKR</Typography>
      <Typography variant="h5">Total: {calculateTotal().toFixed(2)} PKR</Typography>
    </Box>
  );
};

export default Checkout;
