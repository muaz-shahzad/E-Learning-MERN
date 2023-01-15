import React from 'react'
import Head from '../Client/Head/Head'
import Header from '../Client/Header/Header'
import Hero from '../Client/Hero/Hero'
import Home from '../Client/Home/Home'
import "./Homepage.css"
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react'



const Homepage = ({ setLoginUser, Username }) => {

    
    return (
        <>
            <Head
                setUser1={setLoginUser}
                Username={Username}
                
            />
            <Home 
            />
          





        </>
    )
}

export default Homepage