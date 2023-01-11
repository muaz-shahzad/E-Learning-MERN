import React from 'react'
import Adminnav from '../../Adminnav'
import WebForm from '../../Forms/WebForm'

const C12 = () => {
    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav/>
                    <WebForm/>
                </main>
            </div>
        </>
    )
}

export default C12