import React from 'react' 


export const Grandchild = ({user}) => {
    return (
      <div>
        <h3>Grandchild Component</h3>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
      </div>
    );
  };
  
  export default Grandchild;

