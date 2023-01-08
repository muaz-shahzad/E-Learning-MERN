import React from "react"
import "../AdminPannel/Adminpannel.css"
import Adminnav from "./Adminnav";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';
import CategoryIcon from '@mui/icons-material/Category';

import UserTable from "./UserTable";
import RegisterTable from "./RegisterTable";
import DownloadTable from "./DownloadTable";
import CRUD from "./CRUD";
import TotalCourses from "./TotalCourses";

const Adminpage = ({ setadmin1, adminName, adminEmail, adminid }) => {

    // alert(adminName)


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
                    <div className="row mt-4">
                    </div>
                    <div className="container">
                        <div className="row">
                            <UserTable />
                            <RegisterTable />

                        </div>
                    </div>
                    <div className="row mt-5">
                    </div>
                    <DownloadTable />
                    <div className="row mt-5">
                    </div>
                    <TotalCourses />
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