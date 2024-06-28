import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import "./components/style.css";

const App = () => {
  return (
    <div className="container">
      <Login />
      <Register />
    </div>
  );
}

export default App;