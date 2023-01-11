import React from 'react'
import Adminnav from '../../Adminnav'
import MarketingForm from '../../Forms/MarkForm'

const C8 = () => {
    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav/>
                    <MarketingForm/>
                </main>
            </div>
        </>
    )
}

export default C8