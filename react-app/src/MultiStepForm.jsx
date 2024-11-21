// src/MultiStepForm.js
import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { initialValues, validationSchema } from "./validationSchema";
import ProductDetails from "./ProductDetails";
import AccountDetails from "./AccountDetails";
import CustomerDetails from "./CustomerDetails";

const steps = ["Product Details", "Account Details", "Customer Details"];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const isLastStep = activeStep === steps.length - 1;

  const handleNext = (values, actions) => {
    if (isLastStep) {
      console.log(values);
      alert("Form submitted!");
      actions.resetForm();
      setActiveStep(0);
    } else {
      setActiveStep(activeStep + 1);
    }
    actions.setSubmitting(false);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <ProductDetails />;
      case 1:
        return <AccountDetails />;
      case 2:
        return <CustomerDetails />;
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema[activeStep]}
        onSubmit={handleNext}
      >
        {({ isSubmitting }) => (
          <Form>
            {getStepContent(activeStep)}

            <div style={{ marginTop: 20 }}>
              {activeStep > 0 && (
                <Button onClick={handleBack} style={{ marginRight: 10 }}>
                  Back
                </Button>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                {isLastStep ? "Submit" : "Next"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;
