import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Tooltip,
  Divider,
  Box,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Inventory as InventoryIcon,
  Settings as SettingsIcon,
  ShoppingCart as ShoppingCartIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = ({ isCollapsed, toggleCollapse, isDrawerOpen, toggleDrawer }) => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Customers', icon: <PeopleIcon />, path: '/users' },
    { text: 'Products', icon: <InventoryIcon />, path: '/products' },
    { text: 'Orders', icon: <ShoppingCartIcon />, path: '/orders' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
      sx={{
        '& .MuiDrawer-paper': {
          width: isCollapsed ? 90 : 200,
          backgroundColor: '#1976d2',  // Matching blue color
          color: '#fff',
          border: 'none',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          height: '100vh',
          transition: 'width 0.3s',
          opacity: 1,
        },
      }}
    >
      <Box
        sx={{
          padding: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          justifyContent: 'space-between',
        }}
      >
        {/* Header section with Avatar and Menu Icon */}
        <Box>
          <Box display="flex" alignItems="center" mb={2}>
            {!isCollapsed && <Avatar src="path_to_your_image.jpg" sx={{ marginRight: 1 }} />}
            {!isCollapsed && <Typography variant="h6" sx={{ fontWeight: 'bold' }}>SalesMen</Typography>}
            <IconButton onClick={toggleCollapse} sx={{ marginLeft: 'auto' }}>
              <MenuIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Box>
          <Divider sx={{ marginBottom: 1, backgroundColor: '#fff' }} />

          {/* Menu List */}
          <List sx={{ mt: 5 }}>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem
                  button
                  component={Link}
                  to={item.path}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#ffffff1f',
                    },
                    backgroundColor: item.isActive ? '#ffffff1f' : 'transparent',
                    m: 1,
                  }}
                >
                  <ListItemIcon sx={{ color: '#fff' }}>
                    <Tooltip title={item.text} arrow>
                      <Box sx={{ color: '#fff' }}>{item.icon}</Box>
                    </Tooltip>
                  </ListItemIcon>
                  {!isCollapsed && <ListItemText primary={item.text} />}
                </ListItem>
                <Divider sx={{ backgroundColor: '#fff' }} />
              </React.Fragment>
            ))}
          </List>
        </Box>

        {/* Logout Icon at the Bottom */}
        <Box>
          <ListItem
            button
            component={Link}
            to="/logout"
            sx={{
              '&:hover': {
                backgroundColor: '#ffffff1f',
              },
              mb: 4,
            }}
          >
            <ListItemIcon sx={{ color: '#fff' }}>
              <Tooltip title="Logout" arrow>
                <LogoutIcon />
              </Tooltip>
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Logout" />}
          </ListItem>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
