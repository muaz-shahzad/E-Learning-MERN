import React from "react"
import Heading from "../Home/Heading";
// import "../Home/Hero.css"
import "../Hero/Hero.css";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
            <p className="hero-p1">Far far away, behind the word mountains, far from the countries Pakistan and <br/>   USA, there live the blind texts.</p>
            <div className='button'>
              <button className='primary-btn Hero-btn1'>
                GET STARTED NOW <i style={{color: "white",cursor: "pointer"}} className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className="Hero-btn2 ms-2">
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
