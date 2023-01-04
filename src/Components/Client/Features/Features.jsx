import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Features.css";
import GradingIcon from '@mui/icons-material/Grading';
import ForumIcon from '@mui/icons-material/Forum';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: <GradingIcon style={{color: "#17bf9e",fontSize: "45px"}}/>
  },

  {
    title: "All Time Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: <ForumIcon style={{color: "#17bf9e",fontSize: "45px"}}/>
  },

  {
    title: "Certification",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: <CardMembershipIcon style={{color: "#17bf9e",fontSize: "45px"}}/>
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
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
