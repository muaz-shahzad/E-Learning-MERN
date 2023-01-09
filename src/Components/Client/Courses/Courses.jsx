import React from "react"
import "../Courses/Courses.css"
import { online } from "../../../dummydata"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import BrowseCourse from "./BrowseCourse"
import ScrollTop from "../../../ScrollonTop"


const Courses = () => {
    const navigate = useNavigate();

    const Select_img = (id) => {
        console.log("ID => ", id);
        // alert(id)

        switch (id) {

            case 0: return navigate("/courses/UI");
            case 1: return navigate("/courses/art");
            case 2: return navigate("/courses/computer");
            case 3: return navigate("/courses/history");
            case 4: return navigate("/courses/software");
            case 5: return navigate("/courses/security");
            case 6: return navigate("/courses/health");
            case 7: return navigate("/courses/market");
            case 8: return navigate("/courses/graphic");
            case 9: return navigate("/courses/music");
            case 10: return navigate("/courses/buisness");
            case 11: return navigate("/courses/web");



            default: return <h1>No project match</h1>
        }
      

    }
    return (
        <>
        <ScrollTop/>
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
