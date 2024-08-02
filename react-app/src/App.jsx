import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import {LoginForm} from './components/LoginForm';
import "./components/style.css";
import { CompB } from './components/CompB';
import CompA from './components/CompA';
import {Parent} from "./components/parent";
import {Child1} from "./components/child1";
import {Child2} from "./components/child2";
import {Grandchild} from "./components/Grandchild";
import {Login_Form} from './components/MUIfrom';
import {RegistrationForm} from './components/MUIregister' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <div>
      {/* <Login />
      <Register /> */}
      {/* <CompA/>
      <CompB/> */}
      {/* <Parent/> */}
      {/* <Child1/> */}
     {/* < Child2/> */}
      {/* <Grandchild/> */}
      <LoginForm/>
      {/* <Login_Form/> */}
      {/* <RegistrationForm/> */}
    

<Router>
<NavBar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Registered />} />
</Routes>
</Router>

</div>
  );
}

export default App;

