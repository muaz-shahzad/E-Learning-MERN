import * as React from 'react';
import { Container, Row, Col } from "reactstrap";
import UiCourseCard from './UiCourseCard';
import "../../CourseCategories/UI/UI.css"
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UI() {

    const navigate = useNavigate();

    const [UIcourse, set_UIcourse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9002/courses/UI`)
            .then(response => {
                const extractedUsers = response.data;
                set_UIcourse(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const Select_img = (id) => {

        console.log("ID ", id)
        navigate(`/courses/UI/${id}`);

    }

    return (
        <>
            <section>
                <Container>
                    <Row>

                        <Col lg="12" className="text-center mb-5">
                            <h2 className="fw-bold">UI & UX Courses</h2>
                        </Col>
                        {
                            UIcourse.map((val, key) => {
                                return <UiCourseCard
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

export default UI
