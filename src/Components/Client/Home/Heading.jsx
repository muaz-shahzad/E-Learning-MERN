import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading'>
        <h3 className="heading-h3">{subtitle} </h3>
        <h1 className="heading-title">{title} </h1>
      </div>
    </>
  )
}

export default Heading
