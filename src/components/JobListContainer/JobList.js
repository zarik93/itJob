import React from "react";
import ItemJob from "./ItemJob/ItemJob";
import SearchJob from "./FilterJob/SearchJob";

const JobsList = (props) => {

        return (
            <>
                <div className="page-heading-section section bg-parallax" data-bg-image="assets/images/bg/bg-1.jpg"
                     data-overlay="50">
                    <div className="container">
                        <div className="page-heading-content text-center">
                            <h3 className="title">Browse Jobs</h3>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Jobs</li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/*{spinner}*/}
                {/*{errorMessage}*/}
                {/*{spinner}*/}
                {/*{content}*/}


                <div className="section section-padding">
                    <div className="container">
                        <div className="row mb-n5">

                            <div className="col-lg-8 col-12 mb-5 pr-lg-5">

                                <div className="job-list-toolbar">
                                    <p>Showing 1 – 10 of 34 results</p>
                                    <p>Sort by:
                                        <select>
                                            <option>Most Recent</option>
                                            <option>Top Rated</option>
                                            <option>Most Popular</option>
                                        </select>
                                    </p>
                                </div>

                               {/*{itemList}*/}
                               {/*<ItemJob/>*/}

                                <div>
                                    <ItemJob job={props.job}/>
                                </div>

                            </div>

                            <div className="col-lg-4 col-12 mb-5">
                                <div className="sidebar-wrap">
                                    <div className="sidebar-widget">
                                        <div className="inner">
                                            <h6 className="title">Search </h6>
                                            <SearchJob job={props.job}/>
                                            {/*<form action="#">
                                    <input type="text" placeholder="e.g. web design">
                                </form>*/}
                                        </div>
                                    </div>
                                    <div className="sidebar-widget">
                                        <div className="inner">
                                            <h6 className="title">Category</h6>
                                            {/*<form action="#">
                                    <select>
                                        <option value="1">Any category</option>
                                        <option value="2">Web Designer</option>
                                        <option value="3">Web Developer</option>
                                        <option value="4">Graphic Designer</option>
                                        <option value="5">App Developer</option>
                                        <option value="6">UI &amp; UX Expert</option>
                                    </select>
                                </form>*/}
                                        </div>
                                    </div>
                                    <div className="sidebar-widget">
                                        <div className="inner">
                                            <h6 className="title">Location</h6>
                                            {/*<form action="#">
                                    <input type="text" placeholder="Location">
                                </form>*/}
                                        </div>
                                    </div>
                                    <div className="sidebar-widget">
                                        <div className="inner">
                                            <h6 className="title">Job Type</h6>
                                            {/*<form action="#" className="mb-n1">
                                    <div className="custom-control custom-checkbox mb-1">
                                        <input type="checkbox" className="custom-control-input" id="jobtype0">
                                            <label className="custom-control-label" htmlFor="jobtype0">All type</label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-1">
                                        <input type="checkbox" className="custom-control-input" id="jobtype1">
                                            <label className="custom-control-label" htmlFor="jobtype1">Full Time</label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-1">
                                        <input type="checkbox" className="custom-control-input" id="jobtype2">
                                            <label className="custom-control-label" htmlFor="jobtype2">Part Time</label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-1">
                                        <input type="checkbox" className="custom-control-input" id="jobtype3">
                                            <label className="custom-control-label" htmlFor="jobtype3">Freelance</label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-1">
                                        <input type="checkbox" className="custom-control-input" id="jobtype4">
                                            <label className="custom-control-label"
                                                   htmlFor="jobtype4">Internship</label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-1">
                                        <input type="checkbox" className="custom-control-input" id="jobtype5">
                                            <label className="custom-control-label" htmlFor="jobtype5">Temporary</label>
                                    </div>
                                </form>*/}
                                        </div>
                                    </div>
                                    <div className="sidebar-widget">
                                        <div className="inner">
                                            <h6 className="title">Salary Range</h6>
                                            {/*<form action="#">
                                    <input type="text" id="salary-range" name="salary-range" className="range-slider"
                                           value=""/>
                                </form>*/}
                                        </div>
                                    </div>

                                    <div className="sidebar-widget">
                                        <div className="inner">
                                            <h6 className="title">Experince</h6>
                                            {/*<form action="#" className="mb-n1">
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="jobExperince"
                                               id="jobExperince0">
                                            <label className="custom-control-label" htmlFor="jobExperince0">Any
                                                Experince</label>
                                    </div>
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="jobExperince"
                                               id="jobExperince1">
                                            <label className="custom-control-label" htmlFor="jobExperince1">1 Year to 2
                                                Year</label>
                                    </div>
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="jobExperince"
                                               id="jobExperince2">
                                            <label className="custom-control-label" htmlFor="jobExperince2">2 Year to 3
                                                Year</label>
                                    </div>
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="jobExperince"
                                               id="jobExperince3">
                                            <label className="custom-control-label" htmlFor="jobExperince3">3 Year to 4
                                                Year</label>
                                    </div>
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="jobExperince"
                                               id="jobExperince4">
                                            <label className="custom-control-label" htmlFor="jobExperince4">4 Year to 5
                                                Year</label>
                                    </div>
                                </form>*/}
                                        </div>
                                    </div>
                                    <div className="sidebar-widget">
                                        <div className="inner">
                                            <h6 className="title">Date Posted</h6>
                                            {/*<form action="#" className="mb-n1">
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="jobDatePosted"
                                               id="jobDatePosted0">
                                            <label className="custom-control-label" htmlFor="jobDatePosted0">Any
                                                Date</label>
                                    </div>
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="jobDatePosted"
                                               id="jobDatePosted1">
                                            <label className="custom-control-label" htmlFor="jobDatePosted1">Last
                                                Hour</label>
                                    </div>
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="jobDatePosted"
                                               id="jobDatePosted2">
                                            <label className="custom-control-label" htmlFor="jobDatePosted2">Last 24
                                                Hours</label>
                                    </div>
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="jobDatePosted"
                                               id="jobDatePosted3">
                                            <label className="custom-control-label" htmlFor="jobDatePosted3">Last 7
                                                Days</label>
                                    </div>
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="jobDatePosted"
                                               id="jobDatePosted4">
                                            <label className="custom-control-label" htmlFor="jobDatePosted4">Last 14
                                                days</label>
                                    </div>
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="jobDatePosted"
                                               id="jobDatePosted5">
                                            <label className="custom-control-label" htmlFor="jobDatePosted5">Last 30
                                                days</label>
                                    </div>
                                </form>*/}
                                        </div>
                                    </div>

                                    <div className="sidebar-widget">
                                        <div className="inner">
                                            <h6 className="title">Qualification</h6>
                                            {/*<form action="#" className="mb-n1">
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="jobQualification"
                                               id="jobQualification0">
                                            <label className="custom-control-label"
                                                   htmlFor="jobQualification0">Matriculation</label>
                                    </div>
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="jobQualification"
                                               id="jobQualification1">
                                            <label className="custom-control-label"
                                                   htmlFor="jobQualification1">Intermidiate</label>
                                    </div>
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="jobQualification"
                                               id="jobQualification2">
                                            <label className="custom-control-label"
                                                   htmlFor="jobQualification2">Gradute</label>
                                    </div>
                                </form>*/}
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

export default JobsList