import React from 'react'
import Head from '../Client/Head/Head'
import Header from '../Client/Header/Header'
import Hero from '../Client/Hero/Hero'
import Home from '../Client/Home/Home'
import "./Homepage.css"
import { useState } from 'react'
import Footer from '../Client/Footer/Footer'
import Contactus from '../Client/ContactUs/Contactus'
import AboutPage from '../Pages/AboutPage'
import TeamP from '../Client/Team/TeamP'
import {
    BrowserRouter,
    Routes, // Just Use Routes instead of "Switch"
    Route,
    Navigate
  } from "react-router-dom";


const Homepage = ({ setLoginUser, Username }) => {

    // const [user1, setUser1] = useState({})

    return (
        <>
            <Head
                setUser1={setLoginUser}
                Username={Username}
            />
            <Home />
          





        </>
    )
}

export default Homepage