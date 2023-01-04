import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import heroImg from "../../../assests/images/hero-img1.png";
import "./HeroSection.css";

function HeroSection() {
    return (
        <section>
            <div className="container">
                <div className="row">
                        <div className="col-lg-6" >
                            <div className="hero__content">
                                <h2 className="mb-4">
                                    Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
                                </h2>
                                <p className="mb-5">
                                    Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                                    Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                                    quas officiis et repellat!
                                </p>
                            </div>
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                <button className="btn btnsearch">Search</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={heroImg} alt="" className="img-fluid hero__img" />

                        </div>

                    </div>


            </div>
        </section>
    );
};

export default HeroSection;
