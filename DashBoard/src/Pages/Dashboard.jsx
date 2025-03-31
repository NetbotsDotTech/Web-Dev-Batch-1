import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';
import UserPage from './UserPage';
import ContentPage from './ContentPage';
import OrdersPage from './OrdersPage';
import SettingsPage from './SettingsPage';
import Analytics from '../components/Analytics';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(prev => !prev);
  };

  return (
    <Router>
      <Box display="flex">
        <Sidebar isCollapsed={isCollapsed} isDrawerOpen={isDrawerOpen} toggleCollapse={toggleSidebar} toggleDrawer={toggleDrawer} />
        <Box sx={{ flexGrow: 1, width: isCollapsed ? 'calc(100% - 90px)' : 'calc(100% - 250px)', transition: 'width 0.3s' }}>
          <Header isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default Dashboard;
