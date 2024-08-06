import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Checkbox, FormControlLabel, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("User Registered:", user);
        // Add your submission logic here (e.g., API call)
    };
const navigate=useNavigate();
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop:1 ,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)'
                }}
            >
                <Typography component="h1" variant="h5">
                    Create Account
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Full Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={user.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Repeat your password"
                        type="password"
                        id="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="agree" color="primary" />}
                        label="I agree to all statements in Terms of service"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Typography variant="body2" align="center">
                        Have already an account?{' '}
                        <Button onClick={()=>navigate("/login")}>
                        <Link href="#" variant="body2" to="/Login" >
                            Login here
                        </Link>
                        </Button>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default Register;




// import React, { useState } from "react";
// import "./style.css";

// export const Register = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     age: 0,
//     email: "",
//     phone_no: 0,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//        ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Logging in with:", formData);
//     alert(
//       `Username: ${formData.username}\nAge: ${formData.age}\nEmail: ${formData.email}\nPhone_no: ${formData.phone_no}`
//     );
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-container">
//         <h1>Registration</h1>
//         <label htmlFor="username">Full Name : </label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         <label htmlFor="age">Age : </label>
//         <input
//           type="number"
//           id="age"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//         />
//         <label htmlFor="email">Gmail : </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <label htmlFor="phone_no">Phone Number : </label>
//         <input
//           type="number"
//           id="phone_no"
//           name="phone_no"
//           value={formData.phone_no}
//           onChange={handleChange}
//         />
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import "./style.css";

// export const Register = () => {

//   const [username, setUsername] = useState("");
//   const [age, setAge] = useState(0);
//   const [email, setEmail] = useState("");
//   const [phone_no, setPhone_no] = useState(0);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     console.log("Logging in with:", { username, password ,email,phone_no});
//     alert(`Username: ${username}\nAge: ${age}\nEmail: ${email}\nPhone_no: ${phone_no}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//     <div className="form-container">
//       <h1>Registration</h1>
//       <label htmlFor="fname">Full Name : </label>
//       <input type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)} />
//       <label htmlFor="age">Age : </label>
//       <input type="number"
//             id="age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}/>
//       <label htmlFor="u-email">Gmail : </label>
//       <input type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} />
//       <label htmlFor="phone-no">Phone Number : </label>
//       <input type="number"
//             id="phone_no"
//             value={phone_no}
//             onChange={(e) => setPhone_no(e.target.value)} />
//       <button type="submit">Submit</button>
//     </div>
//     </form>
//   );
// };
// export default Register;
