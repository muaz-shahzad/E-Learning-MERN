import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../../assests/images/why-choose-us.png";
import "../Chooseus/Chooseus.css";

import ReactPlayer from "react-player";

const Chooseus = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p style={{textAlign: "justify"}}>
                Welcome to ACADEMIA ONLINE EDUCATION & LEARNING – the premier destination for high-quality e-learning courses. With a wide range of topics and expert instructors, 
                we have something for everyone Our platform is designed to provide you with the most convenient, interactive, and effective learning experience possible. With a focus on flexible scheduling and personalized support, you'll have everything you need to succeed. <br/>
                But don't just take our word for it – see for yourself why so many people choose ACADEMIA ONLINE EDUCATION & LEARNING. With a money-back guarantee and a satisfaction guarantee, you can trust that we stand behind our courses. So why wait? Start learning today and take the first step towards achieving your goals!"
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {/*  */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Chooseus;
