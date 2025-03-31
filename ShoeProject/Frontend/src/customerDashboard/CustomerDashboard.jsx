import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  Paper,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ProfileSection from './ProfileSection';
import WishlistSection from './WishlistSection';
import image from '../../public/image/personal/my.png';
import { useAuthStore } from '../context/AuthContext';
import OrderHistory from './OrdersSection';

const CustomerDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('Profile');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const { logout,user } = useAuthStore();
// console.log("user detail is:",user.image)
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'Profile':
        return <ProfileSection />;
      case 'Orders':
        return <OrderHistory />;
      case 'Wishlist':
        return <WishlistSection />;
      case 'Logout':
        return logout(navigate);
      default:
        return <ProfileSection />;
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f6f9' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: isSidebarOpen ? 240 : 60,
          backgroundColor: '#2c3e50',
          color: '#ecf0f1',
          transition: 'width 0.3s',
          overflow: 'hidden',
          pt: 3,
        }}
      >
        {/* Toggle Icon */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 0.5 }}>
          <IconButton onClick={handleToggleSidebar} sx={{ color: '#fff ' ,fontSize:"20px" ,paddingTop:"50px"}}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* User Info */}
        {isSidebarOpen && (
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Avatar sx={{ width: 80, height: 80, margin: 'auto', mb: 2 }} src={`http://localhost:8000/${user.image?.[0]?.replace(/\\/g, '/')}`} />
            <Typography variant="h6">Basit Ali</Typography>
          </Box>
        )}

        {/* Navigation List */}
        <List>
          <ListItem
            button
            onClick={() => setSelectedSection('Profile')}
            sx={{ ...navItemStyles(selectedSection === 'Profile'), cursor: 'pointer' }}
          >
            <AccountCircleIcon sx={{ mr: isSidebarOpen ? 2 : 0 }} />
            {isSidebarOpen && <ListItemText primary="Profile" />}
          </ListItem>
          <ListItem
            button
            onClick={() => setSelectedSection('Orders')}
            sx={{ ...navItemStyles(selectedSection === 'Orders'), cursor: 'pointer' }}
          >
            <ShoppingCartIcon sx={{ mr: isSidebarOpen ? 2 : 0 }} />
            {isSidebarOpen && <ListItemText primary="Orders" />}
          </ListItem>
          <ListItem
            button
            onClick={() => setSelectedSection('Wishlist')}
            sx={{ ...navItemStyles(selectedSection === 'Wishlist'), cursor: 'pointer' }}
          >
            <FavoriteIcon sx={{ mr: isSidebarOpen ? 2 : 0 }} />
            {isSidebarOpen && <ListItemText primary="Wishlist" />}
          </ListItem>
        
          <Divider sx={{ my: 2, backgroundColor: '#ecf0f1' }} />
          <ListItem
            button
            onClick={() => setSelectedSection('Logout')}
            sx={{ ...navItemStyles(selectedSection === 'Logout'), cursor: 'pointer' }}
          >
            <ExitToAppIcon sx={{ mr: isSidebarOpen ? 2 : 0 }} />
            {isSidebarOpen && <ListItemText primary="Logout" />}
          </ListItem>
        </List>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          transition: 'margin-left 0.3s',
          ml: isSidebarOpen ? 0 : 6,// Adjust content margin when sidebar is closed
          position:"relative"
        }}
      >
        <Paper elevation={3} sx={{ p: 1, borderRadius: 3, backgroundColor: '#ffffff',position:"relative",top:"40px" }}>
          {renderSection()}
        </Paper>
      </Box>
    </Box>
  );
};

// Function to dynamically style the active section
const navItemStyles = (isActive) => ({
  padding: '12px 24px',
  backgroundColor: isActive ? '#1abc9c' : 'transparent',
  color: isActive ? '#ffffff' : '#ecf0f1',
  '&:hover': {
    backgroundColor: '#16a085',
  },
});

export default CustomerDashboard;
