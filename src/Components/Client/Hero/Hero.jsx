import React from "react"
import Heading from "../Home/Heading";
import "../Hero/Hero.css";

import { useNavigate } from "react-router";


const Hero = () => {
  const navigate = useNavigate();

  const getstart = () => {

    console.log("chl rah hay")

    navigate("/courses");
  }

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
            <p className="hero-p1">Far far away, behind the word mountains, far from the countries Pakistan and <br />   USA, there live the blind texts.</p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
