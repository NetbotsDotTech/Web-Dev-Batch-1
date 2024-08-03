import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Card, CardContent, CardMedia, CardActions, Button, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';

// Sample product data with 20 different products
const products = [
  { id: 1, name: 'Organic Coffee Beans', image: 'https://media.istockphoto.com/id/1349239413/photo/shot-of-coffee-beans-and-a-cup-of-black-coffee-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=ZFThzn27DAj2KeVlLdt3_E6RJZ2sbw2g4sDyO7mYvqk=', price: '₨3,500', manufacturingDate: '2024-01-01', expirationDate: '2025-01-01', discount: '10%' },
  { id: 2, name: 'Premium Green Tea', image: 'https://images.unsplash.com/photo-1701520839071-55bdfe64c5ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8fDA%3D', price: '₨2,200', manufacturingDate: '2023-06-01', expirationDate: '2024-06-01', discount: '15%' },
  { id: 3, name: 'Natural Honey', image: 'https://media.istockphoto.com/id/1173786182/photo/honey-jar-with-honeycomb-and-bee-pollen-ginger-and-lime.jpg?s=612x612&w=0&k=20&c=I94DJAzHfoszhwYjJGvgorXeNto_NFtc_saTFc2Vf8c=', price: '₨1,800', manufacturingDate: '2024-02-15', expirationDate: '2026-02-15', discount: '5%' },
  { id: 4, name: 'Almonds', image: 'https://images.unsplash.com/photo-1708874493509-7bdef1abf750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFsbW9uZHxlbnwwfHwwfHx8MA%3D%3D', price: '₨2,500', manufacturingDate: '2023-09-01', expirationDate: '2025-09-01', discount: '8%' },
  { id: 5, name: 'Cashews', image: 'https://media.istockphoto.com/id/1417865653/photo/cashew-on-dark-rustic-table.jpg?s=612x612&w=0&k=20&c=T3jRA7xYTbnVS70i0UW9M29e8-p6FBr6Kyi1rbjdl9I=', price: '₨2,800', manufacturingDate: '2023-11-01', expirationDate: '2025-11-01', discount: '12%' },
  { id: 6, name: 'Walnuts', image: 'https://plus.unsplash.com/premium_photo-1668445743008-0d84ffc370e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbnV0c3xlbnwwfHwwfHx8MA%3D%3D', price: '₨3,200', manufacturingDate: '2024-02-01', expirationDate: '2026-02-01', discount: '10%' },
  { id: 7, name: 'Organic Pasta', image: 'https://media.istockphoto.com/id/1803824141/photo/table-top-view-of-variety-of-uncooked-pasta.jpg?s=612x612&w=0&k=20&c=1dheGAK-gKd-7X9pacJwwifujJOb_ERIqv_YWi4JSUk=', price: '₨1,200', manufacturingDate: '2024-03-01', expirationDate: '2025-03-01', discount: '5%' },
  { id: 8, name: 'Whole Grain Bread', image: 'https://plus.unsplash.com/premium_photo-1664391923920-594dcb67c0b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2hvbGUlMjBncmFpbiUyMGJyZWFkfGVufDB8fDB8fHww', price: '₨350', manufacturingDate: '2024-04-01', expirationDate: '2024-07-01', discount: '15%' },
  { id: 9, name: 'Chia Seeds', image: 'https://media.istockphoto.com/id/1154404483/photo/chia-seeds-in-wooden-spoon-over-organic-dish-with-chia-seeds-on-old-wooden-table.jpg?s=612x612&w=0&k=20&c=oAcqre7PFRq6p_ncBNERMgaMHz322But-gIn2VAhQlA=', price: '₨2,000', manufacturingDate: '2024-05-01', expirationDate: '2025-05-01', discount: '7%' },
  { id: 10, name: 'Quinoa', image: 'https://t3.ftcdn.net/jpg/07/59/75/52/240_F_759755282_dtpIJ8udEo5iRjlZ5EWwbW79tjob4Zau.jpg', price: '₨2,500', manufacturingDate: '2024-06-01', expirationDate: '2025-06-01', discount: '10%' },
  { id: 11, name: 'Dark Chocolate', image: 'https://media.istockphoto.com/id/1191675047/photo/dark-chocolate-in-a-metal-scoop-and-on-a-table.jpg?s=612x612&w=0&k=20&c=aAZxzWgxekSwKE7-3A-d86UFBmLIKOEEegfvxm4-2oA=', price: '₨1,000', manufacturingDate: '2024-07-01', expirationDate: '2025-07-01', discount: '15%' },
  { id: 12, name: 'Organic Olive Oil', image: 'https://media.istockphoto.com/id/464433694/photo/olive-oil.jpg?s=612x612&w=0&k=20&c=2JGwS4mtdJngCwgdnZfd7PS1l2r5wtzfva2K8zGRBYY=', price: '₨3,000', manufacturingDate: '2024-08-01', expirationDate: '2026-08-01', discount: '12%' },
  { id: 13, name: 'Coconut Oil', image: 'https://media.istockphoto.com/id/493637335/photo/coconut-and-coconut-oil.jpg?s=612x612&w=0&k=20&c=8fDmvcCu6zS45kaBaJmIRHSO7MUdcisnLg2rPjBSgpk=', price: '₨1,800', manufacturingDate: '2024-09-01', expirationDate: '2025-09-01', discount: '8%' },
  { id: 14, name: 'Brown Rice', image: 'https://media.istockphoto.com/id/1411788822/photo/paddy-rice-brown-coarse-rice-and-white-thai-jasmine-rice.jpg?s=612x612&w=0&k=20&c=yA4uK-FCZEf8wizukh1jlOzcD5IEfP_JP5GsWTSlmqo=', price: '₨1,500', manufacturingDate: '2024-10-01', expirationDate: '2025-10-01', discount: '10%' },
  { id: 15, name: 'Greek Yogurt', image: 'https://media.istockphoto.com/id/1222179271/photo/healthy-breakfast-with-fresh-greek-yogurt-on-background.jpg?s=612x612&w=0&k=20&c=1oLswnjpXwqhhTUQxpu2ZCwU4-gr-4zG4rcI2tfSZ3Y=', price: '₨600', manufacturingDate: '2024-11-01', expirationDate: '2024-12-01', discount: '5%' },
  { id: 16, name: 'Almond Butter', image: 'https://media.istockphoto.com/id/1169618334/photo/almonds-and-almond-nut-butter.jpg?s=612x612&w=0&k=20&c=GOW4oyIiETo7CdHqIppzEkdS8qTGlA1LMxpowdS9Xd0=', price: '₨1,000', manufacturingDate: '2024-12-01', expirationDate: '2025-12-01', discount: '12%' },
  { id: 17, name: 'Flax Seeds', image: 'https://media.istockphoto.com/id/1124384250/photo/flax-seeds-in-bowl-on-dark-background-closeup-top-view.jpg?s=612x612&w=0&k=20&c=tp7KcZwC3OHbKFQN1-3bMO-SAY-VWtPTAA1BJwYRkvQ=', price: '₨1,200', manufacturingDate: '2024-01-01', expirationDate: '2025-01-01', discount: '7%' },
  { id: 18, name: 'Pumpkin Seeds', image: 'https://media.istockphoto.com/id/153704902/photo/toasted-pumpkin-seeds-spilling-from-a-yellow-bowl.jpg?s=612x612&w=0&k=20&c=Akx90gkW1mCwGb8MgwKg-4gUXpmRUcuWsGliUOY4Jp0=', price: '₨1,500', manufacturingDate: '2024-02-01', expirationDate: '2025-02-01', discount: '10%' },
  { id: 19, name: 'Goji Berries', image: 'https://media.istockphoto.com/id/522447991/photo/red-dried-goji-berries-in-wooden-spoon.jpg?s=612x612&w=0&k=20&c=Q-vztsrHf4fp00GxDbjEQtHeTduTg-Q-qMxR4BHNRjE=', price: '₨2,000', manufacturingDate: '2024-03-01', expirationDate: '2025-03-01', discount: '8%' },
  { id: 20, name: 'Dried Apricots', image: 'https://media.istockphoto.com/id/999115566/photo/bowl-with-dried-apricots-on-wooden-table.jpg?s=612x612&w=0&k=20&c=XktLAEjsA87ezp79FdElj2cY2zOQTMXJiQVoMuvQ7RE=', price: '₨1,800', manufacturingDate: '2024-04-01', expirationDate: '2025-04-01', discount: '12%' },
  { id: 21, name: 'Spirulina Powder', image: 'https://media.istockphoto.com/id/1222786956/photo/healthy-spirulina-drink-in-the-glass.jpg?s=612x612&w=0&k=20&c=lUyKqu9JT82jOYN_y-lVZif24DsVEoYegg0MvZYFUbc=', price: '₨1,400', manufacturingDate: '2024-05-01', expirationDate: '2026-05-01', discount: '10%' }
];

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setSnackbarOpen(true); // Show confirmation snackbar
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container>
      <Paper style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Welcome to ShoppingClone
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Explore our collection of amazing products.
        </Typography>
      </Paper>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Manufacturing Date: {product.manufacturingDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Expiration Date: {product.expirationDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Discount: {product.discount}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'center' }}>
                <Button size="small" color="primary" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
                <Button size="small" color="secondary" onClick={() => handleViewDetails(product)}>
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedProduct && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Product Details</DialogTitle>
          <DialogContent>
            <Typography variant="h6">{selectedProduct.name}</Typography>
            <Typography variant="body1">Price: {selectedProduct.price}</Typography>
            <Typography variant="body1">Manufacturing Date: {selectedProduct.manufacturingDate}</Typography>
            <Typography variant="body1">Expiration Date: {selectedProduct.expirationDate}</Typography>
            <Typography variant="body1">Discount: {selectedProduct.discount}</Typography>
            <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%' }} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Added to cart!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Home;
