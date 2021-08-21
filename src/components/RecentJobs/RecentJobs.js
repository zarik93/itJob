import React from "react";

const RecentJobs = () => {
    return (
        <>
            <div className="section section-padding">
                <div className="container">
                    <div className="section-title">
                        <h2 className="title">Latest Jobs</h2>
                        <p>Here's the most recent job listed on the website.</p>
                    </div>

                    <div className="job-list-wrap">

                        <a href="job-single.html" className="job-list">
                            <div className="company-logo col-auto">
                                <img src="assets/images/companies/company-1.png" alt="Company Logo"></img>
                            </div>
                            <div className="salary-type col-auto order-sm-3">
                                <span className="salary-range">$5000 - $8000</span>
                                <span className="badge badge-success">Full Time</span>
                            </div>
                            <div className="content col">
                                <h6 className="title">Full Stack Backend Developer</h6>
                                <ul className="meta">
                                    <li><strong className="text-primary">Envato</strong></li>
                                    <li><i className="fa fa-map-marker"></i> 2020 Willshire Glen, GA-30009</li>
                                </ul>
                            </div>
                        </a>

                    </div>

                    <div className="text-center mt-4 mt-lg-5">
                        <a href="job-list.html" className="btn btn-primary">View All Jobs</a>
                    </div>

                </div>
            </div>
        </>

    )
}

export default RecentJobs;