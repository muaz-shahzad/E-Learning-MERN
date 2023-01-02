import React from 'react'
import "./Homepage.css"

const Homepage = ({setLoginUser,Username,Email}) => {
    return (
        <>
            <div className="homepage">
                <h1>Hello {Username} {Email}</h1>
                <div className="button" onClick={() => setLoginUser({})}>Logout</div>
            </div>

        </>
    )
}

export default Homepage