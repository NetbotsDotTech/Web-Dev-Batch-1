import {  useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  Divider,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCartStore } from '../context/CartContext';

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, deleteItem } = useCartStore();
  




  const getSubtotal = () => {
    return cart.reduce((acc, item) => acc + (parseFloat(item.productSubcategory?.price) * item.quantity), 0);
  };
  console.log("Cart Items", cart); // Log the current cart items

  if (cart.length === 0) {
    return <Typography>No products in your cart.</Typography>;
  }

  const handleRemoveItem = (itemId) => {
    console.log("Removing item with id:", itemId); // Debugging line
    deleteItem(itemId); // Call to delete the item
  };

  return (
    <Box sx={{ padding: 3, height: 'auto', display: 'flex', flexDirection: 'column', marginTop: 10 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        <IconButton onClick={() => navigate('/')} sx={{ position: 'absolute', left: 20, top: 20 }}>
          <CloseIcon />
        </IconButton>
        <AddShoppingCartIcon sx={{ fontSize: 50 }} />
        <Typography variant="h3">{cart.length} Items</Typography>
        <Typography variant="h6">Congratulations! You get free standard shipping</Typography>
      </Box>
      <Divider sx={{ marginBottom: 2, height: '12px', backgroundColor: '#ccc' }} />
      <Grid container spacing={3} sx={{ flexGrow: 1, marginTop: "50px" }}>
        <Grid item xs={12} md={8}>
          {cart.map((item) => (
            <Card
              key={item._id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 2,
                marginBottom: 2,
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                borderRadius: 2,
                position: 'relative',
                backgroundColor: '#f5f5f5',
              }}
            >
              <CardMedia
                component="img"
                alt={item.productName}
                // image={item.images && item.images.length > 0 ? item.images[0] : '/placeholder.png'}
                src={`http://localhost:8000/${item.images[0]?.replace(/\\/g, '/')}`}
                sx={{ width: 120, height: 120, objectFit: 'contain', borderRadius: 2 }}
              />
              <CardContent sx={{ flex: 1, paddingLeft: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {item.productName}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  Price: {item.productSubcategory?.price} PKR
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  Quantity: {item.quantity}
                </Typography>
              </CardContent>
              <IconButton
                sx={{
                  position: 'absolute',
                  right: 10,
                  top: 10,
                  color: '#ff0000',
                  '&:hover': {
                    color: '#d00000',
                  },
                }}
                onClick={() => handleRemoveItem(item._id)}
              >
                <CloseIcon />
              </IconButton>
            </Card>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ padding: 5, border: '2px solid #ccc', borderRadius: '4px', backgroundColor: '#fafafa' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Cart Summary
            </Typography>
            <Divider sx={{ marginY: 5 }} />
            <Typography variant="body1" sx={{ fontWeight: "500", fontSize: "20px", marginLeft: "10px" }}>
              Total Items: {cart.length} (Tot-Quantity: {cart.reduce((total, item) => total + item.quantity, 0)})
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "500", fontSize: "20px", marginLeft: "10px" }}>
              Subtotal: {getSubtotal()} PKR
            </Typography>
            <Divider sx={{ marginY: 5 }} />
            <Button
              variant="contained"
              fullWidth
              sx={{ marginTop: 2, backgroundColor: '#007bff', color: '#fff', '&:hover': { backgroundColor: '#0056b3' } }}
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
