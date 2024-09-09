import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: '$10', image: 'path_to_image' },
  // Add more products
];

const ProductList = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia component="img" height="140" image={product.image} alt={product.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`/product/${product.id}`}>
                  View Details
                </Button>
                <Button size="small">Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
