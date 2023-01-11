import React from 'react'
import Adminnav from '../../Adminnav'
import UIForm from '../../Forms/UIForm'

const C1 = () => {
    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav/>
                    <UIForm/>
                </main>
            </div>
        </>
    )
}

export default C1