import * as React from 'react';

import { Container, Row, Col } from "reactstrap";
import "../../CourseCategories/UI/UI.css"
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MusicCourseCard from './MusicCourseCard';



function Music() {

    const navigate = useNavigate();

    const [musiccourse, set_musiccourse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9002/courses/music`)
            .then(response => {
                const extractedUsers = response.data;
                set_musiccourse(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);




    const Select_img = (id) => {

        navigate(`/courses/music/${id}`);
       
    }







    return (
        <>
            <section>
                <Container>
                    <Row>

                        <Col lg="12" className="text-center mb-5">
                            <h2 className="fw-bold">Music Courses</h2>
                        </Col>
                        {
                            musiccourse.map((val, key) => {
                                return <MusicCourseCard
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

export default Music
    