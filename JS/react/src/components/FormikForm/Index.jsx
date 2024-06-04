import React from "react";
import { useFormik } from "formik";
import {
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Modal,
  Backdrop,
  Typography,
  Fade,
} from "@mui/material";

import Values from "./InitialValue";
import ValidationSchema from "./Validation";

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const formik = useFormik({
    initialValues: Values,
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      if (activeStep === 0) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        // Handle submission
        setOpen(true);
        console("Form submitted:", values);
      }
    },
  });

  const handleNext = () => {
    if ((activeStep === 0 || activeStep === 1) && !formik.errors.length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 2 && !formik.errors.length) {
      formik.handleSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step key={0}>
          <StepLabel>Step 1</StepLabel>
        </Step>
        <Step key={1}>
          <StepLabel>Step 2</StepLabel>
        </Step>
        <Step key={2}>
          <StepLabel>Step 3</StepLabel>
        </Step>
      </Stepper>
      <form onSubmit={formik.handleSubmit}>
        {activeStep === 0 && (
          <Grid
            container
            sx={{
              ml: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              justifyItems: "center",
            }}
            spacing={2}
          >
            <Grid item xs={12} sm={12}>
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="username"
                name="username"
                label="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
            </Grid>
          </Grid>
        )}
        {activeStep === 1 && (
          <Grid container sx={{ ml: 20 }} spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address"
                name="address"
                label="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                name="password"
                type="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
            </Grid>
          </Grid>
        )}
        {activeStep === 2 && (
          <div>
            <h1>Thank You!</h1>
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            float: "right",
          }}
        >
          {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}
          <Button onClick={handleNext} variant="contained" color="primary">
            {activeStep === 2 ? "Submit" : "Next"}
          </Button>
        </div>
      </form>

      {/* Modal to display form values */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
              margin: "auto",
              marginTop: "100px",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Form Values
            </Typography>
            {/* Display form values inside the modal */}
            {Object.entries(formik.values).map(([key, value]) => (
              <div key={key}>
                <Typography variant="body1">
                  <strong>{key}:</strong> {value}
                </Typography>
              </div>
            ))}
            <Button onClick={handleClose} color="primary" variant="contained">
              Close
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default MultiStepForm;
