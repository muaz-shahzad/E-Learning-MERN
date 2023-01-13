import * as React from 'react';

import { Container, Row, Col } from "reactstrap";
import "../../CourseCategories/UI/UI.css"
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WebcourseCard from './WebcourseCard';



function Web() {
     
    const navigate = useNavigate();

    const [webcourse, set_webcourse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9002/courses/web`)
            .then(response => {
                const extractedUsers = response.data;
                set_webcourse(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);





    const Select_img = (id) => {
       

        navigate(`/courses/web/${id}`);

    }









    return (
        <>
            <section>
                <Container>
                    <Row>

                        <Col lg="12" className="text-center mb-5">
                            <h2 className="fw-bold">Web Courses</h2>
                        </Col>
                        {
                            webcourse.map((val, key) => {
                                return <WebcourseCard
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

export default Web
    