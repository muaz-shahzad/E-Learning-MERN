import React from 'react'
import Adminnav from '../../Adminnav'
import GraphicForm from '../../Forms/GUIForm'

const C9 = () => {
    return (
        <>
            <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav/>
                    <GraphicForm/>
                </main>
            </div>
        </>
    )
}

export default C9