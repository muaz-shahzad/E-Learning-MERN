import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import axios from "axios";
import { useNavigate } from "react-router-dom"


const HealthForm = () => {


    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [image, setImage] = useState("");

    const [formData, setFormData] = useState({

        course_name: "",
        course_desc: "",
        course_detail: "",


    })


    const handleClose = () => {
        setOpen(false);
        navigate('/homeadmin/Addcourse')
    };
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };
    const handleFormDataChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({ ...formData, [name]: value }));
    };

    const handleUpload = async () => {
        // Create a new FormData object to send the image and other inputs
        const data = new FormData();
        data.append("testImage", image);
        data.append("course_name", formData.course_name);
        data.append("course_desc", formData.course_desc);

        try {
            const res = await axios.post("http://localhost:9002/homeadmin/Addcourse/health", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        } catch (err) {
        }
        setFormData({
            course_name: "",
            course_desc: "",
            course_detail: "",
        })
        setImage();
        console.log(formData)
        console.log(image)
        setOpen(true);

    };

    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header pb-0">
                                <div className="d-flex align-items-center">
                                    <h4 className="mb-0">Add Health Course</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label htmlFor="example-text-input" className="form-control-label">Course Name</label>
                                            <input value={formData.course_name} onChange={handleFormDataChange} name="course_name" className="form-control" type="text" maxLength={20} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="for-group">
                                            <label htmlFor="example-text-input" className="form-control-label">Course Image</label>
                                            <br />
                                            <input type="file" className="form-control-label" onChange={handleImageChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="example-text-input" className="form-control-label">Course File </label>
                                            <br />
                                            <input onChange={handleFormDataChange} value={formData.file} type="file" name='file' accept=".zip,.rar,.7zip" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="example-text-input" className="form-control-label">Course Description</label>
                                            <textarea onChange={handleFormDataChange} value={formData.course_desc} className="form-control" name='course_desc' type="text" maxLength={50} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="example-text-input" className="form-control-label">Course Detail</label>
                                            <textarea onChange={handleFormDataChange} value={formData.course_detail} className="form-control" name='course_detail' type="text" maxLength={100} />
                                        </div>
                                    </div>

                                   
                                    <div className="col-md-2 mt-4">
                                        <button onClick={handleUpload} className='btn mt-4' type="submit">Add 🙂</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText style={{ color: "black" }} id="alert-dialog-description">
                        Health Course Successfully Added 🥳
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button style={{ color: "blue" }} onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default HealthForm;




