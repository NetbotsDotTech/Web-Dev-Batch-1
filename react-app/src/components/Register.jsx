import React, { useState } from "react";
import "./style.css";

export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    age: 0,
    email: "",
    phone_no: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
       ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Logging in with:", formData);
    alert(
      `Username: ${formData.username}\nAge: ${formData.age}\nEmail: ${formData.email}\nPhone_no: ${formData.phone_no}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <h1>Registration</h1>
        <label htmlFor="username">Full Name : </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="age">Age : </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="email">Gmail : </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="phone_no">Phone Number : </label>
        <input
          type="number"
          id="phone_no"
          name="phone_no"
          value={formData.phone_no}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Register;

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
