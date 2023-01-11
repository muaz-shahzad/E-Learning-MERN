import React from 'react'
import Adminnav from '../../Adminnav'
import MusicForm from '../../Forms/MusicForm'

const C10 = () => {
    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav/>
                    <MusicForm/>
                </main>
            </div>
        </>
    )
}

export default C10