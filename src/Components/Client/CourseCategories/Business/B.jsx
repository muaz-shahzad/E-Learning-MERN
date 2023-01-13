import * as React from 'react';

import { Container, Row, Col } from "reactstrap";
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BCourseCard from './BCourseCard';



function B() {

    const navigate = useNavigate();

    const [Bcourse, set_Bcourse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9002/courses/buisness`)
            .then(response => {
                const extractedUsers = response.data;
                set_Bcourse(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);




    const Select_img = (id) => {

        navigate(`/courses/buisness/${id}`);
    }







    return (
        <>
            <section>
                <Container>
                    <Row>

                        <Col lg="12" className="text-center mb-5">
                            <h2 className="fw-bold">Business Courses</h2>
                        </Col>
                        {
                            Bcourse.map((val, key) => {
                                return <BCourseCard
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

export default B
