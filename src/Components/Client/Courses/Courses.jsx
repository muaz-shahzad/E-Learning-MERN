import React from "react"
import "../Courses/Courses.css"
import { online } from "../../../dummydata"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import BrowseCourse from "./BrowseCourse"


const Courses = () => {
    const navigate = useNavigate();

    const Select_img = (id) => {
        console.log("ID => ", id);
        // alert(id)

        switch (id) {

            case 0: return navigate("/UI");
            case 1: return navigate("/art");
            case 2: return navigate("/computer");
            case 3: return navigate("/history");
            case 4: return navigate("/software");
            case 5: return navigate("/security");
            case 6: return navigate("/health");
            case 7: return navigate("/market");
            case 8: return navigate("/graphic");
            case 9: return navigate("/music");
            case 10: return navigate("/buisness");
            case 11: return navigate("/web");



            default: return <h1>No project match</h1>
        }
      

    }
    return (
        <>
            <section className='online'>
                <div className='container'>
                    {/* <Heading subtitle='COURSES' title='Browse Our Online Courses' /> */}
                    <div id='heading'>
                        <h3 className="About-h3">COURSES</h3>
                        <h1 style={{ fontSize: "30px" }} className="About-title">Browse Our Online Courses</h1>
                    </div>
                    <div className='content grid3'>
                        {
                            online.map((val, key) => {
                                return <BrowseCourse
                                    key={key}
                                    id={val.key}
                                    cover={val.cover}
                                    hoverCover={val.hoverCover}
                                    coursename={val.courseName}
                                    course={val.course}
                                    Selected_Image={Select_img}
                                />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Courses
