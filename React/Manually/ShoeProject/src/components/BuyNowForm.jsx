import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stepper, Step, StepLabel, InputAdornment, Select, MenuItem } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const validationSchemaProduct = Yup.object().shape({
  quantity: Yup.number().min(1, 'Minimum quantity is 1').required('Required'),
  productName: Yup.string().min(5, 'Minimum string length is 5').required('Required'),
});

const validationSchemaCustomer = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phone: Yup.string().required('Required'),
});

const validationSchemaAccount = Yup.object().shape({
  address: Yup.string().required('Required'),
  paymentMethod: Yup.string().required('Required'),
});

const steps = ['Product Detail', 'Customer Detail', 'Account Detail'];

const BuyNowForm = ({ product, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (validateForm) => {
    validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinalSubmit = (values, { resetForm }) => {
    alert(`Product Details:\nName: ${values.productName}\nQuantity: ${values.quantity}`);
    alert(`Customer Details:\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}`);
    alert(`Account Details:\nAddress: ${values.address}\nPayment Method: ${values.paymentMethod}`);
    alert('Congratulations! Your order has been successfully completed.');

    resetForm();
    setActiveStep(0);
    onClose();
  };

  return (
    <Formik
      initialValues={{
        productName: '',
        quantity: 0,
        name: '',
        email: '',
        phone: 0,
        address: '',
        paymentMethod: '',
      }}
      validationSchema={
        activeStep === 0
          ? validationSchemaProduct
          : activeStep === 1
          ? validationSchemaCustomer
          : validationSchemaAccount
      }
      onSubmit={handleFinalSubmit}
    >
      {({ isSubmitting, validateForm, setFieldValue, values }) => (
        <Form>
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box sx={{ mt: 3, mb: 2 }}>
              {activeStep === 0 && (
                <Box>
                  <Typography variant="h6">Product Detail</Typography>
                  <Field
                    name="productName"
                    as={TextField}
                    label="Product Name"
                    type="text"
                    fullWidth
                    margin="normal"
                    error={Boolean(<ErrorMessage name="productName" />)}
                    helperText={<ErrorMessage name="productName" />}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <ShoppingCartIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Field
                    name="quantity"
                    as={TextField}
                    label="Quantity"
                    type="number"
                    fullWidth
                    margin="normal"
                    error={Boolean(<ErrorMessage name="quantity" />)}
                    helperText={<ErrorMessage name="quantity" />}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <ShoppingCartIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              )}
              {activeStep === 1 && (
                <Box>
                  <Typography variant="h6">Customer Detail</Typography>
                  <Field
                    name="name"
                    as={TextField}
                    label="Name"
                    fullWidth
                    margin="normal"
                    error={Boolean(<ErrorMessage name="name" />)}
                    helperText={<ErrorMessage name="name" />}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Field
                    name="email"
                    as={TextField}
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    error={Boolean(<ErrorMessage name="email" />)}
                    helperText={<ErrorMessage name="email" />}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Field
                    name="phone"
                    as={TextField}
                    label="Phone"
                    fullWidth
                    margin="normal"
                    error={Boolean(<ErrorMessage name="phone" />)}
                    helperText={<ErrorMessage name="phone" />}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              )}
              {activeStep === 2 && (
                <Box>
                  <Typography variant="h6">Account Detail</Typography>
                  <Field
                    name="address"
                    as={TextField}
                    label="Address"
                    fullWidth
                    margin="normal"
                    error={Boolean(<ErrorMessage name="address" />)}
                    helperText={<ErrorMessage name="address" />}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <HomeIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Field
                    name="paymentMethod"
                    as={({ field }) => (
                      <Select
                        {...field}
                        fullWidth
                        margin="normal"
                        // displayEmpty
                        error={Boolean(<ErrorMessage name="paymentMethod" />)}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PaymentIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={(e) => setFieldValue('paymentMethod', e.target.value)}
                      >
                        <MenuItem value="" disabled>
                          Select Payment Method
                        </MenuItem>
                        <MenuItem value="Credit Card">Credit Card</MenuItem>
                        <MenuItem value="Debit Card">Debit Card</MenuItem>
                        <MenuItem value="Cash on Delivery">Cash on Delivery</MenuItem>
                        <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                      </Select>
                    )}
                    helperText={<ErrorMessage name="paymentMethod" />}
                  />
                </Box>
              )}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                {activeStep > 0 && (
                  <Button onClick={handleBack} variant="outlined" color="primary" startIcon={<ArrowBackIcon />}>
                    Back
                  </Button>
                )}
                <Button
                  onClick={
                    activeStep === steps.length - 1
                      ? null
                      : () => handleNext(validateForm)
                  }
                  variant="contained"
                  color="primary"
                  type={activeStep === steps.length - 1 ? 'submit' : 'button'}
                  disabled={isSubmitting}
                  endIcon={activeStep === steps.length - 1 ? <CheckCircleIcon /> : <ArrowForwardIcon />}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Box>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default BuyNowForm;
