import React from 'react'
import Head from '../Client/Head/Head'
import Footer from '../Client/Footer/Footer'
import Header from '../Client/Header/Header'
import Back from '../Back/Back'
import Courses from '../Client/Courses/Courses'

function CoursesPage({ setLoginUser, Username }) {
    return (
        <>
            <Head
                setUser1={setLoginUser}
                Username={Username}
            />
            <Header />
            <Back title='Courses' />
            <Courses />
            <Footer />
        </>
    )
}

export default CoursesPage