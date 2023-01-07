import React from 'react'
import "../Courses/Courses.css"


function BrowseCourse(props) {
    return (
        <>


            <div className='box' id={props.id} onClick={() => {
                    props.Selected_Image(props.id)
                }}>
                <div className='img' >
                    <img src={props.cover} />
                    <img src={props.hoverCover} alt='' className='show' />
                </div>
                <h1>{props.coursename}</h1>

                <span>{props.course}</span>
            </div>

        </>
    )
}

export default BrowseCourse