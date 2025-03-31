import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Avatar, Button, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import { useAuthStore } from '../context/AuthContext';
import ProfileEditDialog from './ProfileEditDialog'; // Importing the Profile Edit Dialog

const ProfileSection = () => {
  const { user, setUser } = useAuthStore();  // Assume you have a context or state management for the user
  const [openDialog, setOpenDialog] = useState(false); // State to handle dialog visibility

  useEffect(() => {
    // Fetch the updated user data if necessary
    // You can implement a refetch here when the user data is updated externally.
  }, [user]);

  const handleEditProfile = () => {
    setOpenDialog(true); // Open the dialog when editing the profile
  };

  return (
    <Box sx={{ width: '100%', mx: 'auto' }}>
      <Card sx={{ p: 3, borderRadius: 3, boxShadow: 'none', backgroundColor: 'transparent' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar
            alt="User Profile"
            src={`http://localhost:8000/${user.image?.[0]?.replace(/\\/g, '/')}`} // Assuming user has an image field
            sx={{ width: 100, height: 100, mr: 3, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}
          />
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>{user.userName}</Typography>
            <Typography variant="body1" color="text.secondary">{user.email}</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <CardContent sx={{ padding: 0 }}>
          <Typography variant="h6" sx={{ fontWeight: 'medium', mb: 2 }}>Personal Information</Typography>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ color: '#1abc9c', mr: 1 }} />
              <Typography variant="body1"><strong>Email:</strong>{user.email}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ color: '#1abc9c', mr: 1 }} />
              <Typography variant="body1"><strong>Phone:</strong>{user.phoneNumber}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <HomeIcon sx={{ color: '#1abc9c', mr: 1 }} />
              <Typography variant="body1"><strong>Address:</strong>{user.address} </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Button
            variant="contained"
            startIcon={<EditIcon />}
            sx={{
              backgroundColor: '#1abc9c',
              '&:hover': { backgroundColor: '#16a085', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' },
              py: 1,
              px: 4,
              fontWeight: 'bold',
              borderRadius: '20px',
              textTransform: 'none',
              mt: 2,
            }}
            onClick={handleEditProfile}
          >
            Edit Profile
          </Button>
        </CardContent>
      </Card>

      {/* Profile Edit Dialog */}
      <ProfileEditDialog open={openDialog} setOpen={setOpenDialog} user={user} setUser={setUser} />
    </Box>
  );
};

export default ProfileSection;