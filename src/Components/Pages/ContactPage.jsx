import React from 'react'
import Contactus from '../Client/ContactUs/Contactus'
import Head from '../Client/Head/Head'
import Header from '../Client/Header/Header'
import Footer from '../Client/Footer/Footer'



function ContactPage({ setLoginUser, Username }) {
  return (
    <>
      <Head
        setUser1={setLoginUser}
        Username={Username}
      />
      <Header />
      <Contactus />
      <Footer />

    </>
  )
}

export default ContactPage