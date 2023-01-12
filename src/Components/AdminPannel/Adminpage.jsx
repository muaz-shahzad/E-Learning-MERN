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
                const [{ roll, name }] = response.data;
                // console.log(roll); // will print "1"
                // console.log(name); // will print "M Muaz Shahzad"
                const extractedUsers = response.data.map(({ roll, name }) => ({ roll, name }));
                set_Registeruser(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);




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
                                                <h5 className="font-weight-bolder mt-2">
                                                    $53
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
                                                <h5 className="font-weight-bolder mt-2">
                                                    2,300
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
                                                <h5 className="font-weight-bolder mt-2">
                                                    +3,462
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
                                                <h5 className="font-weight-bolder mt-2">
                                                    $103,430
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