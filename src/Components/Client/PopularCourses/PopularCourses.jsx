import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../../assests/images/web-design.png";
import courseImg2 from "../../../assests/images/graphics-design.png";
import courseImg3 from "../../../assests/images/ui-ux.png";
import "../PopularCourses/Popularcourse.css";
import Coursecard from "../Courses/Coursecard";

import { useNavigate } from "react-router";


const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    imgUrl: courseImg3,
  },
];

const PopularCourses = () => {
  const navigate = useNavigate();


  const getstart = ()=>{

    console.log("chl rah hay")
    
    navigate("/courses");
  }


  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                Transform Your Career with Our Top-Rated Data Courses! Learn the skills you need to land a high-paying job in the field
               
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn" onClick={getstart}>See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <Coursecard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularCourses;
