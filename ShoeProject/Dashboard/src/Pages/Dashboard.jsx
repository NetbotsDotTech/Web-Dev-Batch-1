import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';
import UserPage from './UserPage';
import OrdersPage from './OrdersPage';
import SettingsPage from './SettingsPage';
import Analytics from '../components/Analytics';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './ProductPage';

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(prev => !prev);
  };

  return (
    <Router
      future={{
        v7_startTransition: true,      // Opt-in to startTransition feature
        v7_relativeSplatPath: true,    // Opt-in to relative splat path feature
      }}
    >
      <Box display="flex">
        <Sidebar isCollapsed={isCollapsed} isDrawerOpen={isDrawerOpen} toggleCollapse={toggleSidebar} toggleDrawer={toggleDrawer} />
        <Box sx={{ flexGrow: 1, width: isCollapsed ? 'calc(100% - 90px)' : 'calc(100% - 250px)', transition: 'width 0.3s' }}>
          <Header isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default Dashboard;
