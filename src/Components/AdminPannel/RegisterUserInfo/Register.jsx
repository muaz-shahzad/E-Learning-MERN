import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Adminnav from '../Adminnav';
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';


const Register = () => {

    const [Registeruser, set_Registeruser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9002/homeadmin/registeruser`)
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
    console.log(Registeruser)

    const dltecourse = (id) => {
        console.log("ID > ", id)
        axios.delete(`http://localhost:9002/userdlte/${id}`)
            .then(response => {
               alert("User Deleted...!!!")
            })
            .catch(error => {
                // Handle error
            });

    }
    return (
        <>
            <div className="min-height-500 bg-primary position-absolute mb-5 w-100"></div>
            <main className="main-content position-relative border-radius-lg mb-5">
                <Adminnav />
                <div className="col-lg-6 mb-5" style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
                    <div className="container  mb-5">
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
                                                    Registeruser.map((val, key) => {
                                                        return <tr key={key}>
                                                            <td>
                                                                <div className="ms-5">
                                                                    <h6 className="text-sm mb-0">{val.roll}</h6>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="">
                                                                    <h6 className="text-sm mb-0 ms-3">{val.name}</h6>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle">
                                                            <div className="col text-center">
                                                            <h6 className="text-sm mb-0"><DeleteIcon onClick={() => dltecourse(val.roll)} style={{ color: "red",coursor: "pointer" }} /></h6>
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

export default Register