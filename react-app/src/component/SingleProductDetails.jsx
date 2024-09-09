import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Grid, CircularProgress, Card, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';

const SingleProductDetail = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const productId = location.pathname.split('/').pop();

    useEffect(() => {
        // Fetch product details from the API
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!product) {
        return <Typography variant="h6" color="error">Product not found</Typography>;
    }

    return (
        <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="400"
                            image={product?.image}
                            alt={product.title}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CardContent>
                        <Typography variant="h4" component="div" gutterBottom>
                            {product.title}
                        </Typography>
                        <Typography variant="h5" color="text.primary">
                            ${product.price}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            {product.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Category: {product.category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Rating: {product.rating.rate} ({product.rating.count} reviews)
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SingleProductDetail;
