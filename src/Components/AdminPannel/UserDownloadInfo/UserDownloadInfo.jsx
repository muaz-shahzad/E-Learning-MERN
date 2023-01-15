import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Adminnav from '../Adminnav';
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';




const UserDownloadInfo = (props) => {



    const [Usersinfo, set_Usersinfo] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9002/homeadmin/usersinfo")
            .then(response => {
                const extractedUsers = response.data.data;
                set_Usersinfo(extractedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
   console.log("Users Info " , Usersinfo)
    return (
        <>
            <div className="min-height-500 bg-primary position-absolute mb-5 w-100"></div>
            <main className="main-content position-relative border-radius-lg mb-5">
                <Adminnav />
                <div className="col-lg-6" style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
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
                                                    Usersinfo.map((val, key) => {
                                                        return <tr>
                                                            <td>
                                                                <div className="text-center">
                                                                    <h6 className="text-sm mb-0">{val._id}</h6>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="text-center">
                                                                    <h6 className="text-sm mb-0">{val.user_name}</h6>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle text-sm">
                                                                <div className="col text-center">
                                                                    <h6 className="text-sm mb-0">{val.downloads}</h6>
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
            </main>
        </>
    )
}

export default UserDownloadInfo