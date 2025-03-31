// PurchaseForm.js
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  TextField,
  Stepper,
  Step,
  Typography,
  Box,
} from '@mui/material';

const PurchaseForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ['Product Details', 'Customer Details', 'Payment Details'];

  const initialValues = {
    productName: '',
    productDescription: '',
    productPrice: '',
    productQuantity: '',
    productSKU: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerAddress: '',
    customerCity: '',
    paymentMethod: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
    billingAddress: '',
    billingZip: '',
  };

  const validationSchemas = [
    Yup.object({
      productName: Yup.string().required('Required'),
      productDescription: Yup.string().required('Required'),
      productPrice: Yup.number().required('Required').positive(),
      productQuantity: Yup.number().required('Required').positive(),
      productSKU: Yup.string().required('Required'),
    }),
    Yup.object({
      customerName: Yup.string().required('Required'),
      customerEmail: Yup.string().email('Invalid email').required('Required'),
      customerPhone: Yup.string().required('Required'),
      customerAddress: Yup.string().required('Required'),
      customerCity: Yup.string().required('Required'),
    }),
    Yup.object({
      paymentMethod: Yup.string().required('Required'),
      cardNumber: Yup.string().required('Required'),
      cardExpiry: Yup.string().required('Required'),
      cardCVC: Yup.string().required('Required'),
      billingAddress: Yup.string().required('Required'),
      billingZip: Yup.string().required('Required'),
    }),
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <Typography>{label}</Typography>
          </Step>
        ))}
      </Stepper>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemas[activeStep]}
        onSubmit={(values) => {
          if (activeStep === steps.length - 1) {
            // Submit final values
            console.log('Final values:', values);
          } else {
            handleNext();
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {activeStep === 0 && (
              <>
                <Field
                  as={TextField}
                  name="productName"
                  label="Product Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage name="productName" component="div" />

                <Field
                  as={TextField}
                  name="productDescription"
                  label="Product Description"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage name="productDescription" component="div" />

                <Field
                  as={TextField}
                  name="productPrice"
                  label="Product Price"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  type="number"
                />
                <ErrorMessage name="productPrice" component="div" />

                <Field
                  as={TextField}
                  name="productQuantity"
                  label="Product Quantity"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  type="number"
                />
                <ErrorMessage name="productQuantity" component="div" />

                <Field
                  as={TextField}
                  name="productSKU"
                  label="Product SKU"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage name="productSKU" component="div" />
              </>
            )}

            {activeStep === 1 && (
              <>
                <Field
                  as={TextField}
                  name="customerName"
                  label="Customer Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage name="customerName" component="div" />

                <Field
                  as={TextField}
                  name="customerEmail"
                  label="Customer Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage name="customerEmail" component="div" />

                <Field
                  as={TextField}
                  name="customerPhone"
                  label="Customer Phone"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage name="customerPhone" component="div" />

                <Field
                  as={TextField}
                  name="customerAddress"
                  label="Customer Address"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage name="customerAddress" component="div" />

                <Field
                  as={TextField}
                  name="customerCity"
                  label="Customer City"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage name="customerCity" component="div" />
              </>
            )}

            {activeStep === 2 && (
              <>
                <Field
                  as={TextField}
                  name="paymentMethod"
                  label="Payment Method"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage name="paymentMethod" component="div" />

                <Field
                  as={TextField}
                  name="cardNumber"
                  label="Card Number"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage name="cardNumber" component="div" />

                <Field
                  as={TextField}
                  name="cardExpiry"
                  label="Card Expiry"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage name="cardExpiry" component="div" />

                <Field
                  as={TextField}
                  name="cardCVC"
                  label="Card CVC"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage name="cardCVC" component="div" />

                <Field
                  as={TextField}
                  name="billingAddress"
                  label="Billing Address"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage name="billingAddress" component="div" />

                <Field
                  as={TextField}
                  name="billingZip"
                  label="Billing Zip"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage name="billingZip" component="div" />
              </>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              {activeStep > 0 && (
                <Button variant="contained" onClick={handleBack}>
                  Back
                </Button>
              )}
              <Button type="submit" variant="contained" disabled={isSubmitting}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PurchaseForm;
