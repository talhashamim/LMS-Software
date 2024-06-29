import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
          <Link to="/">Dashboard</Link>
          <Link to="/Signin">Sign In</Link>
          {/* <input  ={(ev: any)=>console.log(ev.target.value) }/> */}
    </div>
  )
}

export default Login
