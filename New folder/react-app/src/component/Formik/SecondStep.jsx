// src/components/CustomerForm.js
import React from 'react';
import { Grid, TextField } from '@mui/material';
import { Field, ErrorMessage } from 'formik';

const CustomerForm = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Field
        as={TextField}
        name="customerName"
        label="Customer Name"
        fullWidth
        helperText={<ErrorMessage name="customerName" />}
      />
    </Grid>
    <Grid item xs={12}>
      <Field
        as={TextField}
        name="customerEmail"
        label="Customer Email"
        type="email"
        fullWidth
        helperText={<ErrorMessage name="customerEmail" />}
      />
    </Grid>
    <Grid item xs={12}>
      <Field
        as={TextField}
        name="customerPhone"
        label="Customer Phone"
        fullWidth
        helperText={<ErrorMessage name="customerPhone" />}
      />
    </Grid>
  </Grid>
);

export default CustomerForm;
