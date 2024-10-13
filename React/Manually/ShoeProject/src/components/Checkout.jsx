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
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Steps for checkout
const steps = ['Shipping Information', 'Payment Information', 'Confirmation'];

// Initial form values
const initialValues = {
  shipping: {
    name: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
    email: '',
    shippingMethod: 'standard',
  },
  payment: {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
    billingAddressSame: true,
  },
  termsAgreed: false,
};

// Validation schema
const validationSchema = [
  Yup.object({
    shipping: Yup.object().shape({
      name: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      postalCode: Yup.string().required('Required'),
      phone: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      shippingMethod: Yup.string().required('Required'),
    }),
  }),
  Yup.object({
    payment: Yup.object().shape({
      cardNumber: Yup.string().required('Required'),
      expiryDate: Yup.string().required('Required'),
      cvv: Yup.string().required('Required'),
      cardHolderName: Yup.string().required('Required'),
    }),
  }),
];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false); // State for modal

  const handleSubmit = async (values) => {
    if (activeStep === steps.length - 1) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        // Log and store the order
        console.log('Order submitted:', values);
        localStorage.setItem('order', JSON.stringify(values));

        // Open the success modal
        setOpenModal(true);
        
        setLoading(false);
      }, 2000);
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    // Optionally reset the form or navigate elsewhere after closing
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema[activeStep]}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
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
              {activeStep === 0 && <ShippingInformation />}
              {activeStep === 1 && <PaymentInformation />}
              {activeStep === 2 && <Confirmation values={values} />}

              <Box sx={{ marginTop: 3 }}>
                <Button
                  variant="contained"
                  onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
                  disabled={activeStep === 0}
                  sx={{ marginRight: 2 }}
                >
                  Back to Cart
                </Button>
                <Button variant="contained" type="submit" disabled={loading} sx={{marginLeft:"70%"}}>
                  {loading ? (
                    <CircularProgress size={24} />
                  ) : activeStep < steps.length - 1 ? (
                    'Continue to Payment'
                  ) : (
                    'Place Order'
                  )}
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Success Modal */}
          <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle>Order Successful</DialogTitle>
            <DialogContent>
              <Typography variant="body1">
                Congratulations! Your order has been placed successfully.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Form>
      )}
    </Formik>
  );
};

// Shipping Information Component
const ShippingInformation = () => (
  <Box sx={{width:'90%', textAlign:'center'}}>
    <Typography variant="h6" sx={{textAlign:'center'}}>Shipping Information</Typography>
    <Box sx={{textAlign:'center', marginLeft:'20%', marginRight:'10%'}}>
       {Object.keys(initialValues.shipping).map((key) => (
      <Field
        key={key}
        name={`shipping.${key}`}
        as={TextField}
        label={key.charAt(0).toUpperCase() + key.slice(1)}
        fullWidth
        margin="normal"
        helperText={<ErrorMessage name={`shipping.${key}`} />}
        error={!!<ErrorMessage name={`shipping.${key}`} />}
        
      />
    ))}</Box>
    <FormControl component="fieldset">
      <Field name="shipping.shippingMethod">
        {({ field }) => (
          <RadioGroup row {...field}>
            <FormControlLabel value="standard" control={<Radio />} label="Standard Shipping" />
            <FormControlLabel value="express" control={<Radio />} label="Express Shipping" />
          </RadioGroup>
        )}
      </Field>
    </FormControl>
  </Box>
);

// Payment Information Component
const PaymentInformation = () => (
  <Box  sx={{width:'90%', textAlign:'center'}}>
    <Typography variant="h6">Payment Information</Typography>
    <Box sx={{textAlign:'center', marginLeft:'20%', marginRight:'10%'}}>
    {Object.keys(initialValues.payment).map((key) => (
      <Field
        key={key}
        name={`payment.${key}`}
        as={TextField}
        label={key.charAt(0).toUpperCase() + key.slice(1)}
        fullWidth
        margin="normal"
        helperText={<ErrorMessage name={`payment.${key}`} />}
        error={!!<ErrorMessage name={`payment.${key}`} />}
      />
    ))}
    </Box>
    <Field name="payment.billingAddressSame">
      {({ field }) => (
        <FormControlLabel
          control={<Checkbox {...field} checked={field.value} />}
          label="Billing address is the same as shipping"
        />
      )}
    </Field>
  </Box>
);

// Confirmation Component
const Confirmation = ({ values }) => (
  <Box sx={{width:'90%', textAlign:'center'}}>
    <Typography variant="h6">Confirmation</Typography>
    <Typography variant="body1">Thank you for your order!</Typography>
    <Typography variant="body2">
      Shipping to: {values.shipping.name}, {values.shipping.address}, {values.shipping.city}, {values.shipping.state}, {values.shipping.postalCode}
    </Typography>
    <Typography variant="body2">
      Payment Method: {values.payment.cardHolderName}
    </Typography>
  </Box>
);

export default Checkout;
