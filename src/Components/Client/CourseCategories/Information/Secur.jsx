import * as React from 'react';

import { Container, Row, Col } from "reactstrap";
import "../../CourseCategories/UI/UI.css"
import { UIData } from '../../../../dummydata';
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import SecurCourseCard from './SecurCourseCard';



function Secur() {

    const navigate = useNavigate();




    const Select_img = (id) => {

        navigate(`/courses/security/${id}`);
       
    }




    return (
        <>
            <section>
                <Container>
                    <Row>

                        <Col lg="12" className="text-center mb-5">
                            <h2 className="fw-bold">Security Courses</h2>
                        </Col>
                        {
                            UIData.map((val, key) => {
                                return <SecurCourseCard
                                    key={key}
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

export default Secur
    