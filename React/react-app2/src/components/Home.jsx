import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const Home = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=90')
      .then((response) => response.json())
      .then((data) => {
        // Assign random discount rates between 1% and 30% for each shoe
        const updatedData = data.map(shoe => ({
          ...shoe,
          discountRate: Math.floor(Math.random() * 30) + 1 // Random discount between 1% and 30%
        }));
        setShoes(updatedData);
      });
  }, []);

  const handleBuyNow = (shoe) => {
    alert(`Bought Item:\n\nTitle: ${shoe.title}\nPrice: PKR ${Math.round(shoe.price * 280)}\nDiscount: ${shoe.discountRate || '0%'}\n\nThank you for your purchase!`);
  };

  const handleViewDetails = (shoe) => {
    alert(`Details:\n\nTitle: ${shoe.title}\nPrice: PKR ${Math.round(shoe.price * 280)}\nDiscount: ${shoe.discountRate || '0%'}\nDescription: ${shoe.description}`);
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: '80px' }}> {/* Adjust margin-top as needed */}
      <Grid container spacing={3}>
        {shoes.map((shoe) => {
          const discountAmount = Math.round(shoe.price * 280 * (shoe.discountRate / 100));
          const discountedPrice = Math.round(shoe.price * 280 - discountAmount);

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={shoe.id}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={shoe.image}
                  alt={shoe.title}
                  sx={{ objectFit: 'cover' }} // Ensures the image covers the area without distortion
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    {shoe.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: PKR {discountedPrice} {/* Display discounted price */}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Discount: {shoe.discountRate || '0%'} 
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 1, marginTop: 'auto' }}>
                    <Button size="small" variant="contained" color="primary" onClick={() => handleBuyNow(shoe)}>
                      Buy Now
                    </Button>
                    <Button size="small" variant="outlined" color="primary" onClick={() => handleViewDetails(shoe)}>
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Home;
