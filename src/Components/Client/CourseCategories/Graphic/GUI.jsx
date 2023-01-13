import * as React from 'react';
import { Container, Row, Col } from "reactstrap";
import "../../CourseCategories/UI/UI.css"
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GUICourseCard from './GUICourseCard';



function GUI() {

    const navigate = useNavigate();

    const [GUIcourse, set_GUIcourse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9002/courses/graphic`)
            .then(response => {
                const extractedUsers = response.data;
                set_GUIcourse(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const Select_img = (id) => {
       

        navigate(`/courses/graphic/${id}`);

    }







    return (
        <>
            <section>
                <Container>
                    <Row>

                        <Col lg="12" className="text-center mb-5">
                            <h2 className="fw-bold">Graphic Courses</h2>
                        </Col>
                        {
                            GUIcourse.map((val, key) => {
                                return <GUICourseCard
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

export default GUI
    