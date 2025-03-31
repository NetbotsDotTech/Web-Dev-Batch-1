import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Container, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  
  const navigate = useNavigate(); // Hook to navigate to another page

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate an API call (replace with your actual submission logic)
    setTimeout(() => {
      setIsLoading(false);
      setSubmissionSuccess(true);
      setOpenDialog(true); // Open the modal

      // Clear form fields after submission
      setName('');
      setEmail('');
      setMessage('');

      // Close the dialog and redirect to Home page after 2 seconds
      setTimeout(() => {
        setOpenDialog(false); // Close the modal
        navigate('/landing'); // Redirect to Home page
      }, 2000);

      setTimeout(() => setSubmissionSuccess(null), 3000); // Hide success message after 3 seconds
    }, 2000);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);  // Close the modal
    navigate('/');  // Navigate to the Home page when the close button is clicked
  };

  return (
    <Box sx={{ 
      backgroundColor: '#f4f4f4', 
      minHeight: '100vh', // Full height of the screen
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: 4,
      marginTop: 4
    }}>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', padding: 4, backgroundColor: '#fff', borderRadius: '8px', boxShadow: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 3, color: '#333' }}>
            Contact Us
          </Typography>

          {submissionSuccess === null && (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        backgroundColor: '#fafafa',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                    type="email"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        backgroundColor: '#fafafa',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    multiline
                    rows={4}
                    fullWidth
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        backgroundColor: '#fafafa',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="#17a589"
                    sx={{
                      borderRadius: '50px',
                      padding: '12px 30px',
                      textTransform: 'none',
                      fontWeight: 600,
                      boxShadow: 4,
                      '&:hover': {
                        backgroundColor: '#17a589',
                      },
                    }}
                  >
                    {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}

          {submissionSuccess && (
            <Typography
              variant="h6"
              sx={{
                color: '#28a745',
                marginTop: 3,
                fontWeight: 600,
              }}
            >
              Thank you for contacting us! We will get back to you shortly.
            </Typography>
          )}
        </Box>
      </Container>

      {/* Modal/Dialog for successful submission */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '15px',
            padding: '20px',
            boxShadow: 5,
          }
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>
          Message Sent!
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" color="textSecondary">
            Thank you for reaching out! We will get back to you soon.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={handleCloseDialog} color="primary" variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactPage;
