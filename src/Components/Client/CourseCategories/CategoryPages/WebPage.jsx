import React from 'react'
import Head from '../../Head/Head'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Back from '../../../Back/Back'
import ScrollTop from '../../../../ScrollonTop'
import Web from '../Web/Web'

const WebPage = ({ setLoginUser, Username }) => {
  return (
    <>
    <ScrollTop/>
       <Head
        setUser1={setLoginUser}
        Username={Username}
      />
      <Header />
      <Back title='Web Courses' />
      <Web/>
      <Footer />
    </>
  )
}

export default WebPage