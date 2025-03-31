// Checkout.js
import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../context/CartContext';

import ShippingInformation from './ShippingInformation';
import PaymentInformation from './PaymentInformation';
import Confirmation from './Confirmation';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1; // Month is 0-indexed

const steps = ['Shipping Information', 'Payment Information', 'Confirmation'];

// Initial form values
const initialValues = {
  shipping: {
    RecipientName: '',
    country: '',
    state: '',
    city: '',
    address: '',
    postalCode: '',
    phone: '',
    shippingMethod: 'standard'
  },
  payment: {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
    shippingAmount: Math.floor(Math.random() * 100), // Random shipping amount
    paymentMethod: 'credit'
  }
};

// Validation schema
const validationSchema = [
  Yup.object({
    shipping: Yup.object().shape({
      RecipientName: Yup.string()
        .required('Name is required')
        .matches(/^[a-zA-Z\s]+$/, 'Name must only contain letters'),
      country: Yup.string()
        .required('Country is required')
        .matches(/^[a-zA-Z\s]+$/, 'Country must only contain letters'),
      state: Yup.string()
        .required('State is required')
        .matches(/^[a-zA-Z\s]+$/, 'State must only contain letters'),
      city: Yup.string()
        .required('City is required')
        .matches(/^[a-zA-Z\s]+$/, 'City must only contain letters'),
      address: Yup.string()
        .required('Address is required')
        .max(100, 'Address can be at most 100 characters'),
      postalCode: Yup.string()
        .required('Postal Code is required')
        .matches(/^\d{5}$/, 'Postal Code must be exactly 5 digits'),
      phone: Yup.string()
        .required('Phone number is required')
        .matches(/^\d{11}$/, 'Phone number must be exactly 11 digits'),
      shippingMethod: Yup.string().required('Shipping method is required')
    })
  }),
  Yup.object({
    payment: Yup.object().shape({
      cardNumber: Yup.string()
        .required('Card number is required')
        .matches(/^\d{16}$/, 'Card number must be exactly 16 digits'),
      expiryDate: Yup.string()
        .required('Expiry date is required')
        .matches(
          /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/,
          'Expiry date must be in dd/mm/yyyy format'
        )
        .test('expiryDate', 'Expiry date must be a future date', (value) => {
          if (!value) return false;
          const [day, month, year] = value.split('/').map(Number);
          const expiryDate = new Date(year, month - 1, day); // month is zero-based in Date()
          const currentDate = new Date();
          return expiryDate > currentDate;
        }),
      cvv: Yup.string()
        .required('CVV is required')
        .matches(/^\d{4}$/, 'CVV must be exactly 4 digits'),
      cardHolderName: Yup.string()
        .required('Card holder name is required')
        .matches(/^[a-zA-Z\s]+$/, 'Card holder name must only contain letters'),
      paymentMethod: Yup.string().required('Payment method is required')
    })
  }),
  Yup.object() // Confirmation step does not require validation
];


const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { cart, clearCart } = useCartStore();
  console.log('cart in checkout', cart)

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleDialogClose = () => {
    setDialogOpen(false);
    clearCart();
    navigate('/');
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    if (activeStep === steps.length - 1) {
      setIsSubmitting(true);
      // Simulate an API call
      setTimeout(() => {
        setIsSubmitting(false);
        setDialogOpen(true);
        setSubmitting(false);
      }, 2000);
    } else {
      handleNext(); // Move to next step
      setSubmitting(false); // Ensure Formik's submitting state is reset
    }
  };

  const getStepContent = (step, setFieldTouched, errors, touched, values) => {
    switch (step) {
      case 0:
        return <ShippingInformation setFieldTouched={setFieldTouched} errors={errors} touched={touched} />;
      case 1:
        return <PaymentInformation setFieldTouched={setFieldTouched} errors={errors} touched={touched} />;
      case 2:
        return <Confirmation values={values} />;
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema[activeStep]}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldTouched, errors, touched, values }) => (
        <Form>
          <Box sx={{ width: '100%', mt: 4 }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box sx={{ mt: 4 }}>
              {getStepContent(activeStep, setFieldTouched, errors, touched, values)}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              {isSubmitting ? (
                <CircularProgress size={24} />
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    console.log("Errors:", errors); // Log errors on submit
                  }}
                >
                  {activeStep === steps.length - 1 ? 'Place Order' : 'Next'}
                </Button>
              )}
            </Box>
          </Box>
          <Dialog open={dialogOpen} onClose={handleDialogClose}>
            <DialogTitle>Order Placed Successfully</DialogTitle>
            <DialogContent>
              <Typography>Your order has been placed successfully. Thank you for shopping with us!</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">Close</Button>
            </DialogActions>
          </Dialog>
        </Form>
      )}
    </Formik>
  );
};

export default Checkout;
