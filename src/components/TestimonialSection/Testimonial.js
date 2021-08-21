import React from "react";

const Testimonial = () => {
    return (
        <div className="section section-padding bg-parallax" data-bg-image="assets/images/bg/bg-2.jpg"
             data-overlay="65">
            <div className="container">

                <div className="testimonial-slider row">

                    <div className="col">
                        <div className="testimonial text-center text-white">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, modi sed praesentium
                                necessitatibus tenetur neque, veritatis esse voluptatem</p>
                            <img src="assets/images/authors/author-1.jpg" alt=""></img>
                                <h6 className="name">Sharon Harper</h6>
                                <span className="title">Marketer of Hastech</span>
                        </div>
                    </div>

                    <div className="col">
                        <div className="testimonial text-center text-white">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, modi sed praesentium
                                necessitatibus tenetur neque, veritatis esse voluptatem</p>
                            <img src="assets/images/authors/author-2.jpg" alt=""></img>
                                <h6 className="name">Harold McCoy</h6>
                                <span className="title">CEO of Hastech</span>
                        </div>
                    </div>

                    <div className="col">
                        <div className="testimonial text-center text-white">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, modi sed praesentium
                                necessitatibus tenetur neque, veritatis esse voluptatem</p>
                            <img src="assets/images/authors/author-3.jpg" alt=""></img>
                                <h6 className="name">Ronald Wright</h6>
                                <span className="title">Admin of Hastech</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Testimonial;