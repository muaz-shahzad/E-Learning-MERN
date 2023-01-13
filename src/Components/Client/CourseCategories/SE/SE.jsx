import React from 'react'
import Scoursecard from './Scoursecard';
import { Container, Row, Col } from "reactstrap";
import "../../CourseCategories/UI/UI.css"
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SE() {
    
    const navigate = useNavigate();

    const [SEcourse, set_SEcourse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9002/courses/software`)
            .then(response => {
                const extractedUsers = response.data;
                set_SEcourse(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const Select_img = (id) => {
        console.log("SE ID => ", id);
        
        navigate(`/courses/software/${id}`);
    }
    return (
        <>
            <section>
                <Container>
                    <Row>

                        <Col lg="12" className="text-center mb-5">
                            <h2 className="fw-bold">SE Courses</h2>
                        </Col>
                        {
                            SEcourse.map((val, key) => {
                                return <Scoursecard
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

export default SE