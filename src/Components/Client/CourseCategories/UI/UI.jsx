import * as React from 'react';

import { Container, Row, Col } from "reactstrap";
import UiCourseCard from './UiCourseCard';
import "../../CourseCategories/UI/UI.css"
import { UIData } from '../../../../dummydata';
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

import { Link } from 'react-router-dom';

function UI() {

    const navigate = useNavigate();




    const Select_img = (id) => {
        console.log("UI ID => ", id);
        
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
                        UIData.map((val, key) => {
                            return <UiCourseCard
                                keyui={key}
                                id={val.key}
                                imgUrl={val.imgUrl}
                                title={val.title}
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
