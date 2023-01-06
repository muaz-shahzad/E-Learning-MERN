import React from 'react'
import "../UserProfile/Userprofile.css"
import img1 from "../../assests/images/about-us.png"


function Userprofile({setUser1, Username,Email,UserID }) {
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
                                            <td>{UserID}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Academic Year	</th>
                                            <td width="2%">:</td>
                                            <td>2024</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Gender</th>
                                            <td width="2%">:</td>
                                            <td>Male</td>
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
                            <div className='container-fluid card '>

                                <div className='row'>
                                    <div className="card-header bg-transparent border-0" >
                                        <h3 className="mb-0"><i className="far fa-clone"></i> Course Information</h3>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div className="" >
                                            <img style={{ borderRadius: "15px" }} className='img-fluid' src={img1} alt="" />
                                        </div>
                                    </div>
                                    <div className='col-lg-8'>
                                        <div className="">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
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