// ShippingInformation.js
import React from 'react';
import { Box, Typography, TextField, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Field, ErrorMessage } from 'formik';

const ShippingInformation = ({ setFieldTouched, errors, touched }) => (
  <Box sx={{ width: '90%', textAlign: 'center' }}>
    <Typography variant="h6" sx={{ textAlign: 'center' }}>Shipping Information</Typography>
    <Box sx={{ textAlign: 'center', marginLeft: '20%', marginRight: '10%' }}>
      {['RecipientName', 'country', 'state', 'city', 'address','postalCode', 'phone', 'shippingMethod'].map((key) => (
        <Field
          key={key}
          name={`shipping.${key}`}
          as={TextField}
          label={key.charAt(0).toUpperCase() + key.slice(1)}
          fullWidth
          margin="normal"
          onBlur={() => setFieldTouched(`shipping.${key}`)}
          error={touched.shipping?.[key] && Boolean(errors.shipping?.[key])}
          helperText={touched.shipping?.[key] && <ErrorMessage name={`shipping.${key}`} />}
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
    </Box>
    <FormControl component="fieldset">
      <Field name="shipping.shippingMethod">
        {({ field }) => (
          <RadioGroup row {...field}>
            <FormControlLabel value="standard" control={<Radio />} label="Standard Shipping" />
            <FormControlLabel value="express" control={<Radio />} label="Express Shipping" />
          </RadioGroup>
        )}
      </Field>
    </FormControl>
  </Box>
);

export default ShippingInformation;
