import React from 'react'
import { Registereuser } from "../../dummydata"
import DeleteIcon from '@mui/icons-material/Delete';

const RegisterTable = () => {
    return (
        <>
 <div className="col-lg-6">
                                <div className="container">
                                    <div className="row mt-4">
                                        <div className="col-lg-12 mb-lg-0 mb-4">
                                            <div className="card ">
                                                <div className="card-header pb-0 p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="mb-2">Registered User</h6>
                                                    </div>
                                                </div>
                                                <div className="table-responsive">
                                                    <table className="table align-items-center ">
                                                        <thead style={{ color: "#34477F" }}>
                                                            <tr>
                                                                <th scope="col">User-Id</th>
                                                                <th scope="col">User-name</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                Registereuser.map((val, key) => {
                                                                    return <tr>
                                                                        <td>
                                                                            <div className="ms-5">
                                                                                <h6 className="text-sm mb-0">{val.userid}</h6>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ms-5">
                                                                                <h6 className="text-sm mb-0">{val.username}</h6>
                                                                            </div>
                                                                        </td>
                                                                        <td className="align-middle">
                                                                            <div className="col ms-4">
                                                                                <h6 className="text-sm mb-0"> <DeleteIcon style={{ color: "red" }} /></h6>
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

export default RegisterTable