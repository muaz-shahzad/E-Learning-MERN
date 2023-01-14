import React from 'react'
import SEcourseinfo from './SEcourseinfo'
import Head from '../../Head/Head'
import Header from '../../Header/Header'
import Back from '../../../Back/Back'
import Footer from '../../Footer/Footer'
import "../UI/UI.css"

function CourseDetailSE ({setLoginUser, Username }){
    return (
        <>
            <Head
                setUser1={setLoginUser}
                Username={Username}
            />
            <Header />
            <Back title='Courses Detail SE' />
            <SEcourseinfo
                 fusername={Username}

            />
            <Footer />
        </>
    )
}

export default CourseDetailSE