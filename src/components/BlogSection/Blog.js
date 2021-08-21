import React from "react";

const Blog = () => {
    return (
        <div className="section section-padding">
            <div className="container">

                <div className="section-title">
                    <h3 className="title">Our Blog</h3>
                    <p>Get more tips & tricks from out blog post.</p>
                </div>

                <div className="blog-slider row">

                    <div className="col">
                        <div className="blog">
                            <div className="media">
                                <a href="blog-single.html"><img src="assets/images/blog/blog-1.jpg" alt=""></img></a>
                            </div>
                            <div className="content">
                                <h6 className="title"><a href="blog-single.html">The Top 5 Job Interview Questions For
                                    IT Professional</a></h6>
                                <ul className="meta">
                                    <li>Posted on 25 Jan, 2019</li>
                                    <li><a href="#">3 Comments</a></li>
                                </ul>
                                <div className="desc">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat
                                        fugit voluptates ut rem vitae.</p>
                                </div>
                                <a href="blog-single.html" className="read-more">Read More <i
                                    className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="blog">
                            <div className="media">
                                <a href="blog-single.html"><img src="assets/images/blog/blog-2.jpg" alt=""></img></a>
                            </div>
                            <div className="content">
                                <h6 className="title"><a href="blog-single.html">7 Careers To Consider If You Love
                                    Traveling</a></h6>
                                <ul className="meta">
                                    <li>Posted on 25 Jan, 2019</li>
                                    <li><a href="#">3 Comments</a></li>
                                </ul>
                                <div className="desc">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat
                                        fugit voluptates ut rem vitae.</p>
                                </div>
                                <a href="blog-single.html" className="read-more">Read More <i
                                    className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="blog">
                            <div className="media">
                                <a href="blog-single.html"><img src="assets/images/blog/blog-3.jpg" alt=""></img></a>
                            </div>
                            <div className="content">
                                <h6 className="title"><a href="blog-single.html">When the Perfect Candidate Turns Out To
                                    Be an Imperfect Fit</a></h6>
                                <ul className="meta">
                                    <li>Posted on 25 Jan, 2019</li>
                                    <li><a href="#">3 Comments</a></li>
                                </ul>
                                <div className="desc">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat
                                        fugit voluptates ut rem vitae.</p>
                                </div>
                                <a href="blog-single.html" className="read-more">Read More <i
                                    className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Blog;