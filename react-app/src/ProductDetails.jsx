// src/ProductDetails.js
import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, Typography } from "@mui/material";

const ProductDetails = () => (
  <>
    <Typography variant="h6" gutterBottom>
      Product Details
    </Typography>
    <Field name="productName">
      {({ field, meta }) => (
        <TextField
          fullWidth
          label="Product Name"
          {...field}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="productPrice">
      {({ field, meta }) => (
        <TextField
          fullWidth
          label="Product Price"
          type="number"
          {...field}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
  </>
);

export default ProductDetails;
