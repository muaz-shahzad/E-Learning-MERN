import React from 'react'
import Head from '../../Head/Head'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Back from '../../../Back/Back'
import ScrollTop from '../../../../ScrollonTop'
import Music from '../Music/Music'

const MusicPage = ({ setLoginUser, Username }) => {
  return (
   <>
   <ScrollTop/>
     <Head
        setUser1={setLoginUser}
        Username={Username}
      />
      <Header />
      <Back title='Music Courses' />
      <Music/>
      <Footer />
   </>
  )
}

export default MusicPage