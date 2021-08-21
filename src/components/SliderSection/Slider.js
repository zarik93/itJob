import React from 'react';

const SliderSection = () => {
    return (
        <div className="slider-section section">
            <div className="slide-item bg-parallax" data-bg-image="assets/images/slider/slider-1.jpg" data-overlay="50">
                <div className="container">
                    <div className="slider-content text-center">
                        <h2 className="title">Find Your Next Job</h2>
                        <p>More then <span>1,524</span> job listed here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderSection;