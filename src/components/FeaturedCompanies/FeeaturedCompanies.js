import React from "react";

const FeaturedCompany = () => {
    return (
        <div className="section section-padding">
            <div className="container">
                <div className="section-title">
                    <h2 className="title">Featured Companies</h2>
                    <p>Here's the most job listed by those companies.</p>
                </div>

                <div className="company-slider row">

                    <div className="col">
                        <a href="company-single.html" className="feature-company">
                            <span className="company-logo">
                                <img src="assets/images/companies/company-1.png" alt="company-1"></img>
                                </span>
                            <h6 className="title">Envato</h6>
                            <span className="open-job">2 open positions</span>
                        </a>
                    </div>

                    <div className="col">
                        <a href="company-single.html" className="feature-company">
                            <span className="company-logo">
                                <img src="assets/images/companies/company-2.png" alt="company-1"></img>
                                </span>
                            <h6 className="title">Astha</h6>
                            <span className="open-job">1 open positions</span>
                        </a>
                    </div>

                    <div className="col">
                        <a href="company-single.html" className="feature-company">
                            <span className="company-logo">
                                <img src="assets/images/companies/company-3.png" alt="company-1"></img>
                                </span>
                            <h6 className="title">Github</h6>
                            <span className="open-job">4 open positions</span>
                        </a>
                    </div>

                    <div className="col">
                        <a href="company-single.html" className="feature-company">
                            <span className="company-logo">
                                <img src="assets/images/companies/company-4.png" alt="company-1"></img>
                                </span>
                            <h6 className="title">Medicore</h6>
                            <span className="open-job">1 open positions</span>
                        </a>
                    </div>

                    <div className="col">
                        <a href="company-single.html" className="feature-company">
                            <span className="company-logo"><img src="assets/images/companies/company-5.png" alt="company-1"></img>
                            </span>
                            <h6 className="title">Greensoul</h6>
                            <span className="open-job">1 open positions</span>
                        </a>
                    </div>

                    <div className="col">
                        <a href="company-single.html" className="feature-company">
                            <span className="company-logo"><img src="assets/images/companies/company-6.png" alt="company-1"></img>
                            </span>
                            <h6 className="title">Generous</h6>
                            <span className="open-job">2 open positions</span>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FeaturedCompany;