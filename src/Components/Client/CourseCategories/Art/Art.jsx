import * as React from 'react';
import { Container, Row, Col } from "reactstrap";
import "../../CourseCategories/UI/UI.css"
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArtCourseCard from './ArtCourseCard';



function Art() {

    const navigate = useNavigate();
    const [Artcourse, set_Artcourse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9002/courses/art`)
            .then(response => {
                const extractedUsers = response.data;
                set_Artcourse(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);



    const Select_img = (id) => {

        navigate(`/courses/art/${id}`);
    }
    return (
        <>
            <section>
                <Container>
                    <Row>

                        <Col lg="12" className="text-center mb-5">
                            <h2 className="fw-bold">Art Courses</h2>
                        </Col>
                        {
                            Artcourse.map((val, key) => {
                                return <ArtCourseCard
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

export default Art
