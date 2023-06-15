import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./SignUpForm.css";
import water from '../water.mp4'


function SignUpForm({onLogin, setShowLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        first_name,
        last_name,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        navigate("/portal")
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className='background'>
      <div className='overlay'></div>
      <video src={water} autoPlay loop muted />
      <div className='signup-box'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <label>Email</label>
          <input
            type="text"
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
            <input
              type="password"
              id="password"
              minlength="6"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          <label>First Name</label>
            <input
              type="text"
              id="first_name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          <label>Last Name</label>
            <input
              type="text"
              id="last_name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          <button className='submit-btn' type="submit">Submit</button>
        </form>
      <div className='outside-popup'>
        <p className='para'>Already sipping? &nbsp;</p>
        <button className='option-btn' onClick={() => setShowLogin(true)}>Log In</button>
      </div>
      </div>
      
    </div>
    
  )
}

export default SignUpForm