// src/components/AccountForm.js
import React from 'react';
import { Grid, TextField } from '@mui/material';
import { Field, ErrorMessage } from 'formik';

const AccountForm = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Field
        as={TextField}
        name="accountNumber"
        label="Account Number"
        fullWidth
        helperText={<ErrorMessage name="accountNumber" />}
      />
    </Grid>
    <Grid item xs={12}>
      <Field
        as={TextField}
        name="accountHolderName"
        label="Account Holder Name"
        fullWidth
        helperText={<ErrorMessage name="accountHolderName" />}
      />
    </Grid>
    <Grid item xs={12}>
      <Field
        as={TextField}
        name="accountIFSC"
        label="Account IFSC"
        fullWidth
        helperText={<ErrorMessage name="accountIFSC" />}
      />
    </Grid>
  </Grid>
);

export default AccountForm;
