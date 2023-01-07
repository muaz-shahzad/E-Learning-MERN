import React from 'react'
import "./register.css"
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

import validator from "validator";



function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })

  }
  // 
  const register = () => {
    const { name, email, password, reEnterPassword } = user

    if (validator.isAlphanumeric(name)) {
      // alert("Character nhi hayn")'
    }
    else {
      // alert("Character hayn");
      window.location.reload(false);
      //Ye best h character nhi hnt chaiye
     
    }
    // Perfect run kar rhi ye condition
    if (!validator.isNumeric(name)) {
      // alert("Perfect Name")

    }
    else {
      // alert("Numeric hayn")
      window.location.reload(false);
      //Ye best h Numeric nhi hnt chaiye
      
    }
    if (validator.isEmail(email) && !validator.isAlphanumeric(password)) {
      // 
      if (name && email && password && (password === reEnterPassword)) {
        axios.post("http://localhost:9002/register", user)
          .then(res => {
            alert(res.data.message)
            navigate("/login")
          })
        setUser({
          name: "",
          email: "",
          password: "",
          reEnterPassword: ""
        })
      }
      else {
        
        alert("Input Fields Must Be Filled");
      }
    }
    else {
      // alert("Please, enter valid Email! and name m character hay");

    }
    // 



  }

  return (
    <>
      {console.log("User", user)}
      <div className="register-box">
        <h2>SignUp</h2>
        <div className="user-box">
          <input className='mb-1' type="text" name="name" placeholder='Muaz Shahzad' value={user.name} onChange={handleChange} required="" />
          <label className='mt-2'>Your Name</label>
        </div>
        <div className="user-box">
          <input className='mb-1 ' type="text" name="email" placeholder='muazshahzad667@gmail.com' value={user.email} onChange={handleChange} required="" />
          <label className='mt-2'>Your Email</label>
        </div>
        <div className="user-box">
          <input className='mb-1' type="password" name="password" placeholder='Muaz@123' value={user.password} onChange={handleChange} required="" />
          <label className='mt-2'>Your Password</label>
        </div>
        <div className="user-box">
          <input className='mb-1' type="password" name="reEnterPassword" placeholder='Muaz@123' value={user.reEnterPassword} onChange={handleChange} required="" />
          <label className='mt-2'>Re-enter Password</label>
        </div>

        <div className="button-form button">
          <a id="submit" href="#" onClick={register} >
            Register
          </a>
          <div className='button' id="register">
            <a href="#">
              <div className="button" onClick={() => navigate("/login")}>Login</div>
            </a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Register