import React from 'react'
import Head from '../../Head/Head'
import Header from '../../Header/Header'
import Back from '../../../Back/Back'
import Footer from '../../Footer/Footer'
import '../UI/UI.css'
import HistoryCourseInfo from './HistoryCourseInfo'

function HistoryCoursesDetail({ setLoginUser, Username }) {
    return (
        <>
            <Head
                setUser1={setLoginUser}
                Username={Username}
            />
            <Header />
            <Back title='Courses Detail History' />
            <HistoryCourseInfo/>
            <Footer />
        </>
    )
}

export default HistoryCoursesDetail