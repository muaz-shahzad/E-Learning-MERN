import React from 'react'
import Head from '../../Head/Head'
import Header from '../../Header/Header'
import Back from '../../../Back/Back'
import Footer from '../../Footer/Footer'
import '../UI/UI.css'
import MarkCourseInfo from './MarkCourseInfo'

function MarkCoursesDetail({ setLoginUser, Username }) {
    return (
        <>
            <Head
                setUser1={setLoginUser}
                Username={Username}
            />
            <Header />
            <Back title='Courses Detail' />
            <MarkCourseInfo/>
            <Footer />
        </>
    )
}

export default MarkCoursesDetail