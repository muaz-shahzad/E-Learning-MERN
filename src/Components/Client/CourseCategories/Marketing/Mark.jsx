import * as React from 'react';
import MarkCourseCard from './MarkCourseCard';
import { Container, Row, Col } from "reactstrap";
import "../../CourseCategories/UI/UI.css"
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Mark() {

    const navigate = useNavigate();

    const [markcourse, set_markcourse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9002/courses/market`)
            .then(response => {
                const extractedUsers = response.data;
                set_markcourse(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);




    const Select_img = (id) => {

        navigate(`/courses/market/${id}`);

    }





    return (
        <>
            <section>
                <Container>
                    <Row>

                        <Col lg="12" className="text-center mb-5">
                            <h2 className="fw-bold">Marketing Courses</h2>
                        </Col>
                        {
                            markcourse.map((val, key) => {
                                return <MarkCourseCard
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

export default Mark
