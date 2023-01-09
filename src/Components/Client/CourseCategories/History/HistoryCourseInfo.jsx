import React from 'react'
import img1 from "../../../../assests/images/about-us.png"
import { UIData } from '../../../../dummydata';
import { json, useParams } from 'react-router'


const HistoryCourseInfo = () => {

    const { id } = useParams();
    const imageUrl = UIData[id].imgUrl
    console.log("Image url ", imageUrl)
    var newimg = JSON.stringify((imageUrl));
    console.log("Json img ", newimg)
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
                                        <h2 className="title mt-2">{UIData[id].title}</h2>
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
                                                            <textarea name="message" className="form-control" required="required" rows="7" placeholder="Write a comment..."></textarea>
                                                            <button type="submit" className="btn btn-primary">Submit</button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className='text-end'>
                                                    <button className='btn text-end'>Download</button>
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