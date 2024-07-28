import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, Link, IconButton, InputAdornment } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px', backgroundColor: '#f0f2f5', padding: '30px', borderRadius: '10px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box mb={1}>
          <Button type="submit" variant="contained" color="primary" fullWidth >
            Login
          </Button>
        </Box>
      </form>
      <Typography variant="body2">
        <Link href="https://www.google.com" underline="none">
          Forgot Password?
        </Link>
      </Typography>
      <Typography variant="body2" mt={2}>
        <Link href="#" underline="none">
          Singin UP
        </Link>
      </Typography>
    </Container>
  );
};

export default LoginForm;
