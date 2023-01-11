import React from 'react'
import Adminnav from '../../Adminnav'
import SecureForm from '../../Forms/SecureForm'

const C6 = () => {
    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav/>
                    <SecureForm/>
                </main>
            </div>
        </>
    )
}

export default C6