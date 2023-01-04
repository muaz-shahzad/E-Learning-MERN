import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "./Heading"
import "./Testimonial.css"

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <div id='heading'>
            <h3 className="About-h3">TESTIMONIAL</h3>
            <h1 style={{ fontSize: "30px" }} className="About-title">Our Successful Students</h1>
          </div>
          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
