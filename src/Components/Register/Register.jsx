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
  });

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      if (validator.isAlphanumeric(value) && !validator.isNumeric(value)) {
        setUser({ ...user, [name]: value });
      } else {
        alert("Numbers or special character not allowed in name field");
      }
    } else {
      setUser({ ...user, [name]: value });
    }
  }

  const validatePassword = (password) => {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,}$/;
    return pattern.test(password);
  }

  const register = () => {
    const { name, email, password, reEnterPassword } = user;

    if (!validator.isEmail(email)) {
      alert("Please, enter valid Email!");
    } else if (!validatePassword(password)) {
      alert("Password should be combination of 5 digits special character one capital letter and number")
    } else if (password !== reEnterPassword) {
      alert("Password and re-enter password should be same")
    } else if (!name || !email || !password || !reEnterPassword) {
      alert("Input Fields Must Be Filled");
    } else {
      axios.post("http://localhost:9002/register", user)
        .then(res => {
          alert(res.data.message)
          navigate("/login")
        })
    }
  }

  return (
    <>
      {console.log("User", user)}
      <div className="register-box">
        <h2>SignUp</h2>
        <div className="user-box">
          <input className='' type="text" name="name" placeholder='Muaz Shahzad' value={user.name} onChange={handleChange} required="" />
          <label className='mt-1'>Your Name</label>
        </div>
        <div className="user-box">
          <input className='mb-1 ' type="text" name="email" placeholder='muazshahzad667@gmail.com' value={user.email} onChange={handleChange} required="" />
          <label className='mt-1'>Your Email</label>
        </div>
        <div className="user-box">
          <input className='mb-1' type="password" name="password" placeholder='Muaz@123' value={user.password} onChange={handleChange} required="" />
          <label className='mt-1'>Your Password</label>
        </div>
        <div className="user-box">
          <input className='mb-1' type="password" name="reEnterPassword" placeholder='Muaz@123' value={user.reEnterPassword} onChange={handleChange} required="" />
          <label className='mt-1'>Re-enter Password</label>
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