import { useState } from 'react';
import { Grid, Box, TextField, Button, Snackbar, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography, Link as RouterLink } from '@mui/material';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDialogOpen(true);
    setSnackbarOpen(true); // Open Snackbar when form is submitted
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: '100%', // Full width
              maxWidth: 400, // Max width
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              Register
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Register
            </Button>
            <Link
              component={RouterLink}
              to="/login"
              variant="body2"
              sx={{ mt: 2, display: 'block' }}
            >
              Already have an account? Login
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar for displaying form data */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={`Form data submitted: `}
      />

      {/* Dialog box for displaying form data */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        maxWidth="xs"
      >
        <DialogTitle>User Details for Registration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {Object.keys(formData).map((key) => (
              <Typography key={key}>{`${key}: ${formData[key]}`}</Typography>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default RegisterPage;
