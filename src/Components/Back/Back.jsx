import React from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "../Back/Back.css"

const Back = ({ title }) => {
  const location = useLocation()
  const navigate = useNavigate();
  // alert(location.pathname)
  // const goBack = () => {
  //   navigate(-1);
  // }

  return (
    <>


      <section className='back'>
      </section>
      <section className='back1'>
        <button className="btn backtbn" >Home / {location.pathname.split("/")[1]}</button>
        <h1 className="mt-2" style={{ color: "white", fontSize: "50px" }}>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
