import React from 'react';
import {createTheme, TextField, Button, Typography, Link, Box, Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

export const Login_Form = () => {
  const navigate=useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 3,
            borderRadius: 2,
            boxShadow: 10,
            textAlign: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: '#FFC107' }}>
            Welcome Back
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Please sign-in to continue!
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Link href="#" variant="body2" sx={{ display: 'block', textAlign: 'right', mb: 2 }}>
              Forgot your password?
            </Link>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#FFC107', '&:hover': { backgroundColor: '#FFA000' } }}
            >
              Signin
            </Button>
            <Typography variant="body2" color="textSecondary">
               Don't have an account?
               <Button 
               onClick={()=>navigate("/register")}> <Link to="/register">Register</Link>
              </Button>
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login_Form;






// import React, { useState } from "react";
// import "./style.css";
// import { AppBar, Toolbar, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// export const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     console.log("Logging in with:", { username, password }
//     );
//     alert(`Username: ${username}\nPassword: ${password}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-container">
//         <h1>Login</h1>
//         <div>
//           <label htmlFor="email">Email Address : </label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="u-pass">Password : </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//         <Typography variant="body2" color="textSecondary">
//               Already have an account? <Link href="/login">Login</Link>
//             </Typography>
//       </div>
//     </form>
//   );
// };
// export default Login;
