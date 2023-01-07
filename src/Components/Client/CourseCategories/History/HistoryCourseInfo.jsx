import React from 'react'
import img1 from "../../../../assests/images/about-us.png"

const HistoryCourseInfo = () => {
    return (
        <>
            <div className="sg-section">
                <div className="section-content course-details bg-white section-padding">


                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb-5">
                                <div className="sa-course ">
                                    <div className="course-thumb">
                                        <img src={img1} alt="Image" className="img-fluid" />
                                    </div>
                                    <div className="course-info " style={{ textAlign: "justify" }}>
                                        <h2 className="title mt-2">Visual Basic Web Course With Live Project</h2>
                                        <p>Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Dolor autem voluptatibus aspernatur, quidem possimus modi vero voluptas dicta quo nisi consequatur quod illum, ex, numquam neque doloremque ducimus magnam culpa?</p>
                                        <p>Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Dolor autem voluptatibus aspernatur, quidem possimus modi vero voluptas dicta quo nisi consequatur quod illum, ex, numquam neque doloremque ducimus magnam culpa?</p>
                                        <p>Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Dolor autem voluptatibus aspernatur, quidem possimus modi vero voluptas dicta quo nisi consequatur quod illum, ex, numquam neque doloremque ducimus magnam culpa?</p>
                                        <p>Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Dolor autem voluptatibus aspernatur, quidem possimus modi vero voluptas dicta quo nisi consequatur quod illum, ex, numquam neque doloremque ducimus magnam culpa?</p>

                                        <div className="description-tab ">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="btn btn-light" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Description</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="btn btn-light" id="course-info-tab" data-bs-toggle="tab" data-bs-target="#course-info" type="button" role="tab" aria-controls="course-info" aria-selected="false">Course info</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="btn btn-light" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="btn btn-light" id="comments-tab" data-bs-toggle="tab" data-bs-target="#comments" type="button" role="tab" aria-controls="comments" aria-selected="false">Comments</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active mt-4" id="description" role="tabpanel" aria-labelledby="description-tab">
                                                    <h6 style={{ fontSize: "22px" }}>Course Details</h6>

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugit eos quisquam sequi minima beatae ullam necessitatibus vel quae architecto, similique dicta voluptate iusto voluptatem suscipit, maxime vero rerum consequuntur quaerat dignissimos minus accusantium. Repellendus eum nihil aliquid quis soluta, quia ducimus omnis pariatur, illo!</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugit eos quisquam sequi minima beatae ullam necessitatibus vel quae architecto, similique dicta voluptate iusto voluptatem suscipit, maxime vero rerum consequuntur quaerat dignissimos minus accusantium. Repellendus eum nihil aliquid quis soluta, quia ducimus omnis pariatur, illo!</p>
                                                    <div className="">
                                                        <h6 style={{ fontSize: "22px" }}>Requirements</h6>
                                                        <ul className='global-list'>
                                                            <li className='coursedetail_list'>Any version of Adobe Illustrator, preferably not older than Illustrator CS6. Ideally Illustrator CC (Creative Cloud)</li>
                                                            <li className='coursedetail_list'>Prior knowledge is not needed</li>
                                                            <li className='coursedetail_list'>Exercise Files and Study Guides are provided</li>
                                                            <li className='coursedetail_list'>Permanent Software 2020, with activetor</li>
                                                        </ul>
                                                    </div>

                                                    <div className="you-learn mb-5">
                                                        <h6 style={{ fontSize: "22px" }}>What you'll learn</h6>
                                                        <div className='container-fluid'>
                                                            <div className='row'>
                                                                <div className='col-lg-6 '>
                                                                    <ul className="global-list">
                                                                        <li className='coursedetail_list1 mt-2'> Logo Design</li>
                                                                        <li className='coursedetail_list1 mt-2'> Preparing graphics for web and print</li>
                                                                        <li className='coursedetail_list1 mt-2'> Creative vector illustrations</li>
                                                                        <li className='coursedetail_list1 mt-2'> Designing infographics</li>
                                                                        <li className='coursedetail_list1 mt-2'> Game theme Design</li>
                                                                    </ul>
                                                                </div>
                                                                <div className='col-lg-6'>
                                                                    <ul className="global-list">
                                                                        <li className='coursedetail_list1 mt-2'> Turning photographs int vector artwork</li>
                                                                        <li className='coursedetail_list1 mt-2'> Working with type in creative ways</li>
                                                                        <li className='coursedetail_list1 mt-2'> Vectorizing and color traced hand drawing</li>
                                                                        <li className='coursedetail_list1 mt-2'> Flyer and Business Card Design</li>
                                                                        <li className='coursedetail_list1 mt-2'> Learn illustrator 2020 version & Software</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    {/* <a href="#" className="btn btn-primary"><span className="mdi mdi-name mdi-cart-outline"></span> Order Now</a> */}

                                                </div>
                                                <div className="tab-pane fade mt-4" id="course-info" role="tabpanel" aria-labelledby="course-info-tab">
                                                    <h6 style={{ fontSize: "22px" }}>Course Information</h6>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat eligendi, quo magni amet voluptatum enim quibusdam vero commodi unde! Deleniti, veniam eaque? Veniam, dolorum! Eaque reprehenderit deleniti impedit explicabo ex?</p>
                                                </div>
                                                <div className="tab-pane fade mt-4" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                                    <h6 style={{ fontSize: "22px" }}>Student Feedback</h6>
                                                    <div>
                                                        <p>
                                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, porro beatae ratione asperiores praesentium quisquam. Quidem, magnam ut molestiae vero mollitia dicta, facere, provident temporibus earum iste debitis praesentium?
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade mt-4" id="comments" role="tabpanel" aria-labelledby="comments-tab">
                                                    <h6 style={{ fontSize: "22px" }}>Leave a Comment</h6>
                                                    <div className="comments-form">
                                                        <form action="#">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <input type="text" className="form-control" placeholder="name" />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <input type="email" className="form-control" placeholder="Email" />
                                                                </div>
                                                            </div>
                                                            <textarea name="message" className="form-control" required="required" rows="7" placeholder="Write a comment..."></textarea>
                                                            <button type="submit" className="btn btn-primary">Submit</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default HistoryCourseInfo