import React from 'react'
import "./Admin.css"
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"



function Admin({ setNewadmin }) {

    const navigate = useNavigate();


    const [admin, setadmin] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setadmin({
            ...admin,
            [name]: value
        })
    }

    const Adminlogin = () => {
        const { email, password } = admin
        if (email && password) {
            axios.post("http://localhost:9002/admin",admin)
                .then(res => {
                    alert(res.data.message)
                    setNewadmin(res.data.admin)
                    {console.log("Admin", admin)}
                    navigate("/homeadmin")
                })
                setadmin({
                    email: "",
                    password: ""
                })
        } else {
            alert("Input Fields Must Be Filled")
        }
    }

    return (
        <>
            {/* {console.log("Admin", admin)} */}
            <div className="login-box">
                <h2>Admin Login</h2>
                <div className="user-box">
                    <input className='mb-1' type="text" placeholder='muazshahzad667@gmail.com' name="email" value={admin.email} onChange={handleChange} required="" />
                    <label className='mt-2'>Email</label>
                </div>
                <div className="user-box">
                    <input className='mb-1' type="password" placeholder='Muaz@123' name="password" value={admin.password} onChange={handleChange} required="" />
                    <label className='mt-2'>Password</label>
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