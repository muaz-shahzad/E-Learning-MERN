import React from 'react'
import Adminnav from '../Adminnav'
import Artinfo from './Artinfo'
import Buisnessinfo from './Buisnessinfo'
import CSinfo from './CSinfo'
import Graphicinfo from './Graphicinfo'
import Healthinfo from './Healthinfo'
import Historyinfo from './Historyinfo'
import Markinfo from './Markinfo'
import Musicinfo from './Musicinfo'
import Securityinfo from './Securityinfo'
import SEinfo from './SEinfo'
import UIinfo from './UIinfo'
import Webinfo from './Webinfo'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState } from 'react'
import { useEffect } from "react";


const COURSESINFO = () => {

    const [course1Data, set_course1Data] = useState([]);
    const [course2Data, set_course2Data] = useState([]);
    const [course3Data, set_course3Data] = useState([]);
    const [course4Data, set_course4Data] = useState([]);
    const [course5Data, set_course5Data] = useState([]);
    const [course6Data, set_course6Data] = useState([]);
    const [course7Data, set_course7Data] = useState([]);
    const [course8Data, set_course8Data] = useState([]);
    const [course9Data, set_course9Data] = useState([]);
    const [course10Data, set_course10Data] = useState([]);
    const [course11Data, set_course11Data] = useState([]);
    const [course12Data, set_course12Data] = useState([]);


    const navigate = useNavigate();
    // const coursesInfo = () => {
    //     navigate("/homeadmin")
    // }
    useEffect(() => {
        axios.get(`http://localhost:9002/homeadmin/coursesinfo`)
            .then(response => {
                const extractedCourses = Object.values(response.data);
                set_course1Data(extractedCourses[0]);
                set_course2Data(extractedCourses[1]);
                set_course3Data(extractedCourses[2]);
                set_course4Data(extractedCourses[3]);
                set_course5Data(extractedCourses[4]);
                set_course6Data(extractedCourses[5]);
                set_course7Data(extractedCourses[6]);
                set_course8Data(extractedCourses[7]);
                set_course9Data(extractedCourses[8]);
                set_course10Data(extractedCourses[9]);
                set_course11Data(extractedCourses[10]);
                set_course12Data(extractedCourses[11]);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav />
                    <div className='container-fluid mb-5'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <UIinfo
                                    course1Data={course1Data}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <Artinfo
                                    course2Data={course2Data} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <CSinfo
                                    course3Data={course3Data}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <Historyinfo
                                    course4Data={course4Data}
                                />
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <SEinfo
                                    course5Data={course5Data}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <Securityinfo
                                    course6Data={course6Data}
                                />
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <Healthinfo
                                    course7Data={course7Data}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <Markinfo
                                    course8Data={course8Data}
                                />

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <Graphicinfo
                                    course9Data={course9Data}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <Musicinfo
                                    course10Data={course10Data}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <Buisnessinfo
                                    course11Data={course11Data}

                                />
                            </div>
                            <div className='col-lg-6'>
                                <Webinfo
                                    course12Data={course12Data}

                                />
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default COURSESINFO