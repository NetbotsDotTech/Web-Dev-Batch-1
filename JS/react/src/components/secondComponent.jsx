import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function SecondComponent() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { email, password } = formData;
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <React.Fragment>
      <h1>Sign In</h1>
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        type="email"
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Password"
        name="password"
        value={formData.password}
        type="password"
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      <div>
        I don't have an account?
  {/* <Link to="/login">SignUp</Link> */}
      </div>
    </React.Fragment>
  );
}
