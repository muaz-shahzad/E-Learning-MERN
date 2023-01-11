import React from 'react'
import { useState } from 'react'



const Updform = () => {

    const [updtcourse, setupd_Course] = useState({

        course_name: "",
        category_name: "",
        course_desc: "",
        course_detail: "",
        img: "",
        file: "",
        course_id: "",


    })

    const handleChange = e => {
        const { name, value } = e.target;
        // console.log(value)
        setupd_Course({
            ...updtcourse,
            [name]: value,

        });
    };

    const Upd_Course = () => {
        const { course_name, category_name, course_desc, course_detail, img, file,category_id } = updtcourse
        console.log(updtcourse)
        // if (email && password) {
        //     axios.post("http://localhost:9002/login", user)
        //         .then(res => {
        //             alert(res.data.message)
        //             setLoginUser(res.data.user)
        //             navigate("/")
        //         })
        //     setUser({
        //         email: "",
        //         password: ""
        //     })
        // } else {
        //     // alert("Input Fields Must Be Filled")
        //     setOpen(true);

        // }
    
    }


    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header pb-0">
                                <div className="d-flex align-items-center">
                                    <h4 className="mb-0">Update Course</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="example-text-input" className="form-control-label">Course Id</label>
                                            <input onChange={handleChange} name='course_id' className="form-control" value={updtcourse.course_id} type="text" maxLength={10} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="example-text-input" className="form-control-label">Course Name</label>
                                            <input onChange={handleChange} name='course_name' className="form-control" value={updtcourse.course_name} type="text" maxLength={10} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="example-text-input" className="form-control-label">Category Name</label>
                                            <select onChange={handleChange} value={updtcourse.category_name} name='category_name' className="form-control" id="">
                                                <option value="" id="">Select an option</option>
                                                <option value="UI" id="1">UI/UX</option>
                                                <option value="ART" id='2' >Art & Design</option>
                                                <option value="CS" id='3' >Computer Science</option>
                                                <option value="History" id='4' >History</option>
                                                <option value="SE" id='5' >Software Engineering</option>
                                                <option value="Info" id='6' >Information Security</option>
                                                <option value="Health" id='7'>Health & Fitness</option>
                                                <option value="Mark" id='8' >Marketing</option>
                                                <option value="Gui" id='9' >Graphic Design</option>
                                                <option value="Music" id='10' >Music</option>
                                                <option value="Business" id='11' >Buisness Administration</option>
                                                <option value="Web" id='12' >Web Development</option>


                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mt-1">
                                            <label htmlFor="example-text-input" className="form-control-label">Course File </label>
                                            <br />
                                            <input onChange={handleChange} value={updtcourse.file} type="file" name='file' accept=".zip,.rar,.7zip" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="example-text-input" className="form-control-label">Course Description</label>
                                            <textarea onChange={handleChange} value={updtcourse.course_desc} className="form-control" name='course_desc' type="text" maxLength={50} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="example-text-input" className="form-control-label">Course Detail</label>
                                            <textarea onChange={handleChange} value={updtcourse.course_detail} className="form-control" name='course_detail' type="text" maxLength={100} />
                                        </div>
                                    </div>
                                   
                                    <div className="col-md-2 mt-4">
                                        <button onClick={Upd_Course} className='btn mt-4' >Update 🙂</button>

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

export default Updform