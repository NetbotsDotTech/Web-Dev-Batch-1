import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, CircularProgress, Card, CardContent, CardMedia, Skeleton, Rating, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        // Mock data for additional fields
        const additionalInfo = {
          brand: id % 2 === 0 ? 'Male' : 'Female', // Random assignment for demo purposes
          size: 'Medium', // Mock size
          company: 'Awesome Brand Co.', // Mock company name
          topBuyerLocation: 'New York, USA', // Mock location
        };
        setProduct({ ...response.data, ...additionalInfo });
      } catch (error) {
        console.error('Error fetching product detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  return (
    <Box sx={{ p: 4 }}>
      {loading ? (
        <Card sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
          <Skeleton variant="rectangular" width="100%" height={400} />
          <CardContent>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="rectangular" width="100%" height={40} sx={{ mt: 3 }} />
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                height="400"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: 'cover', borderRadius: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  PKR {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Brand: {product.brand}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Size: {product.size}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Company: {product.company}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Top Buyer Location: {product.topBuyerLocation}
                </Typography>
                <Rating value={product.rating.rate} readOnly sx={{ mt: 2 }} />
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Category: {product.category}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3 }}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      )}
    </Box>
  );
};

export default ProductDetail;
