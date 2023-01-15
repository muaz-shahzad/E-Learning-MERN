import React, { useState } from "react"
import "../AdminPannel/Adminpannel.css"
import Adminnav from "./Adminnav";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';
import CategoryIcon from '@mui/icons-material/Category';
import { useEffect } from "react";
import CRUD from "./CRUD";
import axios from 'axios';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { useNavigate } from 'react-router';



const Adminpage = ({ setadmin1, adminName, adminEmail, adminid }) => {



    const [Registeruser, set_Registeruser] = useState([]);
    const [Total_COURSE, set_Total_COURSE] = useState("");
    const [Total_USER, set_Total_USER] = useState("");
    const [Total_Download, set_Total_Download] = useState("");





    const navigate = useNavigate();
    const coursesInfo = () => {
        navigate("/homeadmin/coursesinfo")
    }

    const Registerusers = () => {
        navigate("/homeadmin/registeruser")
    }

    const usersinfo = () => {
        navigate("/homeadmin/usersinfo")
    }

    const downloadusers = () => {
        navigate("/homeadmin/downloadusers")
    }
    useEffect(() => {
        axios.get(`http://localhost:9002/homeadmin`)
            .then(response => {
                // const [{ roll, name }] = response.data;
                const extractedUsers = response.data.map(({ roll, name }) => ({ roll, name }));
                set_Registeruser(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });

        axios.get("http://localhost:9002/homeadminss")
            .then(response => {
                const totalCourses = response.data
                set_Total_COURSE(totalCourses)
            })
            .catch(error => {
                console.log(error);
            });

        axios.get("http://localhost:9002/homeusers")
            .then(response => {
                const totaluser = response.data
                set_Total_USER(totaluser)
            })
            .catch(error => {
                console.log(error);
            });

        axios.get("http://localhost:9002/homedownloadtotal")
            .then(response => {
                const totaldownload = response.data
                set_Total_Download(totaldownload)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    console.log("Total Course ", Total_COURSE.totalCourses)





    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100"></div>
            <main className="main-content position-relative border-radius-lg ">
                <Adminnav
                    setAdmin={setadmin1}
                    Name={adminName}
                />
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Courses</p>
                                                <h5 className="ms-1 mt-2">
                                                    {Total_COURSE.totalCourses}
                                                </h5>
                                                <p className="mb-0">
                                                    <span className="text-success text-sm font-weight-bolder">+55%</span>
                                                    since yesterday
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <AutoStoriesIcon style={{ color: "#2dce89" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Users</p>
                                                <h5 className="ms-1 mt-2">
                                                    {Total_USER.totalUsers}
                                                  </h5>
                                                <p className="mb-0">
                                                    <span className="text-success text-sm font-weight-bolder">+3%</span>
                                                    since last week
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <PersonIcon style={{ color: "#2dce89" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Downloads</p>
                                                <h5 className="ms-1 mt-2">
                                                    {Total_Download.totaldownload}
                                                </h5>
                                                <p className="mb-0">
                                                    <span className="text-success text-sm font-weight-bolder">+2%</span>
                                                    since last quarter
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <DownloadIcon style={{ color: "#2dce89" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Categories</p>
                                                <h5 className="ms-1 mt-2">
                                                    12
                                                </h5>
                                                <p className="mb-0">
                                                    <span className="text-success text-sm font-weight-bolder">+5%</span> than last month
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <CategoryIcon style={{ color: "#2dce89" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Course Infor Card */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-sm-6 mt-5">
                                <div className="card">
                                    <div className="card-body p-3">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="">
                                                    <h5 className="font-weight-bolder text-center  mt-2">
                                                        <TouchAppIcon onClick={coursesInfo} style={{ color: "blue", fontSize: "40px", cursor: "pointer" }} />
                                                    </h5>
                                                    <p className="text-center mb-0 text-uppercase font-weight-bold">See Courses Info</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mt-5">
                                <div className="card">
                                    <div className="card-body p-3">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="">
                                                    <h5 className="font-weight-bolder text-center  mt-2">
                                                        <TouchAppIcon onClick={Registerusers} style={{ color: "blue", fontSize: "40px", cursor: "pointer" }} />
                                                    </h5>
                                                    <p className="text-center mb-0 text-uppercase font-weight-bold">Registered User</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className="col-xl-3 col-sm-6 mt-5">
                                <div className="card">
                                    <div className="card-body p-3">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="">
                                                    <h5 className="font-weight-bolder text-center  mt-2">
                                                        <TouchAppIcon onClick={usersinfo} style={{ color: "blue", fontSize: "40px", cursor: "pointer" }} />
                                                    </h5>
                                                    <p className="text-center mb-0 text-uppercase font-weight-bold">User Information</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className="col-xl-3 col-sm-6 mt-5">
                                <div className="card">
                                    <div className="card-body p-3">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="">
                                                    <h5 className="font-weight-bolder text-center  mt-2">
                                                        <TouchAppIcon onClick={downloadusers} style={{ color: "blue", fontSize: "40px", cursor: "pointer" }} />
                                                    </h5>
                                                    <p className="text-center mb-0 text-uppercase font-weight-bold">Download Courses</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <DownloadTable /> */}
                    <div className="row mt-5">
                    </div>
                    {/* <TotalCourses /> */}
                    <div className="row mt-5">
                    </div>
                    <CRUD />
                    <div className="row mt-4">
                    </div>


                </div>
            </main>
        </>
    )
}

export default Adminpage