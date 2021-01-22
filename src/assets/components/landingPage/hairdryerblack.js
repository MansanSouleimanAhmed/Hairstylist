import React from "react";
import HairdryerBlackImg from "../../min-image/hairdryer-black.png";
export default function Hairdryerblack() {
    return (
        <div className={"products-slide"}>
            <h2>{"OUR PRODUCTS"}</h2>
            <hr />
            <div className={"img-products"}>
                <img src={HairdryerBlackImg} alt={"hairdryer"} />
            </div>
            <h3>{"GHD Air"}</h3>
            <span className={"wrong-price"}>{"£170"}</span>
            <span className={"correct-price"}>{"£100"}</span>
        </div>
    );
}
