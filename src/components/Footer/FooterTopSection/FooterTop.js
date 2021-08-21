import React from "react";

const FooterTop = () => {
    return (
        <div className="footer-top-section section">
            <div className="container">
                <div className="footer-widget-wrap row">

                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="footer-widget">
                            <div className="footer-widget-about">
                                <img src="assets/images/logo/logo-light.png" alt=""></img>
                                <p>Lorem ipsum dolor sit amet consecte tur adipisicing elit. Maiores officiis quod
                                    quo id inventore quis.</p>

                                <ul className="footer-socail">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="footer-widget">
                            <h6 className="title">Quick links</h6>
                            <div className="footer-widget-link">
                                <ul>
                                    <li><a href="#">Post New Job</a></li>
                                    <li><a href="#">Jobs List</a></li>
                                    <li><a href="#">Candidate List</a></li>
                                    <li><a href="#">Employer List</a></li>
                                    <li><a href="#">Browse Categories</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="footer-widget">
                            <h6 className="title">Tranding Jobs</h6>
                            <div className="footer-widget-link">
                                <ul>
                                    <li><a href="#">Designer</a></li>
                                    <li><a href="#">UI & UX Expert</a></li>
                                    <li><a href="#">Develpoer</a></li>
                                    <li><a href="#">iOS developer</a></li>
                                    <li><a href="#">Front-End developer</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="footer-widget">
                            <h6 className="title">Newsletter</h6>
                            <div className="footer-widget-newsletter">
                                <p>Subscribe to Lawson to get all latest Job, Resume, Company Listing & Blog post to
                                    stay update.</p>
                                {/*<form id="mc-form" className="mc-form">
                                        <input id="mc-email" autoComplete="off" type="email"
                                               placeholder="Enter your e-mail address">
                                            <button id="mc-submit" className="btn"><i className="fa fa-envelope-o"></i>
                                            </button>
                                    </form>*/}
                                <div className="mailchimp-alerts text-centre">
                                    <div className="mailchimp-submitting"></div>
                                    <div className="mailchimp-success text-success"></div>
                                    <div className="mailchimp-error text-danger"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FooterTop;