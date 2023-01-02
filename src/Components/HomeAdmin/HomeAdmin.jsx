import React from 'react'
import "./HomeAdmin.css"
import { useNavigate } from "react-router-dom"


const HomeAdmin = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="homepage">
                <h1>Hello Admin</h1>
                <div className="button" onClick={() => navigate("/admin")}>Logout</div>
            </div>

        </>
    )
}

export default HomeAdmin