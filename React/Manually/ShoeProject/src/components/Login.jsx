// src/components/Login.js
import React, { useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography, TextField } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Clear the input fields on component mount
    setEmail('');
    setPassword('');

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: 'YOUR_APP_ID', // Replace with your Facebook App ID
        cookie: true,
        xfbml: true,
        version: 'v12.0',
      });
    };
  }, []);

  const handleFBLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          console.log('Welcome! Fetching your information.... ');
          window.FB.api('/me', (response) => {
            console.log('Good to see you, ' + response.name + '.');
            // Handle login success (e.g., save user data, redirect, etc.)
            navigate('/'); // Redirect to home or dashboard
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      },
      { scope: 'public_profile,email' }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle standard login logic here (e.g., authentication API call)
    console.log('Email:', email, 'Password:', password);

    // Simulate successful login (you should handle API call response here)
    const isLoginSuccessful = true; // Replace with actual login logic

    if (isLoginSuccessful) {
      // Reset fields after successful submission
      setEmail('');
      setPassword('');
      navigate('/'); // Redirect to home or dashboard
    }
  };

  return (
    <Box sx={{ padding: 2, textAlign: 'center', maxWidth: 400, margin: 'auto', marginTop: 15 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Login
      </Typography>
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
          sx={{ marginBottom: 3 }} // Increased marginBottom for spacing
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{ marginBottom: 3 }} // Increased marginBottom for spacing
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
      <Button
        variant="contained"
        color="primary"
        onClick={handleFBLogin}
        fullWidth
        sx={{ marginBottom: 2 }} // Margin for spacing
      >
        Login with Facebook
      </Button>
      <Typography variant="body2" sx={{ marginTop: 3 }}>
        Don't have an account?{' '}
        <span onClick={() => navigate('/signup')} style={{ cursor: 'pointer', color: 'blue' }}>
          Sign up
        </span>
      </Typography>
    </Box>
  );
};

export default Login;
