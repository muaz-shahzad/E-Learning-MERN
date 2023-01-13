import React from "react";
import StarIcon from '@mui/icons-material/Star';

const Coursecard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <p style={{ color: "black", fontWeight: "bold", fontSize: "16px" }} className="course__title">{title}</p>
      </div>
    </div>
  );
};

export default Coursecard;
