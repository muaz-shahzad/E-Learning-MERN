import * as React from 'react';

import { Container, Row, Col } from "reactstrap";
import "../../CourseCategories/UI/UI.css"
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SecurCourseCard from './SecurCourseCard';



function Secur() {

    const navigate = useNavigate();

    const [Securecourse, set_Securecourse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9002/courses/security`)
            .then(response => {
                const extractedUsers = response.data;
                set_Securecourse(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);



    const Select_img = (id) => {

        navigate(`/courses/security/${id}`);
       
    }




    return (
        <>
            <section>
                <Container>
                    <Row>

                        <Col lg="12" className="text-center mb-5">
                            <h2 className="fw-bold">Security Courses</h2>
                        </Col>
                        {
                            Securecourse.map((val, key) => {
                                return <SecurCourseCard
                                      keyui={key}
                                    id={val.course_id}
                                    imgUrl={val.course_img}
                                    title={val.course_name}
                                    Selected_Image={Select_img}

                                />
                            })
                        }
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Secur
    