import React from 'react'
import { Downloadcoursedownload } from "../../dummydata"

const UserTable = () => {
    return (
        <>
            <div className="col-lg-6">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-lg-12 mb-lg-0 mb-4">
                            <div className="card ">
                                <div className="card-header pb-0 p-3">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-2">User Information</h6>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center ">
                                        <thead style={{ color: "#34477F" }}>
                                            <tr>
                                                <th scope="col">User-Id</th>
                                                <th scope="col">User-name</th>
                                                <th scope="col">Total Course Downloaded</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                Downloadcoursedownload.map((val, key) => {
                                                    return <tr>
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
                                                                <h6 className="text-sm mb-0">{val.Totalcourse}</h6>
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
            </div>
        </>
    )
}

export default UserTable