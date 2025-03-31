import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import Login from './Login';
import Register from './Register';
import LOGO from "../images/logo.png"
import ProductList from './Products';
import CounterApp from "./Counter"
import FormikForm from "./Formik/Index"
import DataTable from "./DataTable"
import SingleProductDetail from './SingleProductDetails';
function Menu() {
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Login', path: '/login' },
    { label: 'Register', path: '/register' },
    { label: 'Products', path: '/products' },
    { label: 'Counter App', path: '/counter-app' },
    { label: 'Stepper Form', path: '/form' },
    { label: 'Data Table', path: '/data-grid-table' },



  ];

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
        <img style={{width:"150px" , height:"autopx"}} src={LOGO}/>
          {menuItems.map((item) => (
            <Button  color="inherit" component={Link} to={item.path} key={item.path}>
              {item.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/counter-app" element={<CounterApp />} />
        <Route path="/form" element={<FormikForm />} />
        <Route path="/data-grid-table" element={<DataTable />} />
        <Route path="/product/:id" element={<SingleProductDetail />} />

      </Routes>
    </Router>
  );
}

export default Menu;
