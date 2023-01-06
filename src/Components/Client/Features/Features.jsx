import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Features.css";
import GradingIcon from '@mui/icons-material/Grading';
import ForumIcon from '@mui/icons-material/Forum';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "First and foremost, it allows you to learn at your own pace, on your own schedule. This means you can fit learning into your busy lifestyle, rather than having to rearrange your life to accommodate a set class schedule",
    icon: <GradingIcon style={{ color: "#17bf9e", fontSize: "45px" }} />
  },

  {
    title: "All Time Support",
    desc: "Our all-time support ensures that you'll never be left in the dark when you need assistance. Whether you have a question about a course concept, need technical help, our team of experts is here to help.",
    icon: <ForumIcon style={{ color: "#17bf9e", fontSize: "45px" }} />
  },

  {
    title: "Certification",
    desc: "Elevate your career and stand out in the job market with our online learning certification. Our comprehensive courses are designed to provide you with the skills and knowledge you need to succeed in your field. ",
    icon: <CardMembershipIcon style={{ color: "#17bf9e", fontSize: "45px" }} />
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  {/* <i className={item.icon}></i> */}
                  {item.icon}
                  {/* <h2>{item.icon}</h2> */}
                </h2>
                <h6>{item.title}</h6>
                <p >{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
