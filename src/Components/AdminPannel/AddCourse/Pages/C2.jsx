import React from 'react'
import Adminnav from '../../Adminnav'
import ArtForm from '../../Forms/ArtForm'

const C2 = () => {
    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav/>
                   <ArtForm/>
                </main>
            </div>
        </>
    )
}

export default C2