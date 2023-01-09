import React from "react";
import { Container, Row, Col } from "reactstrap";



const BCourseCard = (props) => {
    // const { imgUrl, title } = props.item;

    return (
        <Col lg="3" md="4" className="mt-3 mb-4" >
        <div className="single__free__course">
            <div className="uifree__course__img mb-4" id={props.id}>
                <img src={props.imgUrl} alt="" className="w-100" id={props.id}
                    onClick={() => {
                        props.Selected_Image(props.id)
                    }}
                />
                <button className="btn uifree__btn">See Info</button>
            </div>
            <div className="uifree__course__details">
                <p style={{ color: "black", fontWeight: "bold" }}>{props.title}</p>

                <div className=" d-flex align-items-center gap-5">
                    <span className="d-flex align-items-center gap-2">
                        {/* <PersonIcon style={{color: "#17bf9e",fontSize: "20px"}}/> {students}k */}
                    </span>

                    <span className=" d-flex align-items-center gap-2">
                        {/* <StarIcon style={{color: "#17bf9e",fontSize: "20px"}}/>{rating}k */}
                    </span>
                </div>
            </div>
        </div>
        </Col>
    );
};

export default BCourseCard;