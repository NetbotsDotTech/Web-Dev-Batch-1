import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import axios from 'axios';
// import ProductCard from './ProductCard';
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch products from the API
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                console.log("Response Data ", response)
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card
                            sx={{
                                maxWidth: 345,
                                margin: 'auto',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.image}
                                alt={product.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.category}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                    ${product.price}
                                </Typography>
                            </CardContent>
                        </Card>
                        {/* <ProductCard product={product} /> */}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductList;
