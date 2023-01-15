import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MarkCourseInfo = ({ fusername,rollno }) => {
    const { id } = useParams();
    console.log("Detail prams id", id)

    const navigate = useNavigate();

    const [Markcoursedetail, set_Markcoursedetail] = useState([]);
    const [MarkFeeback, set_MarkFeeback] = useState([]);
    const [isDownloading, setIsDownloading] = useState(false);


    const [feedback, setFeedback] = useState('');
    function handleChange(event) {

        setFeedback(event.target.value);
    }

    useEffect(() => {
        axios.get(`http://localhost:9002/courses/market/${id}`)
            .then(response => {
                const { course, feedback } = response.data;
                set_Markcoursedetail(course);
                set_MarkFeeback(feedback)

            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    console.log(Markcoursedetail)

    function handleSubmit() {
        const course_id = Markcoursedetail[0].course_id;
        const category_id = Markcoursedetail[0].category_id;
        const data = { feedback, course_id, category_id, fusername };
        axios.post(`http://localhost:9002/courses/market/${id}`, data)
            .then(res => {
                alert(res.data.message)
            })
        setFeedback('')
    }

    const handleDownload = async () => {
        setIsDownloading(true);
        try {
            // File path on local machine
            const filePath = "C:\Users\M Muaz Shahzad\Downloads\\Course_File.zip";
            // Create a blob from file path
            const blob = new Blob([filePath], { type: 'application/zip' });
            // Create a URL from the blob
            const url = URL.createObjectURL(blob);
            // Create a link element
            const link = document.createElement('a');
            link.href = url;
            link.download = "Course.zip";
            document.body.appendChild(link);
            link.click();
            setIsDownloading(false);
            const course_id = Markcoursedetail[0].course_id;
            const category_name = Markcoursedetail[0].category_name;
            const course_name = Markcoursedetail[0].course_name;
            const dataofdownload = { course_name, course_id, category_name, fusername, rollno };
            console.log("Downlaod course Info =>", dataofdownload);
            axios.post(`http://localhost:9002/homeadmin/downloadusers`, dataofdownload)
                .then(res => {
                    alert(res.data.message)
                })



        } catch (error) {
            console.error(error);
            setIsDownloading(false);
        }
    };

    return (
        <>
            <div className="sg-section">
                <div className="section-content course-details bg-white section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb-5">
                                {
                                    Markcoursedetail.map((val, key) => {
                                        return <div className="sa-course">
                                            <div className='col-lg-4'>
                                                <div className="course-thumb">
                                                    <img src={`http://localhost:9002/${val.course_img}`} alt="Image" className="w-100" style={{ borderRadius: "14px 14px 14px 14px" }} />
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
                                                            {
                                                                MarkFeeback.map((val, key) => {
                                                                    return <div id={key}>
                                                                        <h6>{val.user_name}</h6>
                                                                        <ol style={{ fontWeight: "300", fontFamily: "Poppins, sans-serif" }}>
                                                                            <li>
                                                                                {val.feedback}
                                                                            </li>
                                                                        </ol>
                                                                    </div>


                                                                })
                                                            }
                                                        </div>
                                                        <div className="tab-pane fade mt-4" id="comments" role="tabpanel" aria-labelledby="comments-tab">
                                                            <h6 style={{ fontSize: "22px" }}>Leave a Comment</h6>
                                                            <div className="comments-form">
                                                                <textarea value={feedback} className="form-control" required="required" rows="7" placeholder="Write a comment..." onChange={handleChange} />
                                                                <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                                                            </div>
                                                        </div>
                                                        <div className='text-end'>
                                                            <button onClick={handleDownload} disabled={isDownloading} className='btn text-end'>Download</button>
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

export default MarkCourseInfo