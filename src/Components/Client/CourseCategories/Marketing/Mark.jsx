import * as React from 'react';

import { Container, Row, Col } from "reactstrap";
import "../../CourseCategories/UI/UI.css"
import { UIData } from '../../../../dummydata';
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import MarkCourseCard from './MarkCourseCard';



function Mark() {

    const navigate = useNavigate();




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
                            UIData.map((val, key) => {
                                return <MarkCourseCard
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

export default Mark
    