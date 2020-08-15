import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hairdryer from "./landingPage/hairdryer";
import Hairdryerblack from "./landingPage/hairdryerblack";
import Hairdryergray from "./landingPage/hairdryergray";
import Hairstraightenerblack from "./landingPage/hairstraightenerblack";
import Slider from "react-slick";

export default function Slide() {
    const renderSlides = () =>
        [
            <Hairdryer />,
            <Hairdryerblack />,
            <Hairdryergray />,
            <Hairstraightenerblack />,
        ].map((num, index) => <div key={index}>{num}</div>);

    return (
        <div className={"slide"}>
            <Slider
                dots={true}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={3000}>
                {renderSlides()}
            </Slider>
        </div>
    );
}
