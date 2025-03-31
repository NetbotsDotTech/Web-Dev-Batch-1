// src/components/Login.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  CardHeader,
  InputAdornment,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {useAuthStore}  from '../context/AuthContext';
import { Email,  Visibility, VisibilityOff } from '@mui/icons-material'; // Import icons
import { useProductStore } from '../context/ProductContext';

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [errorMessage, setErrorMessage] = useState('');
  

  useEffect(() => {
    // Clear the input fields on component mount
    setEmail('');
    setPassword('');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/customer/login', {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success('Login successful!');
        // Reset fields after successful submission
        login(response.data);
        setEmail('');
        setPassword('');
        // Delay navigation to allow the toast to display
        setTimeout(() => {
          navigate(`/service`); // Redirect to home or dashboard after delay
        }, 1500); // 1.5-second delay
      }
    } catch (error) {
      // console.error('Login failed:', error);
      setErrorMessage('Invalid email or password. Please try again.');
      toast.error('Login failed: Invalid email or password.');
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5', // Apply a solid background color
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
      mt={4}
    >
      <Card sx={{ maxWidth: 400, boxShadow: 3 }}>
        <CardHeader title="Welcome Back" titleTypographyProps={{ align: 'center' }} />
        <CardContent>
          <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
            Please login to continue
          </Typography>
          {errorMessage && (
            <Typography color="error" sx={{ marginBottom: 2, textAlign: 'center' }}>
              {errorMessage}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              sx={{ marginBottom: 3 }} // Increased marginBottom for spacing
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'} // Toggle password visibility
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              sx={{ marginBottom: 3 }} // Increased marginBottom for spacing
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ marginBottom: 2 }} // Margin for spacing
            >
              Login
            </Button>
          </form>
          <Typography variant="body2" sx={{ marginTop: 3, textAlign: 'center' }}>
            Don't have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              style={{ cursor: 'pointer', color: 'blue' }}
            >
              Sign up
            </span>
          </Typography>
        </CardContent>
      </Card>

      {/* Toastify Container */}
      <ToastContainer />
    </Box>
  );
};

export default Login;
