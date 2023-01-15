import React from 'react'
import Adminnav from '../Adminnav';
import { useEffect } from "react";
import { useState } from 'react';
import { Downloadcourse } from '../../../dummydata';
import axios from 'axios';



const DownloadCourseInfo = () => {

    const [Downloadcourses, set_Downloadcourses] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9002/homeadmin/downloadusers`)
            .then(response => {
                const extractedUsers = response.data;
                set_Downloadcourses(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    console.log("Download",Downloadcourses)

    return (
        <>
            <div className="min-height-500 bg-primary position-absolute mb-5 w-100"></div>
            <main className="main-content position-relative border-radius-lg mb-5">
                <Adminnav />
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-lg-12 mb-lg-0 mb-4">
                            <div className="card ">
                                <div className="card-header pb-0 p-3">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-2">Download Courses</h6>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center ">
                                        <thead style={{ color: "#34477F" }}>
                                            <tr>
                                                <th scope="col">Course-Id</th>
                                                <th scope="col">User-Id</th>
                                                <th scope="col">User-name</th>
                                                <th scope="col">Course-name</th>
                                                <th scope="col">Category</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                Downloadcourses.map((val, key) => {
                                                    return <tr>
                                                        <td className="w-10">
                                                            <div className="d-flex px-2 py-1 align-items-center">
                                                                <div className="ms-5">
                                                                    <h6 className="text-sm mb-0">{val.course_id}</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="w-45 text-center">
                                                                <h6 className="text-sm mb-0">{val.user_id}</h6>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="">
                                                                <h6 className="text-sm mb-0">{val.user_name}</h6>
                                                            </div>
                                                        </td>
                                                        <td className="text-sm">
                                                            <div className="col ms-3">
                                                                <h6 className="text-sm mb-0">{val.course_name}</h6>
                                                            </div>
                                                        </td>
                                                        <td className="text-sm">
                                                            <div className="col ms-3">
                                                                <h6 className="text-sm mb-0">{val.category_name}</h6>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <h1>Download Courses Table S</h1> */}
            </main>
        </>
    )
}

export default DownloadCourseInfo