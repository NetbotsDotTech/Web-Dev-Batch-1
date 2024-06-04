import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { IoMdSend } from "react-icons/io";


export default function FirstComponent() {





  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassowrd] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [dob, setDob] = useState();
  return (
    <React.Fragment>
      <h1>Sign Up</h1>
      <Box>
        <TextField
          label="Name"
          fullWidth
          value={name}
          // variant="outlined"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          variant="filled"
          fullWidth
          label="Email"
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          variant="filled"
          fullWidth
          label="Phone Number"
          value={phoneNumber}
          type="number"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <TextField
          required
          variant="filled"
          fullWidth
          label="Date of Birth"
          value={dob}
          type="Date"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
        <TextField
          label="Password"
          fullWidth
          variant="standard"
          value={password}
          type="password"
          onChange={(e) => {
            setPassowrd(e.target.value);
          }}
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Like"
          />
          <FormControlLabel required control={<Checkbox />} label="Share" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>

        <Button
          variant="outlined"
          color="warning"
          size="large"
          endIcon={<IoMdSend />}
          onClick={() => {
            alert(`Name : ${name}  
          Email: ${email}
          Password : ${password}
          `);
          }}
        >
          Submit
        </Button>
        <IconButton
          onClick={() => {
            alert(`Name : ${name}  
        Email: ${email}
        Password : ${password}
        `);
          }}
        >
          <IoMdSend />
        </IconButton>
      </Box>
    </React.Fragment>
  );
}
