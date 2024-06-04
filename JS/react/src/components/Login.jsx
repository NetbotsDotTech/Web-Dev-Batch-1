import { useState } from "react";
import { Grid, Box, TextField, Button, Link, Typography, Snackbar, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Importing Link from React Router

function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
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
    setFormData({ username: "", password: "" }); // Reset form fields
    setSnackbarOpen(true); // Open snackbar when form is submitted successfully
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%", // Full width
              maxWidth: 400, // Max width
              textAlign: "center",
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              Login
            </Typography>
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
              Login
            </Button>
            <Link
              component={RouterLink} // Using RouterLink instead of 'a' tag
              to="/register"
              variant="body2"
              sx={{ mt: 2, display: "block" }}
            >
              Don't have an account? Register
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar for notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Form submitted successfully!"
      />

      {/* Dialog box for displaying form data */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>User Details for Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="body1" gutterBottom>
              Username: {formData.username}
            </Typography>
            <Typography variant="body1">
              Password: {formData.password}
            </Typography>
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

export default LoginPage;
