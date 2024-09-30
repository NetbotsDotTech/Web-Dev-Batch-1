// src/components/SignUp.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography, TextField } from '@mui/material';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Clear the input fields on component mount
    setName('');
    setEmail('');
    setPassword('');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle standard signup logic here (e.g., API call to create a new user)
    console.log('Name:', name, 'Email:', email, 'Password:', password);

    // Reset fields after successful submission
    setName('');
    setEmail('');
    setPassword('');

    // Redirect to login or home page after successful signup
    navigate('/'); // Change this to your desired route after signup
  };

  return (
    <Box sx={{ padding: 2, textAlign: 'center', maxWidth: 400, margin: 'auto', marginTop: 14 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          sx={{ marginBottom: 3 }} // Increased marginBottom for spacing
        />
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
          Sign Up
        </Button>
      </form>
      <Typography variant="body2" sx={{ marginTop: 3 }}>
        Already have an account?{' '}
        <span onClick={() => navigate('/login')} style={{ cursor: 'pointer', color: 'blue' }}>
          Log in
        </span>
      </Typography>
    </Box>
  );
};

export default SignUp;
