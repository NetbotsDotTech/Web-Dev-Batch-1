// src/components/ProductForm.js
import React from 'react';
import { Grid, TextField } from '@mui/material';
import { Field, ErrorMessage } from 'formik';

const ProductForm = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Field
        as={TextField}
        name="productName"
        label="Product Name"
        fullWidth
        helperText={<ErrorMessage name="productName" />}
      />
    </Grid>
    <Grid item xs={12}>
      <Field
        as={TextField}
        name="productDescription"
        label="Product Description"
        fullWidth
        helperText={<ErrorMessage name="productDescription" />}
      />
    </Grid>
    <Grid item xs={12}>
      <Field
        as={TextField}
        name="productPrice"
        label="Product Price"
        type="number"
        fullWidth
        helperText={<ErrorMessage name="productPrice" />}
      />
    </Grid>
  </Grid>
);

export default ProductForm;
