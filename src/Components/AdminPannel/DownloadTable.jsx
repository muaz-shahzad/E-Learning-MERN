import React from 'react'
import { Downloadcourse } from "../../dummydata"


const DownloadTable = () => {
    return (
        <>
            <div className="container" style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
                <div className="row mt-4">
                    <div className="col-lg-12  mb-lg-0 mb-4">
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
                                            <th scope="col">Feedback</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Downloadcourse.map((val, key) => {
                                                return <tr>
                                                    <td className="w-30">
                                                        <div className="d-flex px-2 py-1 align-items-center">
                                                            <div className="ms-5">
                                                                <h6 className="text-sm mb-0">{val.courseid}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <h6 className="text-sm mb-0">{val.userid}</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <h6 className="text-sm mb-0">{val.username}</h6>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-sm">
                                                        <div className="col text-center">
                                                            <h6 className="text-sm mb-0">{val.coursename}</h6>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-sm">
                                                        <div className="col text-center">
                                                            <h6 className="text-sm mb-0">{val.category}</h6>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-sm">
                                                        <div className="col text-center">
                                                            <h6 className="text-sm mb-0">{val.Feedback}</h6>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-sm">
                                                        <div className="col text-center">
                                                            <h6 className="text-sm mb-0">{val.Action}</h6>
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
        </>
    )
}

export default DownloadTable