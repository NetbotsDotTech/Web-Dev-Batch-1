import React from 'react';
import StudentRegistrationForm from './components/StudentRegistration';
import LoginForm from './components/StudentLonginForm'
import FlipCardContainer from './components/FlipCard'
import FirstComp from './components/FirstComp'
import Counter from './components/counter'
import Project from './components/Project';

const App = () => {
  const handleFormSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      {/* <h1 style={{ color: 'blue', textAlign: 'center' }}>Student Registration Form</h1>
      // <StudentRegistrationForm onSubmit={handleFormSubmit} /> */}
      {/* <h1 style={{ backgroundColor:"gray", color: 'blue', textAlign: 'center' }}>Login Form</h1>
      <LoginForm/> */}
      {/* This is the conditional rendering  */}
      {/* {true ?<FlipCardContainer/>  :      <Project/>} */}

        {/* {false ?<FirstComp/>:
        <Counter count="100"/>} */}
        <Counter/>


    </div>
  );
};

export default App;
