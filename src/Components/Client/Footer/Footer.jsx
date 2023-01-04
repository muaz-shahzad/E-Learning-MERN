import React from "react"
import { blog } from "../../../dummydata"
import "../Footer/Footer.css"

const Footer = () => {
    return (
        <>
            <section className='newletter'>
                <div className='container flexSB'>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className='left row'>
                                <h1>Newsletter - Stay tune and get the latest update</h1>
                                <span>Far far away, behind the word mountains</span>
                            </div>
                        </div>
                        <div className="col-lg-5 right">
                            <div className='ema'>
                                <input type='text' placeholder='Enter email address' />
                                <i className='fa fa-paper-plane'></i>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <footer>
                <div className='container padding'>
                    <div className='box logo'>
                        <h1>ACADEMIA</h1>
                        <span style={{color: "green",fontWeight: "bold"}}>ONLINE EDUCATION & LEARNING</span>
                        <p className="footp">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-twitter icon'></i>
                        <i className='fab fa-instagram icon'></i>
                    </div>
                    <div className='box link'>
                        <h6 className="footh3">Explore</h6>
                        <ul className="footul">
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Courses</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className='box link'>
                        <h3 className="footh3">Quick Links</h3>
                        <ul className="footul">
                            <li>Contact Us</li>
                            <li>Pricing</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy</li>
                            <li>Feedbacks</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3 className="footh3">Recent Post</h3>
                        {blog.slice(0, 3).map((val) => (
                            <div className='items flexSB'>
                                <div className='img'>
                                    <img src={val.cover} alt='' />
                                </div>
                                <div className='text'>
                                    <span>
                                        <i className='fa fa-calendar-alt'></i>
                                        <label htmlFor=''>{val.date}</label>
                                    </span>
                                    <span>
                                        <i className='fa fa-user'></i>
                                        <label htmlFor=''>{val.type}</label>
                                    </span>
                                    <h4 className="footh4">{val.title.slice(0, 40)}...</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='box last'>
                        <h3 className="footh3">Have a Questions?</h3>
                        <ul className="footh3">
                            <li className="footque">
                                <i className='fa fa-map'></i>
                               Karachi, Pakistan
                            </li>
                            <li className="footque">
                                <i className='fa fa-phone-alt'></i>
                                +923032195673
                            </li>
                            <li className="footque">
                                <i className='fa fa-paper-plane'></i>
                               muazshahzad667@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className='legal'>
                <p>
                    Copyright ©2023 All rights reserved | Made By M Muaz Shahzad
                </p>
            </div>
        </>
    )
}

export default Footer
