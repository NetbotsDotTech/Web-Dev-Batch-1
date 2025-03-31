// PaymentInformation.js
import React from 'react';
import { Box, Typography, TextField, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Field, ErrorMessage } from 'formik';

const PaymentInformation = ({ setFieldTouched, errors, touched }) => (
  <Box sx={{ width: '90%', textAlign: 'center' }}>
    <Typography variant="h6">Payment Information</Typography>
    <Box sx={{ textAlign: 'center', marginLeft: '20%', marginRight: '10%' }}>
      {['cardHolderName', 'cardNumber', 'cvv', 'expiryDate', ].map((key) => (
        <Field
          key={key}
          name={`payment.${key}`}
          as={TextField}
          label={key.charAt(0).toUpperCase() + key.slice(1)}
          fullWidth
          margin="normal"
          onBlur={() => setFieldTouched(`payment.${key}`)}
          error={touched.payment?.[key] && Boolean(errors.payment?.[key])}
          helperText={touched.payment?.[key] ? <ErrorMessage name={`payment.${key}`} /> : ''}
          sx={{
            '& .MuiInputBase-root': { backgroundColor: '#fff' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'primary.main' },
              '&.Mui-error fieldset': { borderColor: 'red' },
            },
            '& .MuiFormHelperText-root': { color: 'red' },
          }}
        />
      ))}
      <FormControl component="fieldset">
        <Field name="payment.paymentMethod">
          {({ field }) => (
            <RadioGroup row {...field}>
              <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
              <FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
              <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
            </RadioGroup>
          )}
        </Field>
      </FormControl>
    </Box>
  </Box>
);

export default PaymentInformation;
