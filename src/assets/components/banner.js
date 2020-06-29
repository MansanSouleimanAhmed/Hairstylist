import React, {useState, useEffect} from "react";
import ImgOne from "./../img/models/banner/blond-girl .jpg";
import ImgTwo from "./../img/models/banner/test5.jpg";
import ImgThree from "./../img/models/banner/imgone.jpg";
import ImgBanner from "./landingPage/img";
import ImgButtonRignt from "./../img/lightbox-next.png";
import ImgButtonLeft from "./../img/lightbox-prev.png";

const Banner = () => {
    let arrayBanner = [
        <ImgBanner src={ImgOne} props={"one"} />,
        <ImgBanner src={ImgTwo} props={"two"} />,
        <ImgBanner src={ImgThree} props={"three"} />,
    ];
    const [translateXValue, settranslateXValue] = useState(0);
    const slideLeft = () => {
        translateXValue === 0
            ? settranslateXValue(0)
            : settranslateXValue(translateXValue + 100);
        console.log(translateXValue);
    };
    const slideRight = () => {
        translateXValue === -100 * (arrayBanner.length - 1)
            ? settranslateXValue(0)
            : settranslateXValue(translateXValue - 100);
    };
    /* useEffect(() => {
        var init = setInterval(() => {
            //settranslateXValue(translateXValue - 100);
            // clear interval on re-render to avoid memory leaks
            console.log(translateXValue);
            if (translateXValue === -300) {
                settranslateXValue(0);
            }
        }, 2800); */
    /*  return () => clearInterval(init);
    }, [translateXValue]); */
    return (
        <div className={"banner-contain"}>
            {arrayBanner.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={"banner-item"}
                        style={{transform: `translateX(${translateXValue}%)`}}>
                        {item}
                    </div>
                );
            })}
            <div className={"title-buttons-container"}>
                <ul>
                    <li>
                        <img
                            src={ImgButtonLeft}
                            className={"buttons-header"}
                            id={"left-button"}
                            onClick={slideLeft}
                        />
                    </li>
                    <li>
                        <div className={"title"}>
                            <h1>{"Hairstyle"}</h1>
                        </div>
                    </li>
                    <li>
                        <img
                            src={ImgButtonRignt}
                            className={"buttons-header"}
                            id={"right-button"}
                            onClick={slideRight}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Banner;
