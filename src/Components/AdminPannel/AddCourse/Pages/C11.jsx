import React from 'react'
import Adminnav from '../../Adminnav'
import BusinessForm from '../../Forms/BusinessForm'

const C11 = () => {
    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav/>
                    <BusinessForm/>
                </main>
            </div>
        </>
    )
}

export default C11