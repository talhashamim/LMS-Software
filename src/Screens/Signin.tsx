import React from 'react'
import { Link } from 'react-router-dom'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Input from '../Components/Input';
import Button from '../Components/Button';

const SignIn = () => {
  return (
    <div>
       <h1>Sign ins</h1>
          <Link to="/">Dashboard</Link>
          <Link to="/login">Login</Link>

          <Input inputChange={(ev :any)=>console.log(ev.target.value)} placeholder="Enter Text"/>
          <Button btnValue='SignIn' className="btn btn-danger" onclick={()=>console.log("login")}/>
    </div>
  )
}

export default SignIn
