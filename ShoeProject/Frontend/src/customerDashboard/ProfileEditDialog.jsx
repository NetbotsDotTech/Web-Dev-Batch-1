import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, CircularProgress } from '@mui/material';
import axios from 'axios';

const ProfileEditDialog = ({ open, setOpen, user, setUser }) => {
  const [updatedUser, setUpdatedUser] = useState({ ...user });
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    setOpen(false); // Close the dialog
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveUpdate = async () => {
    setIsLoading(true);
    try {
      const response = await axios.put(`http://localhost:8000/api/customer/update/${user._id}`, updatedUser);
      setUser(response.data.
        updatedUser
        ); // Update the global user state with the updated user data
      console.log('User updated successfully', response.data.updatedUser);
      setIsLoading(false);
      handleClose();
    } catch (error) {
      setIsLoading(false);
      console.error('Error updating user:', error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          name="userName"
          value={updatedUser.userName}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          name="email"
          value={updatedUser.email}
          onChange={handleInputChange}
          margin="normal"
          type="email"
        />
        <TextField
          fullWidth
          label="Phone Number"
          variant="outlined"
          name="phoneNumber"
          value={updatedUser.phoneNumber}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Address"
          variant="outlined"
          name="address"
          value={updatedUser.address}
          onChange={handleInputChange}
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleSaveUpdate}
          color="primary"
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : 'Save Changes'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileEditDialog;
