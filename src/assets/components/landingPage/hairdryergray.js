import React from "react";
import HairdryerGrayImg from "../../img/products-to-sell/hairdryer-gray.png";
export default function Hairdryergray() {
    return (
        <div className={"products-slide"}>
            <h2>{"OUR PRODUCTS"}</h2>
            <hr />
            <div className={"img-products"}>
                <img src={HairdryerGrayImg} alt={"hairdryer"} />
            </div>
            <h3>{"GHD Air"}</h3>
            <span className={"wrong-price"}>{"£170"}</span>
            <span className={"correct-price"}>{"£100"}</span>
        </div>
    );
}
