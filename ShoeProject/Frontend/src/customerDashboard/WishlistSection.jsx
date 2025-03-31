import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, IconButton, Tooltip } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { useAuthStore } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const WishlistSection = () => {
  const { productDetails, removeFromWishlist } = useAuthStore();
  const navigate = useNavigate();

  if (!productDetails || productDetails.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6">Your wishlist is empty.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, px: 2 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
        Wishlist
      </Typography>

      <Grid container spacing={4}>
        {productDetails.map((item, index) => {
          const product = item.productDetail;

          return (
            <Grid item xs={12} key={product._id || index}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  p: 2,
                  width: '90%',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <img
                  src={product.images[0] || 'placeholder-image-url'}
                  alt={product.productName || 'Product Image'}
                  style={{
                    width: '100%',
                    borderRadius: '5px',
                    objectFit: 'cover',
                    height: '150px',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {product.productName || 'Unnamed Product'}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                    Price: {product.Subcategory.price ? `${product.Subcategory.price} PKR` : 'Price not available'}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#1abc9c',
                      color: '#ffffff',
                      '&:hover': { backgroundColor: '#16a085' },
                      textTransform: 'none',
                      flexGrow: 1,
                      marginRight: 1,
                    }}
                    onClick={() => navigate(`/service/product/${product._id || ''}`)}
                  >
                    View
                  </Button>
                  <Tooltip title="Remove from wishlist" arrow>
                    <IconButton
                      color="error"
                      aria-label="remove from wishlist"
                      onClick={() => product._id && removeFromWishlist(product._id)}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default WishlistSection;
