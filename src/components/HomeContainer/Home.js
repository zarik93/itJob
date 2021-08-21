import SliderSection from "../SliderSection/Slider";
import Login from "../Login/Login";
import SearchSection from "../SearchSection/Search";
import RecentJobs from "../RecentJobs/RecentJobs";
import FunFact from "../FunFactSection/FunFact";
import FeaturedCompany from "../FeaturedCompanies/FeeaturedCompanies";
import Testimonial from "../TestimonialSection/Testimonial";
import Blog from "../BlogSection/Blog";
import React from "react";

class Home extends React.Component {
    render() {
        return (
            <>
                <SliderSection/>
                <Login/>
                <SearchSection/>
                <RecentJobs/>
                <FunFact/>
                <FeaturedCompany/>
                <Testimonial/>
                <Blog/>
            </>

            )
    }
}

export default Home;