import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, Typography, Box, Skeleton } from '@mui/material';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
        setLoading(false);
        console.log("Rendered")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      setProducts([]);
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <Grid container spacing={3}>
      {loading ? (
        Array.from(Array(6).keys()).map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Card>
              <Skeleton variant="rectangular" width="100%" height={200} />
              <CardContent>
                <Skeleton />
                <Skeleton width="60%" />
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.thumbnail}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Arial', color: '#333' }}>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                  <Typography variant="body1" sx={{ color: '#007bff', fontSize: '1.2rem' }}>
                    Price: ${product.price} ({product.discountPercentage}% off)
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#28a745', fontSize: '1.2rem' }}>
                    Rating: {product.rating}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" mt={1} sx={{ color: '#6610f2', fontSize: '1rem' }}>
                  Brand: {product.brand}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: '#dc3545', fontSize: '1rem' }}>
                  Category: {product.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ProductList;
