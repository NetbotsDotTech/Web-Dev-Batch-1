import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Box, Button, Grid, Step, StepLabel, Stepper, Modal, Typography } from '@mui/material';
import ProductForm from './FirstStep';
import CustomerForm from './SecondStep';
import AccountForm from './ThirdStep';
import { validationSchema } from './Validation';
import { initialValues } from './Schemas';

const steps = ['Product Details', 'Customer Details', 'Account Details'];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);

  const handleNext = (values, actions) => {
    if (activeStep === steps.length - 1) {
      setOpen(true);  // Open modal on final submission
      console.log("FORM SUBMITTED", values);
      actions.resetForm(); // Clear all form data
      setActiveStep(0); // Reset to the first step
      actions.setSubmitting(false); // Ensure form submission is complete
    } else {
      setActiveStep(prev => prev + 1);
      actions.setTouched({}); // Reset touched fields to prevent validation errors from previous steps
      actions.setSubmitting(false); // Allow user to continue
    }
  };

  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <ProductForm />;
      case 1:
        return <CustomerForm />;
      case 2:
        return <AccountForm />;
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <div style={{margin:"50px"}}>
 <Formik
      initialValues={initialValues}
      validationSchema={validationSchema[activeStep]}
      onSubmit={(values, actions) => handleNext(values, actions)}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box mt={3}>
            {renderStepContent(activeStep)}
          </Box>

          <Box mt={3}>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item>
                {activeStep > 0 && (
                  <Button onClick={handleBack} variant="contained">
                    Back
                  </Button>
                )}
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                p: 4,
                boxShadow: 24,
              }}
            >
              <Typography variant="h6" component="h2">
                Purchase Successful!
              </Typography>
              <Typography sx={{ mt: 2 }}>
                Your purchase was successful. Thank you for your order.
              </Typography>
              <Box mt={3}>
                <Button onClick={handleClose} variant="contained" fullWidth>
                  Close
                </Button>
              </Box>
            </Box>
          </Modal>
        </Form>
      )}
    </Formik>
    </div>
   
  );
};

export default MultiStepForm;
