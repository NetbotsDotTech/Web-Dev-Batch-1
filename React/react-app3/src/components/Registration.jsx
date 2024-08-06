import React, { useState } from 'react';
import { TextField, Button, Typography, Box, MenuItem, Container, Paper, InputAdornment } from '@mui/material';
import { Email as EmailIcon, Lock as LockIcon, Phone as PhoneIcon, Home as HomeIcon, DateRange as DateRangeIcon, Person as PersonIcon, Work as WorkIcon, Info as InfoIcon } from '@mui/icons-material';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    dob: '',
    gender: '',
    occupation: '',
    bio: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is not valid.";
    if (!formData.password || formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters.";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) tempErrors.phone = "Phone number is not valid.";
    if (!formData.address) tempErrors.address = "Address is required.";
    if (!formData.dob) tempErrors.dob = "Date of birth is required.";
    if (!formData.gender) tempErrors.gender = "Gender is required.";
    if (!formData.occupation) tempErrors.occupation = "Occupation is required.";
    if (!formData.bio) tempErrors.bio = "Biography is required.";

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      alert(JSON.stringify(formData));
      setFormData({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        dob: '',
        gender: '',
        occupation: '',
        bio: ''
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ padding: 3, width: '100%', mt: '30px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Registration
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="dense"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            margin="normal"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={!!errors.address}
            helperText={errors.address}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Date of Birth"
            variant="outlined"
            fullWidth
            margin="normal"
            name="dob"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.dob}
            onChange={handleChange}
            error={!!errors.dob}
            helperText={errors.dob}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Gender"
            variant="outlined"
            fullWidth
            margin="normal"
            select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            error={!!errors.gender}
            helperText={errors.gender}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>
          <TextField
            label="Occupation"
            variant="outlined"
            fullWidth
            margin="normal"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            error={!!errors.occupation}
            helperText={errors.occupation}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <WorkIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Biography"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            error={!!errors.bio}
            helperText={errors.bio}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InfoIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Registration;
