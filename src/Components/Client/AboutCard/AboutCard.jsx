import React from "react"
import "../AboutCard/AboutCard.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import { homeAbout } from "../../../dummydata"

const AboutCard = () => {
    return (
        <>
            {/* <Header />
            <Hero /> */}
            <section className='aboutHome'>
                <div className='container flexSB'>
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-fluid" width={"100%"} src='./images/about.webp' alt='' />
                        </div>
                        <div className="col-lg-6">
                            <div id='heading'>
                                <h3 className="About-h3">LEARN ANYTHING</h3>
                                <h1 style={{ fontSize: "30px" }} className="About-title">Benefits About Online Learning Expertise</h1>
                            </div>
                            <div className='items'>
                                {homeAbout.map((val,key) => {
                                    return (
                                        <div className='item flexSB'  key={val.id}>
                                            <div className='img-fluid'>
                                                <img src={val.cover} alt='' />
                                            </div>
                                            <div className='text ms-3'>
                                                <h2>{val.title}</h2>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutCard
