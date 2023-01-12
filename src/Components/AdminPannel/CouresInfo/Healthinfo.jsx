import React from 'react'
// import { Totalcourse } from "../../dummydata"
import DeleteIcon from '@mui/icons-material/Delete';



const Healthinfo = (props) => {
    return (
        <>
        
            <div className="container" style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
                <div className="row mt-4">
                    <div className="col-lg-12  mb-lg-0 mb-4">
                        <div className="card ">
                            <div className="card-header pb-0 p-3">
                                <div className="d-flex justify-content-between">
                                    <h6 className="mb-2">Health & Fitness Courses </h6>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table align-items-center ">
                                    <thead style={{ color: "#34477F" }}>
                                    <tr>
                                            <th scope="col">Category-Id</th>
                                            <th scope="col">Course-Id</th>
                                            <th scope="col">Course-name</th>
                                            <th scope="col">Category-name</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            props.course7Data.map((val, key) => {
                                                return <tr>
                                                    <td className="w-30">
                                                        <div className="d-flex px-2 py-1 align-items-center">
                                                            <div className="ms-5">
                                                                <h6 className="text-sm mb-0">{val.category_id}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <h6 className="text-sm mb-0">{val.course_id}</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <h6 className="text-sm mb-0">{val.course_name}</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <h6 className="text-sm mb-0">{val.category_name}</h6>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-sm">
                                                        <div className="col text-center">
                                                            <h6 className="text-sm mb-0"><DeleteIcon style={{ color: "red" }} /></h6>
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

export default Healthinfo