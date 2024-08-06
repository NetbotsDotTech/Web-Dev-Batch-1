
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';

import logo from './assets/logo.png'; // Import the logo image

function App() {
  return (
    <Router>
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Box component="img" src={logo} alt="Logo" sx={{ height: 50, mr: 2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/register">
            Register
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;







// import React from 'react';
// import Login from './components/Login';
// import Register from './components/Register';
// import {LoginForm} from './components/LoginForm';
// import "./components/style.css";
// import { CompB } from './components/CompB';
// import CompA from './components/CompA';
// import {Parent} from "./components/parent";
// import {Child1} from "./components/child1";
// import {Child2} from "./components/child2";
// import {Grandchild} from "./components/Grandchild";
// import {Login_Form} from './components/MUIform';
// import {RegistrationForm} from './components/MUIregister' 
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// const App = () => {
//   return (
//     <div>
//       {/* <Login />
//       <Register /> */}
//       {/* <CompA/>
//       <CompB/> */}
//       {/* <Parent/> */}
//       {/* <Child1/> */}
//      {/* < Child2/> */}
//       {/* <Grandchild/> */}
//       <LoginForm/>
//       {/* <Login_Form/> */}
//       {/* <RegistrationForm/> */}
    

// <Router>
// <NavBar />
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/login" element={<Login />} />
//   <Route path="/muiform" element={<MUIform />} />
// </Routes>
// </Router>

// </div>
//   );
// }

// export default App;

