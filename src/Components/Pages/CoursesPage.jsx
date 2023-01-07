import React from 'react'
import PopularCourses from '../Client/PopularCourses/PopularCourses'
import FreeCourse from '../Client/FreeCourse/FreeCourse'
import Head from '../Client/Head/Head'
import Footer from '../Client/Footer/Footer'
import Header from '../Client/Header/Header'
import Back from '../Back/Back'
import Courses from '../Client/Courses/Courses'
import { Outlet } from 'react-router'

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
            {/* <Outlet/> */}
        </>
    )
}

export default CoursesPage