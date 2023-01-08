import React from 'react'

const Updform = () => {
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
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Course Name</label>
                                                <input name='' className="form-control" type="text" maxLength={10} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Category Name</label>
                                                <select className="form-control" name="category" id="">
                                                    <option></option>
                                                    <option value="ui">UI/UX</option>
                                                    <option value="art">Art & Design</option>
                                                    <option value="cs">Computer Science</option>
                                                    <option value="history">History</option>
                                                    <option value="se">Software Engineering</option>
                                                    <option value="info">Information Security</option>
                                                    <option value="health">Health & Fitness</option>
                                                    <option value="mark">Marketing</option>
                                                    <option value="gui">Graphic Design</option>
                                                    <option value="music">Music</option>
                                                    <option value="business">Buisness Administration</option>
                                                    <option value="web">Web Development</option>


                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Course Description</label>
                                                <textarea className="form-control" type="text" maxLength={50} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Course Detail</label>
                                                <textarea className="form-control" type="text" maxLength={100} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Course Information</label>
                                                <textarea className="form-control" type="text" maxLength={100} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Course File </label>
                                                <br />
                                                <br />
                                                <input type="file" accept=".zip,.rar,.7zip" />
                                            </div>
                                        </div>
                                        <div className="col-md-2 mt-4">
                                            <button className='btn mt-4' type="submit">Update 🙂</button>

                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Updform