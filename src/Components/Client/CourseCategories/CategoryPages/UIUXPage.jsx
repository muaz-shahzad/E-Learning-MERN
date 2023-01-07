import React from 'react'
import Head from '../../Head/Head'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Back from '../../../Back/Back'
import ScrollTop from '../../../../ScrollonTop'
import UI from '../UI/UI'

const UIUXPage = ({ setLoginUser, Username }) => {
  return (
    <>
    <ScrollTop/>
       <Head
        setUser1={setLoginUser}
        Username={Username}
      />
      <Header />
      <Back title='UI/UX Courses' />
      <UI/>
      <Footer />
    </>
  )
}

export default UIUXPage