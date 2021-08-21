import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col">
                        <div className="header-logo">

                            <Link to="/"><img src="logo-light.png" ></img></Link>
                            {/*assets/images/logo/logo-light.png*/}
                        </div>
                    </div>
                    <div className="col-auto d-lg-none d-flex align-items-center">
                        <button className="offcanvas-toggle">
                            <span></span>
                        </button>
                    </div>
                    <div className="header-links col-auto order-lg-3">
                        <Link to="#" data-toggle="modal" data-target="#loginSignupModal" data-target-sub="#login">Login</Link>
                        <span>or</span>
                        <Link to="#" data-toggle="modal" data-target="#loginSignupModal" data-target-sub="#signup">Sign
                            up</Link>
                    </div>
                    <nav id="main-menu" className="main-menu col-lg-auto order-lg-2">
                        <ul>
                            <li className="has-children"><Link to="/">Home</Link>
                                {/*<ul className="sub-menu">
                                    <li><Link to="index.html">Home One</a></li>
                                    <li><Link to="index-2.html">Home Two</a></li>
                                </ul>*/}
                            </li>
                            <li className="has-children"><Link to="job-list">Jobs</Link>
                                {/*<ul className="sub-menu">
                                    <li><Link to="job-list.html">Job List</a></li>
                                    <li><Link to="job-single.html">Job Single</a></li>
                                </ul>*/}
                            </li>
                            <li><Link to="company-list.html">Company</Link>
                                {/*<ul className="sub-menu">
                                    <li><Link to="company-list.html">Company List</a></li>
                                    <li><Link to="company-single.html">Company Single</a></li>
                                    <li><Link to="create-job.html">Create Job</a></li>
                                </ul>*/}
                            </li>
                            <li><Link to="#">Pages</Link>
                                <ul className="sub-menu">
                                    <li><Link to="about-us.html">About Us</Link></li>
                                    <li><Link to="faq.html">FAQ'S</Link></li>
                                    <li><Link to="pricing.html">Pricing</Link></li>
                                </ul>
                            </li>
                            <li><Link to="blog.html">Blog</Link>
                                {/*<ul className="sub-menu">
                                    <li><Link to="blog.html">Blog</a></li>
                                    <li><Link to="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                    <li><Link to="blog-single.html">Blog Single</a></li>
                                </ul>*/}
                            </li>
                            <li><Link to="contact.html">Contact us</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;