import React, { useState } from 'react';
import { TextField, Button, Box, MenuItem, FormControlLabel, Checkbox, RadioGroup, Radio, FormLabel, FormControl, InputLabel, Select, InputAdornment } from '@mui/material';
import { AccountCircle, Email, Phone, CalendarToday, Lock, School, Home } from '@mui/icons-material';

const StudentRegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    gender: '',
    course: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '500px',
        mx: 'auto',
        mt: 4,
        p: 4,
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <TextField
        label="First Name"
        placeholder="Enter your first name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          )
        }}
      />
      <TextField
        label="Aakhiri mintaqpo"
        placeholder="Enter your last name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Email"
        placeholder="Enter your email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <Email />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Phone"
        placeholder="Enter your phone number"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Phone />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Date of Birth"
        placeholder="Enter your date of birth"
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CalendarToday />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Address"
        placeholder="Enter your address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Home />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="City"
        placeholder="Enter your city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
      />
      <TextField
        label="State"
        placeholder="Enter your state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
      />
      <TextField
        label="Zip Code"
        placeholder="Enter your zip code"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
      />
      <TextField
        label="Country"
        placeholder="Enter your country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
      />
      <FormControl component="fieldset" margin="normal" required fullWidth>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup name="gender" value={formData.gender} onChange={handleChange} row>
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel>Course</InputLabel>
        <Select name="course" value={formData.course} onChange={handleChange}>
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="science">Science</MenuItem>
          <MenuItem value="commerce">Commerce</MenuItem>
          <MenuItem value="arts">Arts</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Password"
        placeholder="Enter your password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Confirm Password"
        placeholder="Confirm your password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2 }}>Register</Button>
    </Box>
  );
};

export default StudentRegistrationForm;
