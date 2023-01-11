import React from 'react'
import Adminnav from '../../Adminnav'
import HistoryForm from '../../Forms/HistoryForm'

const C4 = () => {
    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav/>
                    <HistoryForm/>
                </main>
            </div>
        </>
    )
}

export default C4