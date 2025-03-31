import React from 'react';
import {
  Box,
  Typography,
  Divider,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
} from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import { useCartStore } from '../../context/CartContext';
import { useAuthStore } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

const Confirmation = ({ values }) => {
  const { cart } = useCartStore();
  const { purchaseProduct } = useAuthStore();
  const navigate = useNavigate();

  const handlePurchase = () => {
    const productDetail = cart.map((item) => ({
      productName: item.productName,
      brand: item.Subcategory.brand,
      category: item.category,
      color: item.Subcategory.color,
      size: item.Subcategory.size,
      price: item.Subcategory.price,
      quantity: item.quantity,
      description: item.productDescription,
      image: item.images ? item.images[0] : null,
    }));
    const shippingDetail = values.shipping;
    const paymentDetail = values.payment;
    const others = { orderDate: new Date() };

    purchaseProduct(productDetail, shippingDetail, paymentDetail, others, navigate);
  };

  const EqualHeightCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',  // Default shadow (string-based)
    borderRadius: 12,
    '&:hover': {
      boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)', // Shadow on hover (string-based)
    },
  }));
  
  

  return (
    <Box sx={{ width: '90%', mx: 'auto', my: 4 }}>
      <Typography variant="h4" align="center" fontWeight="bold" color="primary">
        Order Summary
      </Typography>

      {/* Shipping and Payment Information */}
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6} >
          <EqualHeightCard sx={{height:350}}>
            <CardContent >
              <Typography variant="h6" fontWeight="bold" color="#333">
                Shipping Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={1}>
                {Object.keys(values.shipping).map((key) => (
                  <Typography key={key} variant="body1" color="text.secondary">
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {values.shipping[key]}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
          </EqualHeightCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <EqualHeightCard sx={{height:350}}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" color="#333">
                Payment Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={1}>
                {Object.keys(values.payment).map((key) => (
                  <Typography key={key} variant="body1" color="text.secondary">
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {values.payment[key]}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
          </EqualHeightCard>
        </Grid>
      </Grid>

      {/* Cart Items Table */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" align="center" fontWeight="bold" color="primary" gutterBottom>
          Product Details
        </Typography>

        <MaterialReactTable
          columns={[
            { accessorKey: 'productName', header: 'Product Name' },
            { accessorKey: 'brand', header: 'Brand' },
            { accessorKey: 'category', header: 'Category' },
            { accessorKey: 'color', header: 'Color' },
            { accessorKey: 'size', header: 'Size' },
            { accessorKey: 'price', header: 'Price (PKR)' },
            { accessorKey: 'quantity', header: 'Quantity' },
            { accessorKey: 'description', header: 'Description' },
          ]}
          data={cart.map((item) => ({
            productName: item.productName,
            brand: item.Subcategory.brand,
            category: item.category,
            color: item.Subcategory.color,
            size: item.Subcategory.size,
            price: item.Subcategory.price,
            quantity: item.quantity,
            description: item.productDescription,
          }))}
          enableSorting
          enableFiltering
          enablePagination
          muiTableBodyRowProps={{ hover: true }}
          muiTableHeadCellProps={{
            sx: { fontWeight: 'bold', color: 'primary.main', textAlign: 'center' },
          }}
          muiTableBodyCellProps={{
            sx: { textAlign: 'center' },
          }}
          enableRowSelection={false}
          sx={{
            mt: 3,
            '& .MuiTableRow-root:hover': {
              backgroundColor: 'rgba(0, 123, 255, 0.1)',
            },
          }}
        />
      </Box>

      {/* Confirm Purchase Button */}
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePurchase}
          size="large"
          sx={{
            padding: '10px 40px',
            fontSize: '1.2rem',
            textTransform: 'none',
            boxShadow: '0 5px 15px rgba(0, 123, 255, 0.2)',
            '&:hover': {
              backgroundColor: '#0056b3',
              boxShadow: '0 8px 20px rgba(0, 123, 255, 0.3)',
            },
          }}
        >
          Confirm Purchase
        </Button>
      </Box>
    </Box>
  );
};

export default Confirmation;
