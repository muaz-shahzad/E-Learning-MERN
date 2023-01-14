import React from 'react'
import Head from '../../Head/Head'
import Header from '../../Header/Header'
import Back from '../../../Back/Back'
import Footer from '../../Footer/Footer'
import '../UI/UI.css'
import GUICourseCard from './GUICourseCard'
import GCourseInfo from './GCourseInfo'

function GCoursesDetail({ setLoginUser, Username }) {
    return (
        <>
            <Head
                setUser1={setLoginUser}
                Username={Username}
            />
            <Header />
            <Back title='Courses Detail GUI' />
            <GCourseInfo
                 fusername={Username}

            />
            <Footer />
        </>
    )
}

export default GCoursesDetail