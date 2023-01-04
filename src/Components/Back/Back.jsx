import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()

  return (
    <>
      <section className='back'>
        <h2 style={{color: "#1eb2a6"}}>Home / {location.pathname.split("/")[1]}</h2>
        <h1 style={{color: "#1eb2a6"}}>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
