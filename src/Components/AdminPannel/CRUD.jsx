import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import UpdateIcon from '@mui/icons-material/Update';
import { useNavigate } from 'react-router';


const CRUD = () => {
  const navigate = useNavigate();
    const addcourse = () => {
        navigate("/Addcourse")
    }
    const updtcourse = () => {
        navigate("/updtcourse")


    }
    const dltcourse = () => {
        alert("dlte horaha")

    }
    return (
        <>
            <div className="container">
                <div className="row" style={{display: "flex",justifyContent: "center",margin: "auto"}}>
                    <div className="col-lg-5">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="">
                                            <h5 className="font-weight-bolder text-center  mt-2">
                                                <AddBoxIcon onClick={addcourse} style={{ color: "#2dce89", fontSize: "40px", cursor: "pointer" }} />
                                            </h5>
                                            <p className="text-center mb-0 text-uppercase font-weight-bold">Add Courses</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="">
                                            <h5 className="font-weight-bolder text-center  mt-2">
                                                <UpdateIcon onClick={updtcourse} style={{ color: "blue", fontSize: "40px", cursor: "pointer" }} />
                                            </h5>
                                            <p className="text-center mb-0 text-uppercase font-weight-bold">Update Course</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body p-3">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="">
                                                    <h5 className="font-weight-bolder text-center  mt-2">
                                                        <DeleteIcon onClick={dltcourse} style={{ color: "red", fontSize: "40px",cursor: "pointer" }} />
                                                    </h5>
                                                    <p className="text-center mb-0 text-uppercase font-weight-bold">Delete Courses</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                </div>
            </div>
        </>
    )
}

export default CRUD