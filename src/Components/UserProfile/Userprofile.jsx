import React from 'react'
import "../UserProfile/Userprofile.css"
import img1 from "../../assests/images/about-us.png"
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';


function Userprofile({ setUser1, Username, Email, rollNo }) {


    const [UserProfile, set_UserProfile] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9002/profile")
            .then(response => {
                const extractedUsers = response.data;
                set_UserProfile(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    console.log("Users Info ", UserProfile)
    return (
        <>
            <div className="student-profile py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card shadow-sm">
                                <div className="card-header bg-transparent text-center">
                                    <img className="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp" />
                                    <h3>{Username}</h3>
                                </div>
                                <div className="card-body">
                                    <p className="mb-0"><strong className="pr-1">Student Name:</strong>{Username}</p>
                                    <p className="mb-0"><strong className="pr-1">Class:</strong>5th</p>
                                    <p className="mb-0"><strong className="pr-1">Section:</strong>B</p>
                                    <button className="btn" onClick={() => setUser1({})}>Logout</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card shadow-sm">
                                <div className="card-header bg-transparent border-0">
                                    <h3 className="mb-0 ms-1"><i className="far fa-clone pr-1"></i> General Information</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <table className="table table-bordered">
                                        <tr>
                                            <th width="30%">Roll</th>
                                            <td width="2%">:</td>
                                            <td>{rollNo}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Academic Year	</th>
                                            <td width="2%">:</td>
                                            <td>2024</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Email</th>
                                            <td width="2%">:</td>
                                            <td>{Email}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div style={{ height: "26px" }} ></div>
                            <div className='container-fluid '>
                                <div className='row'>
                                    {
                                        UserProfile.map((val, key) => {
                                            return <div className='col-lg-6'>
                                                <div className="card-header card border-0 mt-3" >
                                                    <h5 className="mb-0">{val.category_name} Category</h5>
                                                    <ol className='mt-3' style={{ fontWeight: "600" }}>
                                                        <li>
                                                            {val.course_name}
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>


                                        })
                                    }
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Userprofile