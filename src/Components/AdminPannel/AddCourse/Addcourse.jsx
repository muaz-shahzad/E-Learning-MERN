import React from 'react'
import Adminnav from '../Adminnav'
// import "../AdminPannel/Adminpannel.css"
import "../Adminpannel.css"
import AddForm from './AddForm'
const Addcourse = () => {
    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav />
                    <AddForm/>
                </main>
            </div>


        </>
    )
}

export default Addcourse