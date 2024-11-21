// src/CustomerDetails.js
import React from "react";
import { Field } from "formik";
import { TextField, Typography } from "@mui/material";

const CustomerDetails = () => (
  <>
    <Typography variant="h6" gutterBottom>
      Customer Details
    </Typography>
    <Field name="customerName">
      {({ field, meta }) => (
        <TextField
          fullWidth
          label="Customer Name"
          {...field}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="customerPhone">
      {({ field, meta }) => (
        <TextField
          fullWidth
          label="Phone Number"
          {...field}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
  </>
);

export default CustomerDetails;
