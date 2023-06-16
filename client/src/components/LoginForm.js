import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import water from '../water.mp4'
import { MdWaterDrop } from "react-icons/md";
import { IconContext } from "react-icons";

function LoginForm({onLogin, setShowLogin}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
         navigate("/dashboard")
      } else {
        r.json().then((err) => setErrors("Email or password is incorrect"));
      }
    });
  }

  return (
    <div className='background'>
      <div className='overlay'></div>
      <video src={water} autoPlay loop muted />
      <div className='login-box'>
        <div className='logo-box'>
          <div className='logo-holder'>
          <IconContext.Provider className='logo' value={{ size: "50px", color: "011325"}}>
            <MdWaterDrop/>
        </IconContext.Provider>   
        </div>   
        <p className='logo-name'>Sip</p>
        </div>
        
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          <button className='submit-btn' type="submit">Log In</button>
          <p className='login-error'>{errors}</p>
        </form> 
      <div className='outside-popup'>
        <p className="para">Not yet sipping? &nbsp;</p>
        <button className='option-btn' onClick={() => setShowLogin(false)}>Sign Up</button>
      </div>
      
      </div>
      
        
    </div>
  )
}

export default LoginForm