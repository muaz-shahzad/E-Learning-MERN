import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CSCourseInfo = () => {

    const { id } = useParams();
    console.log("Detail prams id", id)

    const navigate = useNavigate();

    const [CScoursedetail, set_CScoursedetail] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9002/courses/computer/${id}`)
            .then(response => {
                const extractedUsers = response.data;
                set_CScoursedetail(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    console.log(CScoursedetail)
    return (
        <>
          <div className="sg-section">
                <div className="section-content course-details bg-white section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb-5">
                                {
                                    CScoursedetail.map((val, key) => {
                                        return <div className="sa-course">
                                            <div className='col-lg-4'>
                                                <div className="course-thumb">
                                                    <img src={`http://localhost:9002/${val.course_img}`} alt="Image" className="w-100" style={{borderRadius: "14px 14px 14px 14px"}} />
                                                </div>
                                            </div>
                                            <div className="course-info" style={{ textAlign: "justify" }}>
                                                <h2 className="title mt-2">{val.course_name}</h2>
                                                <p>{val.course_desc}</p>
                                                <div className="description-tab ">
                                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <button className="btn btn-light" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Description</button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="btn btn-light" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews</button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="btn btn-light" id="comments-tab" data-bs-toggle="tab" data-bs-target="#comments" type="button" role="tab" aria-controls="comments" aria-selected="false">Comments</button>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content" id="myTabContent">
                                                        <div className="tab-pane fade show active mt-4" id="description" role="tabpanel" aria-labelledby="description-tab">
                                                            <h6 style={{ fontSize: "22px" }}>Course Details</h6>
                                                            <p>{val.course_detail}</p>
                                                        </div>
                                                        <div className="tab-pane fade mt-4" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                                            <h6 style={{ fontSize: "22px" }}>Student Feedback</h6>
                                                            <div>
                                                                <p>
                                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, porro beatae ratione asperiores praesentium quisquam. Quidem, magnam ut molestiae vero mollitia dicta, facere, provident temporibus earum iste debitis praesentium?
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade mt-4" id="comments" role="tabpanel" aria-labelledby="comments-tab">
                                                            <h6 style={{ fontSize: "22px" }}>Leave a Comment</h6>
                                                            <div className="comments-form">
                                                                <form action="#">
                                                                    <textarea name="message" className="form-control" required="required" rows="7" placeholder="Write a comment..."></textarea>
                                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className='text-end'>
                                                            <button className='btn text-end'>Download</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    })
                                }
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default CSCourseInfo