import React from 'react'
import "./Admin.css"
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"



function Admin({ setadmin1 }) {

    const navigate = useNavigate();


    const [admin, setadmin] = useState({
        email1: "",
        password1: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setadmin({
            ...admin,
            [name]: value
        })
    }

    const Adminlogin = () => {
        const { email1, password1 } = admin
        if (email1 && password1) {
            axios.post("http://localhost:9002/admin", admin)
                .then(res => {
                    alert(res.data.message)
                    setadmin1(res.data.admin)
                    navigate("/homeadmin")
                })
        } else {
            alert("Input Fields Must Be Filled")
        }
    }

    return (
        <>
            {console.log("Admin", admin)}
            <div className="login-box">
                <h2>Admin Login</h2>
                <div className="user-box">
                    <input type="text" name="email1" value={admin.email1} onChange={handleChange} required="" />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="password" name="password1" value={admin.password1} onChange={handleChange} required="" />
                    <label>Password</label>
                </div>
                <div className="button-form1 button">
                    <a id="submitadmin" href="#" onClick={Adminlogin}>
                        Login
                    </a>
                </div>
            </div>
        </>

    )
}

export default Admin