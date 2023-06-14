import React, {useState} from 'react'
import "./Login.css";
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function Login({onLogin}) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <p className="registrationPrompt">Don't have an account?</p>
          <button onClick={() => setShowLogin(false)}>Sign Up</button>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <p>Already have an account?</p>
          <button className="authButton" onClick={() => setShowLogin(true)}>Log In</button>
        </>
      )}
    </div>
  )
}

export default Login