import React from "react"
import "../Courses/Courses.css"
import { online } from "../../../dummydata"

const Courses = () => {
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
                        {online.map((val) => (
                            <div className='box'>
                                <div className='img'>
                                    <img src={val.cover} />
                                    <img src={val.hoverCover} alt='' className='show' />
                                </div>
                                <h1>{val.courseName}</h1>
                                <span>{val.course}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Courses
