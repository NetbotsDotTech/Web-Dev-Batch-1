import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, Rating, Dialog, DialogContent } from '@mui/material';
import BuyNowForm from './BuyNowForm';

const ProductCard = ({ product, onClick }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { id, image, title, price, rating } = product;

  return (
    <>
      <Card 
        sx={{ 
          maxWidth: 345, 
          height: '100%', // Ensure the card fills the available space
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between',
          cursor: 'pointer'
        }} 
        onClick={onClick}
      >
        <CardMedia
          component="img"
          height="200" // Fixed height for image
          image={image}
          alt={title}
          sx={{ objectFit: 'cover' }} // Ensure the image covers the space without distortion
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            PKR {price}
          </Typography>
          <Rating name="read-only" value={rating.rate} readOnly />
        </CardContent>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        

          <Button variant="contained" color="primary" size="small" onClick={handleOpen}>
          
            Buy Now
           
          </Button>
          <Button variant="outlined" color="primary" size="small">
            View Details
          </Button>
        </Box>
      </Card>

      {/* Dialog for Buy Now Form */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogContent>
          <BuyNowForm product={product} onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
