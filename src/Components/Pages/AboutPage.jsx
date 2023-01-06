import React from "react"
// import Back from "../common/back/Back"
import AboutCard from "../Client/AboutCard/AboutCard"
import Back from "../Back/Back"
import Header from "../Client/Header/Header"
import Head from "../Client/Head/Head"
import Footer from "../Client/Footer/Footer"
import AboutUS from "../Client/Aboutus/AboutUS"
import Chooseus from "../Client/Chooseus/Chooseus"
import Aboutwin from "../Client/AboutWin/Aboutwin"

const AboutPage = ({ setLoginUser, Username }) => {
  return (
    <>
      <Head
        setUser1={setLoginUser}
        Username={Username}
      />
      <Header />
      <Back title='About Us' />
      <AboutUS />
      <Aboutwin/>
      <Footer />
    </>
  )
}

export default AboutPage
