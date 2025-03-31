import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, List, ListItem, ListItemText, Divider, Avatar, Chip, Collapse, IconButton, Button } from '@mui/material';
import { AccountCircle, ShoppingCart, Favorite, ExpandMore, ExpandLess, Edit, Delete, AddShoppingCart } from '@mui/icons-material';

const Profile = () => {
  // Mock user data
  const user = {
    userName: 'john_doe',
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    DOB: '1993-05-12',
    address: '123 Main Street, Skardu',
    role: ['user'],
  };

  // Mock order details
  const orders = [
    { orderId: '12345', itemName: 'Running Shoes', date: '2024-10-10', price: '5000 PKR' },
    { orderId: '67890', itemName: 'Sneakers', date: '2024-09-15', price: '3000 PKR' },
  ];

  // Mock wishlist details
  const wishlist = [
    { itemId: '54321', itemName: 'Sports Shoes', price: '4500 PKR' },
    { itemId: '98765', itemName: 'Leather Boots', price: '7500 PKR' },
  ];

  // State to toggle visibility of orders and wishlist
  const [showOrders, setShowOrders] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  // Toggle functions
  const toggleOrders = () => setShowOrders(!showOrders);
  const toggleWishlist = () => setShowWishlist(!showWishlist);

  return (
    <Box sx={{ p: 4, bgcolor: '#f9f9fc', minHeight: '100vh' }}>
      <Grid container spacing={4}>

        {/* Left: User Profile */}
        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, textAlign: 'center', borderRadius: '12px', bgcolor: '#ffffff', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.02)' } }}>
            <Avatar sx={{ bgcolor: '#1976d2', width: 120, height: 120, margin: 'auto' }}>
              <AccountCircle sx={{ fontSize: 90 }} />
            </Avatar>
            <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold', color: '#333' }}>
              {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              @{user.userName}
            </Typography>
            <Chip label={user.role.join(', ')} color="primary" sx={{ mt: 2, fontSize: '1rem', borderRadius: '5px' }} />
            <Button
              variant="outlined"
              color="primary"
              startIcon={<Edit />}
              sx={{ mt: 3 }}
              onClick={() => alert('Edit Profile Clicked')}
            >
              Edit Profile
            </Button>
            <Divider sx={{ my: 3 }} />
            <List>
              <ListItem>
                <ListItemText primary="Email" secondary={user.email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date of Birth" secondary={user.DOB} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Age" secondary={user.age} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={user.address} />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Right: Orders and Wishlist */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>

            {/* Order History */}
            <Grid item xs={12}>
              <Paper
                elevation={10}
                sx={{
                  p: 3,
                  borderRadius: '12px',
                  bgcolor: '#ffffff',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.02)' },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', color: '#333' }}>
                    <ShoppingCart sx={{ mr: 1, color: '#1976d2' }} /> Order History
                  </Typography>
                  <IconButton onClick={toggleOrders}>
                    {showOrders ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Collapse in={showOrders}>
                  <List>
                    {orders.map((order) => (
                      <ListItem key={order.orderId} sx={{ transition: 'all 0.3s', '&:hover': { bgcolor: '#f4f4f9' } }}>
                        <ListItemText
                          primary={`Order #${order.orderId}`}
                          secondary={`Item: ${order.itemName} | Date: ${order.date} | Price: ${order.price}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </Paper>
            </Grid>

            {/* Wishlist */}
            <Grid item xs={12}>
              <Paper
                elevation={10}
                sx={{
                  p: 3,
                  borderRadius: '12px',
                  bgcolor: '#ffffff',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.02)' },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', color: '#333' }}>
                    <Favorite sx={{ mr: 1, color: '#e57373' }} /> Wishlist
                  </Typography>
                  <IconButton onClick={toggleWishlist}>
                    {showWishlist ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Collapse in={showWishlist}>
                  <List>
                    {wishlist.map((item) => (
                      <ListItem
                        key={item.itemId}
                        sx={{ transition: 'all 0.3s', '&:hover': { bgcolor: '#f4f4f9' } }}
                        secondaryAction={
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton color="primary" onClick={() => alert(`Moved ${item.itemName} to cart`)}>
                              <AddShoppingCart />
                            </IconButton>
                            <IconButton color="secondary" onClick={() => alert(`Deleted ${item.itemName}`)}>
                              <Delete />
                            </IconButton>
                          </Box>
                        }
                      >
                        <ListItemText
                          primary={item.itemName}
                          secondary={`Price: ${item.price}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
