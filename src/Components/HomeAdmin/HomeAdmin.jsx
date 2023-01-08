import React from 'react'
import "./HomeAdmin.css"
import { useNavigate } from "react-router-dom"


const HomeAdmin = ({ setNewadmin, adminEmail }) => {
    const navigate = useNavigate();
    console.log("Admin Email =>" ,adminEmail)
    return (
        <>
            {/* <div className="homepage">
                <h1>Hello {adminEmail}</h1>
                <div className="button" onClick={() => navigate("/admin")}>Logout</div>
            </div> */}



            

        </>
    )
}

export default HomeAdmin