import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import UpdateIcon from '@mui/icons-material/Update';
import { useNavigate } from 'react-router';
import Adminnav from '../Adminnav'

// import "../AdminPannel/Adminpannel.css"
import "../Adminpannel.css"

const Addcatcourses = [
    {
        key: 1,
        title: "UI/UX Courses"
    },
    {
        key: 2,
        title: "Art Courses"
    },
    {
        key: 3,
        title: "Computer Courses"
    },
    {
        key: 4,
        title: "History Courses"
    },
    {
        key: 5,
        title: "Software Courses"
    },
    {
        key: 6,
        title: "Security Courses"
    },
    {
        key: 7,
        title: "Health Courses"
    },
    {
        key: 8,
        title: "Marketing Courses"
    },
    {
        key: 9,
        title: "Graphic Courses"
    },
    {
        key: 10,
        title: "Music Courses"
    },
    {
        key: 11,
        title: "Business Courses"
    },
    {
        key: 12,
        title: "Web Courses"
    }

]
const Addcourse = () => {


    const navigate = useNavigate();
    const addcourse = (id) => {
        console.log(id);
        switch (id) {

            case 1: return navigate("/homeadmin/Addcourse/UI");
            case 2: return navigate("/homeadmin/Addcourse/art");
            case 3: return navigate("/homeadmin/Addcourse/computer");
            case 4: return navigate("/homeadmin/Addcourse/history");
            case 5: return navigate("/homeadmin/Addcourse/software");
            case 6: return navigate("/homeadmin/Addcourse/security");
            case 7: return navigate("/homeadmin/Addcourse/health");
            case 8: return navigate("/homeadmin/Addcourse/market");
            case 9: return navigate("/homeadmin/Addcourse/graphic");
            case 10: return navigate("/homeadmin/Addcourse/music");
            case 11: return navigate("/homeadmin/Addcourse/buisness");
            case 12: return navigate("/homeadmin/Addcourse/web");



            default: return <h1>No project match</h1>
        }
      
    }

    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav />
                    <div className="container">
                        <div className="row">
                            {
                                Addcatcourses.map((val, key) => {
                                    return <div className="col-lg-3 mt-5 mb-5" key={val.key}>
                                        <div className="card">
                                            <div className="card-body p-3">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="">
                                                            <h5 className="font-weight-bolder text-center  mt-2">
                                                                <AddBoxIcon onClick={() => addcourse(val.key)} style={{ color: "blue", fontSize: "40px", cursor: "pointer" }} />
                                                            </h5>
                                                            <p className="text-center mb-0 text-uppercase font-weight-bold">{val.title}</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </main>
            </div>


        </>
    )
}

export default Addcourse