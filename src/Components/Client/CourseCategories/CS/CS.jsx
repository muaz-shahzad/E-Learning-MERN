import * as React from 'react';
import { Container, Row, Col } from "reactstrap";
import "../../CourseCategories/UI/UI.css"
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CSCourseCard from './CSCourseCard';



function CS() {

    const navigate = useNavigate();


    const [CScourse, set_CScourse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9002/courses/computer`)
            .then(response => {
                const extractedUsers = response.data;
                set_CScourse(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);



    const Select_img = (id) => {
        navigate(`/courses/computer/${id}`);

    }







    return (
        <>
            <section>
                <Container>
                    <Row>

                        <Col lg="12" className="text-center mb-5">
                            <h2 className="fw-bold">Computer Science Courses</h2>
                        </Col>
                        {
                            CScourse.map((val, key) => {
                                return <CSCourseCard
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

export default CS
