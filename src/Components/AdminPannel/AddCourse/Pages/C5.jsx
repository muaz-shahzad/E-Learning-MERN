import React from 'react'
import Adminnav from '../../Adminnav'
import SoftwareForm from '../../Forms/SEForm'

const C5 = () => {
    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav />
                    <SoftwareForm />
                </main>
            </div>
        </>
    )
}

export default C5