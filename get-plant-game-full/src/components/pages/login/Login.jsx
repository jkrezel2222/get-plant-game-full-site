import React from 'react'
import RegisterFormContainer from '../register/RegisterFormContainer'
import LoginFormContainer from './LoginFormContainer'
import "../register/register.css";



const Login = () => {
  return (
    <div className="register">
        <br />
        <div className="registerForm">
            <LoginFormContainer />
        <br />
        <br />
            <RegisterFormContainer />
        </div>
        
    </div>
  )
}

export default Login