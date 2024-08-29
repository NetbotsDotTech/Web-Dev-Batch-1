import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Stepper, Step, StepLabel } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';

const steps = ['Product Options', 'Shipping Information', 'Payment Methods'];

const validationSchemas = [
  Yup.object().shape({
    size: Yup.string().required('Size is required'),
    color: Yup.string().required('Color is required'),
  }),
  Yup.object().shape({
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.string().required('Postal Code is required'),
  }),
  Yup.object().shape({
    paymentMethod: Yup.string().required('Payment method is required'),
    cardNumber: Yup.string().required('Card number is required'),
  }),
];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state; // This will contain the product details passed from ProductCard

  const isLastStep = activeStep === steps.length - 1;

  const handleNext = (values) => {
    if (isLastStep) {
      // Submit final values to next component or an API
      navigate('/order-summary', { state: { ...values, product } });
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Formik
        initialValues={{
          size: '',
          color: '',
          address: '',
          city: '',
          postalCode: '',
          paymentMethod: '',
          cardNumber: '',
        }}
        validationSchema={validationSchemas[activeStep]}
        onSubmit={handleNext}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box sx={{ mt: 2 }}>
              {activeStep === 0 && (
                <Box>
                  <Typography variant="h6">Choose Product Options</Typography>
                  <Field
                    name="size"
                    as={TextField}
                    label="Size"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="color"
                    as={TextField}
                    label="Color"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
              )}
              {activeStep === 1 && (
                <Box>
                  <Typography variant="h6">Enter Shipping Information</Typography>
                  <Field
                    name="address"
                    as={TextField}
                    label="Address"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="city"
                    as={TextField}
                    label="City"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="postalCode"
                    as={TextField}
                    label="Postal Code"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
              )}
              {activeStep === 2 && (
                <Box>
                  <Typography variant="h6">Enter Payment Methods</Typography>
                  <Field
                    name="paymentMethod"
                    as={TextField}
                    label="Payment Method"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="cardNumber"
                    as={TextField}
                    label="Card Number"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
              )}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                {activeStep > 0 && (
                  <Button variant="outlined" onClick={handleBack}>
                    Back
                  </Button>
                )}
                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                  {isLastStep ? 'Complete Purchase' : 'Next'}
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Checkout;
