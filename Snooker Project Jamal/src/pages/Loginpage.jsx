import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Paper, Container, InputAdornment, IconButton } from '@mui/material';
import { AccountCircle, Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material'; // Import icons

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error messages

    // Validate Username (must not be only numbers)
    if (!username || !isNaN(username)) {
      setErrorMessage('Username must be a string and cannot be only numbers');
      return;
    }

    // Validate Email (must be in proper email format)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Validate Password (must be at least 5 characters long)
    if (!password || password.length < 5) {
      setErrorMessage('Password must be at least 5 characters long');
      return;
    }

    // Save user details in localStorage for 10 minutes
    const userDetails = { username, email, password };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Set a timer to remove the user details from localStorage after 10 minutes
    setTimeout(() => {
      localStorage.removeItem('userDetails');
      navigate('/')
    }, 600000); // 600000 ms = 10 minutes

    // Redirect the user to the landing page after successful login
    navigate('/landing');
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <Container maxWidth="xs" sx={{ paddingTop: '100px' }}>
      <Paper
        sx={{
          padding: 4,
          maxWidth: 400,
          margin: 'auto',
          borderRadius: '16px', // Slightly rounded corners for a modern look
          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)', // Subtle deep shadow
          backgroundColor: '#fff', // Cleaner background
          animation: 'fadeIn 1s ease-in-out', // Add fade-in animation
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600, // Slightly lighter font weight
            textAlign: 'center',
            marginBottom: 3,
            color: '#00796b', // Teal for the title
            fontFamily: 'Roboto, sans-serif',
            letterSpacing: '1px', // Add some space between letters for a modern look
          }}
        >
           Login  to Explore JPC
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            required
            variant="outlined"
            size="small"
            sx={{
              marginBottom: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '25px', // Rounded input fields
              },
            }}
            autoComplete="off" // Disable browser autofill
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle sx={{ color: '#00796b' }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            variant="outlined"
            size="small"
            sx={{
              marginBottom: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '25px', // Rounded input fields
              },
            }}
            autoComplete="off" // Disable browser autofill
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: '#00796b' }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Password"
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            variant="outlined"
            size="small"
            sx={{
              marginBottom: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: '25px', // Rounded input fields
              },
            }}
            autoComplete="off" // Disable browser autofill
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock sx={{ color: '#00796b' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                    {passwordVisible ? (
                      <VisibilityOff sx={{ color: '#00796b' }} />
                    ) : (
                      <Visibility sx={{ color: '#00796b' }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {errorMessage && (
            <Typography
              sx={{
                color: 'error.main',
                textAlign: 'center',
                fontSize: '0.875rem',
                marginBottom: 2,
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              {errorMessage}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#00796b',
              color: '#fff',
              '&:hover': { backgroundColor: '#004d40' },
              padding: '12px 20px',
              borderRadius: '25px', // Rounded button
              fontWeight: 'bold',
              letterSpacing: '0.5px',
              textTransform: 'none', // Prevent uppercase transformation
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', // Subtle shadow for button
              transition: 'all 0.3s ease', // Smooth hover animation
              '&:hover': {
                transform: 'scale(1.05)', // Slightly enlarge on hover
              },
            }}
            size="large"
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
