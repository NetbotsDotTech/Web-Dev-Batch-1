import React, { useState } from "react";
import "./LoginForm.css";

export const LoginForm = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [tel, setTel] = useState("");
  const [search, setSearch] = useState("");
  const [number, setNumber] = useState("");
  const [range, setRange] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [week, setWeek] = useState("");
  const [time, setTime] = useState("");
  const [datetimeLocal, setDatetimeLocal] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState("");
  const [color, setColor] = useState("#000000");
  const [hidden, setHidden] = useState("hiddenValue");
  const [submit, setSubmit] = useState("");
  const [reset, setReset] = useState("");
  const [button, setButton] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`
      Text: ${text}
      Password: ${password}
      Email: ${email}
      URL: ${url}
      Telephone: ${tel}
      Search: ${search}
      Number: ${number}
      Range: ${range}
      Date: ${date}
      Month: ${month}
      Week: ${week}
      Time: ${time}
      DateTime Local: ${datetimeLocal}
      Checkbox: ${checkbox ? "Checked" : "Unchecked"}
      Radio: ${radio}
      Color: ${color}
      Hidden: ${hidden}
      Submit: ${submit}
      Reset: ${reset}
      Button: ${button}
      Image: ${image}
    `);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <h1>Registration</h1>
        <label>
          Text:{" "}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          URL:{" "}
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Telephone:{" "}
          <input
            type="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Search:{" "}
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Number:{" "}
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Range:{" "}
          <input
            type="range"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Date:{" "}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Month:{" "}
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Week:{" "}
          <input
            type="week"
            value={week}
            onChange={(e) => setWeek(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Time:{" "}
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          DateTime Local:{" "}
          <input
            type="datetime-local"
            value={datetimeLocal}
            onChange={(e) => setDatetimeLocal(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Checkbox:{" "}
          <input
            type="checkbox"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label>Radio:</label>
        <div>
          <input
            type="radio"
            id="radio1"
            name="radio"
            value="Option 1"
            checked={radio === "Option 1"}
            onChange={(e) => setRadio(e.target.value)}
          />
          <label htmlFor="radio1">Option 1</label>
        </div>
        <div>
          <input
            type="radio"
            id="radio2"
            name="radio"
            value="Option 2"
            checked={radio === "Option 2"}
            onChange={(e) => setRadio(e.target.value)}
          />
          <label htmlFor="radio2">Option 2</label>
        </div>
      </div>
      <div>
        <label>
          Color:{" "}
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Hidden: <input type="hidden" value={hidden} />
        </label>
      </div>
      <div>
        <input
          type="submit"
          value="Submit"
          onClick={() => setSubmit("Submit clicked")}
        />
        <input
          type="reset"
          value="Reset"
          onClick={() => setReset("Reset clicked")}
        />
        <input
          type="button"
          value="Button"
          onClick={() => setButton("Button clicked")}
        />
        <input
          type="image"
          src="submit_button.png"
          alt="Submit"
          onClick={() => setImage("Image clicked")}
        />
      </div>
    </form>
  );
};

export default LoginForm;

// import React, { useState } from 'react';
// import "./style.css";

// export const LoginForm=()=> {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [dob, setDob] = useState('');
//   const [newsletter, setNewsletter] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Show an alert with all the input values
//     alert(`
//       Username: ${username}
//       Password: ${password}
//       Email: ${email}
//       Age: ${age}
//       Gender: ${gender}
//       Date of Birth: ${dob}
//       Subscribe to Newsletter: ${newsletter ? 'Yes' : 'No'}
//     `);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="age">Age:</label>
//         <input
//           type="number"
//           id="age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Gender:</label>
//         <div>
//           <input
//             type="radio"
//             id="male"
//             name="gender"
//             value="Male"
//             checked={gender === 'Male'}
//             onChange={(e) => setGender(e.target.value)}
//           />
//           <label htmlFor="male">Male</label>
//         </div>
//         <div>
//           <input
//             type="radio"
//             id="female"
//             name="gender"
//             value="Female"
//             checked={gender === 'Female'}
//             onChange={(e) => setGender(e.target.value)}
//           />
//           <label htmlFor="female">Female</label>
//         </div>
//       </div>
//       <div>
//         <label htmlFor="dob">Date of Birth:</label>
//         <input
//           type="date"
//           id="dob"
//           value={dob}
//           onChange={(e) => setDob(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={newsletter}
//             onChange={(e) => setNewsletter(e.target.checked)}
//           />
//           Subscribe to Newsletter
//         </label>
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default LoginForm;
