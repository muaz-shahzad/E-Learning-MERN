import React from 'react'
import Head from '../../Head/Head'
import Header from '../../Header/Header'
import Back from '../../../Back/Back'
import Footer from '../../Footer/Footer'
import '../UI/UI.css'
import ArtCourseInfo from './ArtCourseInfo'

function ArtCoursesDetail({ setLoginUser, Username }) {
    return (
        <>
            <Head
                setUser1={setLoginUser}
                Username={Username}
            />
            <Header />
            <Back title='Courses Detail Art' />
            <ArtCourseInfo
                fusername={Username}
            />
            <Footer />
        </>
    )
}

export default ArtCoursesDetail