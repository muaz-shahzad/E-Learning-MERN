import React from 'react'
import Scoursecard from './Scoursecard';
import { Container, Row, Col } from "reactstrap";
import "../../CourseCategories/UI/UI.css"
import { UIData } from '../../../../dummydata';
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

function SE() {
    const navigate = useNavigate();

    
    const Select_img = (props) => {
        // console.log("UI ID => ", props.id);
        // console.log("UI ID => ", props.title);
        //  navigate("/UI/")
        // console.log("Selected Image Props => ", props);
        // console.log("Var Props => ", Propslight);

         navigate("/coursedetailse")
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
                            UIData.map((val, key) => {
                                return <Scoursecard
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

export default SE