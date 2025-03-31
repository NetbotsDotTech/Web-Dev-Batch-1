import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Replace with real authentication logic
    if (username === 'admin' && password === 'password') {
      onLoginSuccess();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection="column">
      <Typography variant="h4" gutterBottom>
        Admin Login
      </Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleLogin} sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
