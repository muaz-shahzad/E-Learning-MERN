import React from 'react'
import Head from '../../Head/Head'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Back from '../../../Back/Back'
import ScrollTop from '../../../../ScrollonTop'
import GUI from '../Graphic/GUI'

const GraphicPage = ({ setLoginUser, Username }) => {
  return (
   <>
   <ScrollTop/>
     <Head
        setUser1={setLoginUser}
        Username={Username}
      />
      <Header />
      <Back title='Graphic Courses' />
      <GUI/>
      <Footer />
   </>
  )
}

export default GraphicPage