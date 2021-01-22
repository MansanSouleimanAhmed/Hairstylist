import React from "react";
import HairStraightenerBlackImg from "../../min-image/hair-straightener-black.png";
export default function Hairstraightenerblack() {
    return (
        <div className={"products-slide"}>
            <h2>{"OUR PRODUCTS"}</h2>
            <hr />
            <div className={"img-products"}>
                <img src={HairStraightenerBlackImg} alt={"hairdryer"} />
            </div>
            <h3>{"GHD Air"}</h3>
            <span className={"wrong-price"}>{"£170"}</span>
            <span className={"correct-price"}>{"£100"}</span>
        </div>
    );
}
