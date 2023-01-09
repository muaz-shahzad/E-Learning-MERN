import React, { useState } from 'react'
import Head from '../../Head/Head'
import Header from '../../Header/Header'
import Back from '../../../Back/Back'
import Footer from '../../Footer/Footer'
import './UI.css'
import CourseInfo from './CourseInfo'
// import { json, useParams } from 'react-router'
// import { UIData } from '../../../../dummydata';
// import img1 from "../../../../assests/images/kids-learning.png"


function CoursesDetailUI({ setLoginUser, Username }) {

    return (
        <>
            <Head
                setUser1={setLoginUser}
                Username={Username}
            />
            <Header />
            <Back title='Courses Detail UI' />
            <CourseInfo/>
            <Footer />
        </>
    )
}

export default CoursesDetailUI