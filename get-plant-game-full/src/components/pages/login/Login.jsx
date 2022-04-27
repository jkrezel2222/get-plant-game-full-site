import React from 'react'
import RegisterFormContainer from '../register/RegisterFormContainer'
import LoginFormContainer from './LoginFormContainer'

const Login = () => {
  return (
    <div>
        <h3>Login</h3>
        <div>
            <LoginFormContainer />
        </div>
        <br />
        <br />
            <RegisterFormContainer />
        
    </div>
  )
}

export default Login