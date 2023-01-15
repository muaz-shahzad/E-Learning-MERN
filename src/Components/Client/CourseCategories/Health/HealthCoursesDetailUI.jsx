import React from 'react'
import Head from '../../Head/Head'
import Header from '../../Header/Header'
import Back from '../../../Back/Back'
import Footer from '../../Footer/Footer'
import '../UI/UI.css'
import HealthCourseInfo from './HealthCourseInfo'


function HealthCoursesDetailUI({ setLoginUser, Username, rollno  }) {
    return (
        <>
            <Head
                setUser1={setLoginUser}
                Username={Username}
            />
            <Header />
            <Back title='Courses Detail Health' />
            <HealthCourseInfo
                 fusername={Username}
                 rollno={rollno}
            />
            <Footer />
        </>
    )
}

export default HealthCoursesDetailUI