import React from "react";
import StarIcon from '@mui/icons-material/Star';

import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router";



const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;
  const navigate = useNavigate();

  const newpage = () => {

    navigate("/courses");
  }
  return (
    <div className="single__free__course">
      <div className="free__course__img mb-4">
        <img onClick={newpage} src={imgUrl} alt="" className="w-100" />
        <button className="btn free__btn">Free</button>
      </div>

      <div className="free__course__details">
        <p style={{ color: "black", fontWeight: "bold" }}>{title}</p>

        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2">
            <PersonIcon style={{ color: "#17bf9e", fontSize: "20px" }} /> {students}k
          </span>

          <span className=" d-flex align-items-center gap-2">
            <StarIcon style={{ color: "#17bf9e", fontSize: "20px" }} />{rating}k
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
