import React from 'react'

const DlteForm = () => {
  return (
    <>
         <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header pb-0">
                                <div className="d-flex align-items-center">
                                    <h4 className="mb-0">Delete Course</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Course Id</label>
                                                <input name='' className="form-control" type="text" maxLength={10} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Category Name</label>
                                                <input className="form-control" type="text" maxLength={10} />
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
                                        <div className="col-md-2 mt-4">
                                            <button className='btn mt-4' type="submit">Delete 🙂</button>

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

export default DlteForm