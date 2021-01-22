import React from "react";
import HairdryerImg from "../../min-image/hairdryer.png";
export default function Hairdryer() {
    return (
        <div className={"products-slide"}>
            <h2>{"OUR PRODUCTS"}</h2>
            <hr style={{backgroundColor: "rgb(255, 20, 20)"}} />
            <div className={"img-products"}>
                <img src={HairdryerImg} alt={"hairdryer"} />
            </div>
            <h3>{"GHD Air"}</h3>
            <span className={"wrong-price"}>{"£170"}</span>
            <span className={"correct-price"}>{"£100"}</span>
        </div>
    );
}
