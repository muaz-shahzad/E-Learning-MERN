import * as React from 'react';

import { Container, Row, Col } from "reactstrap";
import "../../CourseCategories/UI/UI.css"
import { UIData } from '../../../../dummydata';
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import MarkCourseCard from './MarkCourseCard';



function Mark() {

    const navigate = useNavigate();

    const [Propstate, setstate] = useState()



    const Select_img = (props) => {
        // console.log("UI ID => ", props.id);
        // console.log("UI ID => ", props.title);
        //  navigate("/UI/")
        // console.log("Selected Image Props => ", props);
        setstate(props)
        // console.log("Var Props => ", Propslight);

         navigate("/marketingcoursedetail")
    }

    console.log("Var Props => ", Propstate);






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
    