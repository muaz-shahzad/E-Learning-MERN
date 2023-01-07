import React from 'react'
import Head from '../../Head/Head'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Back from '../../../Back/Back'
import ScrollTop from '../../../../ScrollonTop'
import History from '../History/History'

const HistoryPage = ({ setLoginUser, Username }) => {
  return (
    <>
    <ScrollTop/>
       <Head
        setUser1={setLoginUser}
        Username={Username}
      />
      <Header />
      <Back title='History Courses' />
      <History/>
      <Footer />
    </>
  )
}

export default HistoryPage