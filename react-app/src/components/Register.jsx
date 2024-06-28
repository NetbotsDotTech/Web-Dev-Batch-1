import "./register.css"
const Signup = () => {
 

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // handle signup logic here
    alert('Sucessfully Register:');
  };

  return (
    <form onSubmit={handleSubmit} className="formregister">
      <h2>Signup</h2>
      <div>
        <label>
          Username:
          <input type="text" placeholder="Enter UserName"  className="input1" />
        </label>
      </div>
      <div>
        <label>
          Email_Id:
          <input type="email" placeholder="Enter Email"  className="input2"/>
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" placeholder="Enter Password" className="input3" />
        </label>
      </div>
      <button type="submit" className="regbutton">Signup</button>
    </form>
  );
};

export default Signup;
