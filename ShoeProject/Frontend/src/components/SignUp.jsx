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
import { Person, Email, Phone, LocationCity, Visibility, VisibilityOff, CameraAlt } from '@mui/icons-material'; // Import icons
import axios from 'axios'; // Import Axios

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null); // State to store image file
  const [imageName, setImageName] = useState(''); // State to store image file name

  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Clear the input fields on component mount
    setName('');
    setEmail('');
    setPassword('');
    setPhoneNumber('');
    setAddress('');
    setImage(null); // Reset image state
    setImageName(''); // Reset image name state
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Set the selected image file
      setImageName(file.name); // Set the image name to display
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('userName', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phoneNumber', phoneNumber);
    formData.append('address', address);
    if (image) {
      formData.append('image', image); // Append image if available
    }

    try {
      const response = await axios.post('http://localhost:8000/api/customer/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the header for form-data
        },
      });

      if (response.status === 201) {
        console.log('Registration successful:', response.data);
        setName('');
        setEmail('');
        setPassword('');
        setAddress('');
        setPhoneNumber('');
        setImage(null); // Reset image
        setImageName(''); // Reset image name
        navigate('/login'); // Redirect to login page after successful signup
      }
    } catch (error) {
      setErrorMessage('Failed to register. Please try again.'); // Set error message
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f5f5f5', // Light grey background color
      }}
      mt={4}  
    >
      <Card sx={{ maxWidth: 400, boxShadow: 3, borderRadius: 3 }}>
        <CardHeader title="Create Account" titleTypographyProps={{ align: 'center' }} />
        <CardContent>
          {errorMessage && (
            <Typography color="error" sx={{ marginBottom: 2, textAlign: 'center' }}>
              {errorMessage}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
              sx={{ marginBottom: 3 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Person />
                  </InputAdornment>
                ),
              }}
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
              placeholder="Enter your email"
              sx={{ marginBottom: 3 }}
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
              type={showPassword ? 'text' : 'password'}
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              sx={{ marginBottom: 3 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              margin="normal"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              placeholder="Enter your Phone Number"
              sx={{ marginBottom: 3 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Phone />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              margin="normal"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="Enter your Address"
              sx={{ marginBottom: 3 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LocationCity />
                  </InputAdornment>
                ),
              }}
            />

            {/* File upload field for image */}
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{ marginBottom: 3 }}
            >
              Upload Image
              <input
                type="file"
                hidden
                onChange={handleImageChange}
                accept="image/*" // Limit to image files
              />
            </Button>

            {/* Display image file name */}
            {imageName && (
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                {imageName}
              </Typography>
            )}

            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ marginBottom: 2 }}
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
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;
