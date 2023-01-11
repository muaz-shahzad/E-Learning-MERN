import React from 'react'
import Adminnav from '../../Adminnav'
import ComputerForm from '../../Forms/CSForm'

const C3 = () => {
    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav/>
                    <ComputerForm/>
                </main>
            </div>
        </>
    )
}

export default C3