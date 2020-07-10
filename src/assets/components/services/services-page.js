import React, {Fragment, useLayoutEffect, useState, useEffect} from "react";
import Header from "../header";
import Footer from "../footer";
import Player from "../../components/player";
export default function Services() {
    const [little, setLittle] = useState(0);
    const [heightOne, setHeightOne] = useState(150);
    const [widthOne, setWidthtOne] = useState(250);

    const [size, setSize] = useState(0);
    function sizeWidth() {
        useLayoutEffect(() => {
            function updateSize() {
                setSize(window.innerWidth);
            }
            window.addEventListener("resize", updateSize);
            updateSize();
            return () => window.removeEventListener("resize", updateSize);
        }, []);

        return size;
    }
    console.log("fsdsdsdfd :" + sizeWidth());
    let sizeWid;
    sizeWid = sizeWidth();
    useEffect(() => {
        setLittle(sizeWid);
        if (320 < little && little < 480) {
            setHeightOne(150);
            setWidthtOne(250);
        } else if (481 < little && little < 600) {
            setHeightOne(250);
            setWidthtOne(300);
        } else if (600 < little && little < 767) {
            setHeightOne(250);
            setWidthtOne(390);
        } else if (767 < little && little < 1024) {
            setHeightOne(200);
            setWidthtOne(370);
        } else if (1025 < little && little < 1975) {
            setHeightOne(450);
            setWidthtOne(400);
        } else if (little > 1975) {
            setHeightOne(450);
            setWidthtOne(700);
        }
    });

    /*  useEffect(() => {
        if (sizeWid > 450) {
            setHeightOne(350);
        } else {
            setHeightOne(10);
        }
    }); */

    console.log("change :" + little);
    /*   sizeWid = sizeWidth();
    console.log(sizeWid); */
    /*  useEffect(() => {
       // test();
    }, [heightOne]); */
    // console.log(heightOne);
    /*  let testV;
    testV = test();
    console.log(testV); */
    // console.log("test :" + test());

    // console.log(size);

    return (
        <div>
            <Header />
            <section className={"services"}>
                <div className={"services-item"}>
                    <div className={"flex-container"}>
                        <div
                            className={"flex-item"}
                            style={{width: widthOne, height: heightOne}}>
                            <h2>{"Layers"}</h2>
                            <Player
                                height={heightOne}
                                width={widthOne}
                                url={
                                    "https://www.youtube.com/watch?v=Sh2EQZLzBXw"
                                }
                            />
                            <p>
                                {
                                    "Every cut falls under three categories: layered, one-length, or a combination of both, says celebrity hairstylist Dwayne Ross. Layers help lessen density and create movement.'"
                                }
                            </p>
                        </div>
                        <div
                            className={"flex-item"}
                            style={{width: widthOne, height: heightOne}}>
                            <h2>{"Overdirecting"}</h2>
                            <Player
                                height={heightOne}
                                width={widthOne}
                                url={
                                    "https://www.youtube.com/watch?v=IE3Eg-Cp6OI"
                                }
                            />
                            <p>
                                {
                                    "Essentially, the end result is a ton of exaggerated layers. Think: shaggy, rockstar cuts, says Ross."
                                }
                            </p>
                        </div>
                        <div
                            className={"flex-item"}
                            style={{width: widthOne, height: heightOne}}>
                            <h2>{"Thinning"}</h2>
                            <Player
                                height={heightOne}
                                width={widthOne}
                                url={
                                    "https://www.youtube.com/watch?v=FcTIVcYPm0Y"
                                }
                            />
                            <p>
                                {
                                    "To thin with regular shears, also known as 'slithering,' stylists slide an open set of scissors along the shaft."
                                }
                            </p>
                        </div>
                        <div
                            className={"flex-item"}
                            style={{width: widthOne, height: heightOne}}>
                            <h2>{"Cutting Line"}</h2>
                            <Player
                                height={heightOne}
                                width={widthOne}
                                url={
                                    "https://www.youtube.com/watch?v=uO1RnThE-Eg&t=186s"
                                }
                            />
                            <p>
                                {
                                    "For example, when a stylist wants to create a layered look, he will use a vertical cutting line."
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
