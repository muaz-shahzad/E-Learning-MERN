import React from "react";
import heroImg from "../../../assests/images/hero-img1.png";
import "../HeroSection/HeroSection.css";


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
                                Finding your own space and utilize better
                                learning options can result in faster than the traditional ways.
                                Enjoy the beauty of our learning!
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
