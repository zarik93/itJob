import React from "react";

const FunFact = () => {
    return (
        <div className="section section-padding bg-parallax" data-bg-image="assets/images/bg/bg-1.jpg"
             data-overlay="50">
            <div className="container">
                <div className="funfact-wrap row">

                    <div className="funfact col-md-3 col-sm-6 col-12">
                        <span className="counter">1354</span>
                        <span className="title">Job Post</span>
                    </div>

                    <div className="funfact col-md-3 col-sm-6 col-12">
                        <span className="counter">1741</span>
                        <span className="title">Members</span>
                    </div>

                    <div className="funfact col-md-3 col-sm-6 col-12">
                        <span className="counter">1204</span>
                        <span className="title">Resume</span>
                    </div>

                    <div className="funfact col-md-3 col-sm-6 col-12">
                        <span className="counter">142</span>
                        <span className="title">Company</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FunFact;