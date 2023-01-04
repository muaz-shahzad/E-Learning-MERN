import React from "react"
import Back from "../../Back/Back"
import "./Contactus.css"

const Contactus = () => {
    const map = 'https://www.google.com/maps/embed/v1/place?q=Karachi,+Pakistan&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
    return (
        <>
            <Back title='Contact us' />
            <section className='contacts padding'>
                <div className='container shadow flexSB'>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className='conif'>
                                <iframe className="" src={map}>
                                </iframe>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className='right row'>
                                <h1 className="conth1">Contact us</h1>
                                <p>We're open for any suggestion or just to have a chat</p>

                                <div className='items grid2'>
                                    <div className='box'>
                                        <h4 className="conth4">ADDRESS:</h4>
                                        <p className="contp">Karachi, Pakistan</p>
                                    </div>
                                    <div className='box'>
                                        <h4 className="conth4">EMAIL:</h4>
                                        <p className="contp">muazshahzad667@gmail.com</p>
                                    </div>
                                    <div className='box'>
                                        <h4 className="conth4">PHONE:</h4>
                                        <p className="contp">+923032195673</p>
                                    </div>
                                </div>

                                <form action=''>
                                    <div className='flexSB'>
                                        <input type='text' placeholder='Name' />
                                        <input type='email' placeholder='Email' />
                                    </div>
                                    <input type='text' placeholder='Subject' />
                                    <textarea cols='30' rows='10'>
                                        Create a message here...
                                    </textarea>
                                    <button className='primary-btn'>SEND MESSAGE</button>
                                </form>

                                <h3>Follow us here</h3>
                                <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Contactus
