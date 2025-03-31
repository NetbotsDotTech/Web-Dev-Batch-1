import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const OrderSummary = () => {
  const { state } = useLocation();
  const { formData } = state || {};

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Order Summary
      </Typography>
      <Typography variant="h6">Name: {formData.name}</Typography>
      <Typography variant="h6">Email: {formData.email}</Typography>
      <Typography variant="h6">Address: {formData.address}</Typography>
      <Typography variant="h6">Payment Method: {formData.paymentMethod}</Typography>
    </Box>
  );
};

export default OrderSummary;
