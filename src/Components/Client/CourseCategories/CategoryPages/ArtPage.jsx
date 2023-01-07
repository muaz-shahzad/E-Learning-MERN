import React from 'react'
import Head from '../../Head/Head'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Back from '../../../Back/Back'
import ScrollTop from '../../../../ScrollonTop'
import Art from '../Art/Art'

const ArtPage = ({ setLoginUser, Username }) => {
  return (
    <>
    <ScrollTop/>
      <Head
        setUser1={setLoginUser}
        Username={Username}
      />
      <Header />
      <Back title='Art Page' />
      <Art/>
      <Footer />

    </>
  )
}

export default ArtPage