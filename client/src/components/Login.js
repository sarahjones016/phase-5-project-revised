import React, {useState} from 'react'
import "./Login.css";
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function Login({onLogin}) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div>
      {showLogin ? 
        (<LoginForm onLogin={onLogin} setShowLogin={setShowLogin}/>) 
        : 
        (<SignUpForm onLogin={onLogin} setShowLogin={setShowLogin}/>)
      }
    </div>
  )
}

export default Login