import React from 'react'
import "./login.css"
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"



function Login({ setLoginUser }) {

    const navigate = useNavigate();


    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        const { email, password } = user
        if (email && password) {
            axios.post("http://localhost:9002/login", user)
                .then(res => {
                    alert(res.data.message)
                    setLoginUser(res.data.user)
                    navigate("/")
                })
        } else {
            alert("Input Fields Must Be Filled")
        }
    }
   
    return (
        <>
            {console.log("User", user)}
            <div className="login-box">
                <h2>Login</h2>
                <div className="user-box">
                    <input className="mb-1" type="text" name="email" value={user.email} onChange={handleChange} required="" />
                    <label className="mt-2">Email</label>
                </div>
                <div className="user-box">
                    <input className="mb-1" type="password" name="password" value={user.password} onChange={handleChange} required="" />
                    <label className="mt-2">Password</label>
                </div>
                <div className="button-form button">
                    <a id="submit" href="#" onClick={login}>
                        Login
                    </a>
                    <div className='button' id="register">
                        Don't have an account ?
                        <a href="#">
                            <div className="button" onClick={() => navigate("/register")}>Register</div>
                        </a>
                    </div>
                </div>
                <div className="button-form1 button">
                    <a id="submitadmin" href="#" onClick={() => navigate("/admin")}>
                        Admin Login
                    </a>
                </div>
            </div>
        </>

    )
}

export default Login