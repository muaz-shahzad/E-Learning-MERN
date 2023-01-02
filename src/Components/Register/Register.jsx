import React from 'react'
import "./register.css"
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"




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

  const register = () => {
    const { name, email, password, reEnterPassword } = user
    if( name && email && password && (password === reEnterPassword)){
        axios.post("http://localhost:9002/register", user)
        .then( res => {
            alert(res.data.message)
            navigate("/login")
        })
    } else {
      alert("Input Fields Must Be Filled")
    }
    
}

  return (
    <>
      {console.log("User", user)}
      <div className="register-box">
        <h2>SignUp</h2>
          <div className="user-box">
            <input type="text" name="name" value={user.name} onChange={handleChange} required="" />
            <label>Your Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="email" value={user.email} onChange={handleChange} required="" />
            <label>Your Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" value={user.password} onChange={handleChange} required="" />
            <label>Your Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} required="" />
            <label>Re-enter Password</label>
          </div>
          
          <div className="button-form button">
            <a id="submit" href="#" onClick={register} >
              Register
            </a>
            <div className='button' id="register">
              <a href="#">
                <div className="button"  onClick={()=>navigate("/login")}>Login</div>
              </a>
            </div>
          </div>
      </div>
    </>
  )
}

export default Register