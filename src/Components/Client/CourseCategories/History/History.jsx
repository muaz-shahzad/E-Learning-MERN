import * as React from 'react';
import { Container, Row, Col } from "reactstrap";
import "../../CourseCategories/UI/UI.css"
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HistoryCourseCard from './HistoryCourseCard';



function History() {

    const navigate = useNavigate();

    const [Historycourse, set_Historycourse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9002/courses/history`)
            .then(response => {
                const extractedUsers = response.data;
                set_Historycourse(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);





    const Select_img = (id) => {

        navigate(`/courses/history/${id}`);
       
    }







    return (
        <>
            <section>
                <Container>
                    <Row>

                        <Col lg="12" className="text-center mb-5">
                            <h2 className="fw-bold">History Courses</h2>
                        </Col>
                        {
                            Historycourse.map((val, key) => {
                                return <HistoryCourseCard
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

export default History
    