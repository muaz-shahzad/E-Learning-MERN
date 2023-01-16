import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./login.css"
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import AlertDialog from '../Alert/AlertMessage'
import AlertMessage from '../Alert/AlertMessage'



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
    const [open, setOpen] = React.useState(false);


    const handleClose = () => {
        setOpen(false);
    };
    const login = () => {
        const { email, password } = user
        if (email && password) {
            axios.post("http://localhost:9002/login", user)
                .then(res => {
                    alert(res.data.message)
                    setLoginUser(res.data.user)
                    navigate("/")
                })
            setUser({
                email: "",
                password: ""
            })
        } else {
            // alert("Input Fields Must Be Filled")
            setOpen(true);

        }
    }
    
    return (
        <>
            {console.log("User",)}
            <div className="login-box">
                <h2>Login</h2>
                <div className="user-box">
                    <input className=""  type="text" placeholder='muazshahzad667@gmail.com' name="email" value={user.email} onChange={handleChange} required="" />
                    <label className="mt-4 mb-2">Email</label>
                </div>
                <br />
                <div className="user-box">
                    <input className="mt-3"  type="password" placeholder='Muaz@123' name="password" value={user.password} onChange={handleChange} required="" />
                    <label className="mt-4 mb-2">Password</label>
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

            {/* Dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle style={{color: "red"}} id="alert-dialog-title">
                    {"Alert..!!!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{color: "black"}} id="alert-dialog-description">
                        Input Fields Must Be Filled
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button style={{color: "green"}} onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </>

    )
}

export default Login