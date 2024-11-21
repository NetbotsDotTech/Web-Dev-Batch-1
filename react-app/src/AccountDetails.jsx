// src/AccountDetails.js
import React from "react";
import { Field } from "formik";
import { TextField, Typography } from "@mui/material";

const AccountDetails = () => (
  <>
    <Typography variant="h6" gutterBottom>
      Account Details
    </Typography>
    <Field name="accountEmail">
      {({ field, meta }) => (
        <TextField
          fullWidth
          label="Email"
          type="email"
          {...field}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="accountPassword">
      {({ field, meta }) => (
        <TextField
          fullWidth
          label="Password"
          type="password"
          {...field}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
  </>
);

export default AccountDetails;
