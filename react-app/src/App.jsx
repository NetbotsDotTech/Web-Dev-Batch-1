import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {TablePage} from './components/TablePage'; // Ensure you have this component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TablePage} />
      </Switch>
    </Router>
  );
};

export default App;




// src/App.js
// import React from "react";
// import MultiStepForm from "./MultiStepForm";

// function App() {
//   return (
//     <div className="App">
//       <MultiStepForm />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
// import { CssBaseline } from '@mui/material';
// import Home from './pages/Home';
// import Room from './pages/Room';

// function App() {
//   return (
//     <Router>
//       <CssBaseline />
//       <Routes>
//         <Route path="/" element={<Home />} /> {/* Use element instead of component */}
//         <Route path="/room/:id" element={<Room />} /> {/* Use element instead of component */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;












// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

// import Home from './components/Home';
// import About from './components/About';
// import Login from './components/Login';
// import Register from './components/Register';
// import Contact from './components/Contact';

// import logo from './assets/logo.png'; // Import the logo image

// function App() {
//   return (
//     <Router>
//       <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
//         <Toolbar>
//           <Box component="img" src={logo} alt="Logo" sx={{ height: 50, mr: 2 }} />
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             My Website
//           </Typography>
//           <Button color="inherit" component={Link} to="/">
//             Home
//           </Button>
//           <Button color="inherit" component={Link} to="/login">
//             Login
//           </Button>
//           <Button color="inherit" component={Link} to="/register">
//             Register
//           </Button>
//           <Button color="inherit" component={Link} to="/about">
//             About Us
//           </Button>
//           <Button color="inherit" component={Link} to="/contact">
//             Contact
//           </Button>
//         </Toolbar>
//       </AppBar>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;







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
// import CounterComponent from './components/CounterComponent';



// const App = () => {
//   return (
//     <div>
//       <CounterComponent/>
      // {/* <Login />}
      // <Register /> */}
      {/* <CompA/>
      <CompB/> */}
      {/* <Parent/> */}
      {/* <Child1/> */}
     {/* < Child2/> */}
      {/* <Grandchild/> */}
      {/* <LoginForm/> */}
      {/* <Login_Form/> */}
      {/* <RegistrationForm/> */}
    

{/* <Router>
<NavBar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/muiform" element={<MUIform />} />
</Routes>
</Router> */}

// </div>
//   );
// }

// export default App;



// import React from 'react';
// import { Container, Typography } from '@mui/material';
// import DestinationList from './components/DestinationList';

// function App() {
//   return (
//     <Container maxWidth="lg" style={{ marginTop: '20px' }}>
//       <Typography variant="h4" gutterBottom align="center">
//         Travel Destinations
//       </Typography>
//       <DestinationList />
//     </Container>
//   );
// }

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CssBaseline } from '@mui/material';
// import Home from './pages/Home';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Products from './pages/Products';

// function App() {
//   return (
//     <Router>
//       <CssBaseline />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/products" element={<Products />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
