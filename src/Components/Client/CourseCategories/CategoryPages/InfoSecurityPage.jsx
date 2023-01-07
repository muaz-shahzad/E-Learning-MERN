import React from 'react'
import Head from '../../Head/Head'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Back from '../../../Back/Back'
import ScrollTop from '../../../../ScrollonTop'
import Secur from '../Information/Secur'

const InfoSecurityPage = ({ setLoginUser, Username }) => {
  return (
   <>
   <ScrollTop/>
     <Head
        setUser1={setLoginUser}
        Username={Username}
      />
      <Header />
      <Back title='Infomartion Security Courses' />
      <Secur/>
      <Footer />
   </>
  )
}

export default InfoSecurityPage