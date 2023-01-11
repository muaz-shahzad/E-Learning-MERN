import React from 'react'
import Adminnav from '../../Adminnav'
import HealthForm from '../../Forms/HealthForm'

const C7 = () => {
    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav/>
                    <HealthForm/>
                </main>
            </div>
        </>
    )
}

export default C7