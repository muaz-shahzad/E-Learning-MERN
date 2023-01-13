import React from 'react'
import image1 from "../../../assests/images/AboutUs.jpg"
import image2 from "../../../assests/images/AboutUs2.jpg"



function Aboutwin() {
    return (
        <>
            <div className="sa-section mt-5">
                <div className="section-content sa-about section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <div className="">
                                    <h2>Academic and Non-Academic Courses</h2>
                                    <p>We offers a broad range of online learning in both core academic and non-academic & enrichment skills to our student community.</p>
                                    <ul className="global-list">
                                        <p>Our programs entail individually tailored curriculum and one-on-one interractive sessions designed to help children develop a renewed interest in learning.</p>
                                        <p>In selected areas including PSAT/SAT & High school academic courses, we provide learning in small groups to provide education affordable to every pocket.</p>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about__img about__content">
                                    <img src={image1} alt="Image" className="img-fluid" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* About 2 */}

            <section className='mt-5'>
                <div className="sa-section mt-5 mb-5">
                    <div className="section-content sa-about section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="about__img">
                                        <img src={image2} alt="Image" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-6 align-self-center about__content">
                                    <div className="about-info">
                                        <h2>Live & Affordable Classes</h2>
                                        <p>
                                            We firmly believe that teacher-student interaction is imperative
                                            for grasping and maintaining a child’s
                                            interest in learning. However, achieving this objective shouldn’t cost a fortune to a parent.
                                        </p>
                                        <ul className="global-list">
                                            <p> We provides Live classes which are affordable & involve open communication between the teacher and student.</p>
                                            <p> Every learning session will be on a path leading to the child’s goal.</p>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutwin