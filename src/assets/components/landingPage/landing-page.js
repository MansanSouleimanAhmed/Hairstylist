import React, {Fragment} from "react";
import {Parallax, Background} from "react-parallax";
import Header from "../header";
import Slide from "../slide";
import AntiAgeImg from "../../img/models/anti-age-img.jpg";
import ShortHairImg from "../../img/models/banner/imgFour.jpg";
import FeaturedProductImgOne from "../../img/landing-page/Capture d’écran de 2020-07-01 16-59-11.png";

import FeaturedProductImgTwo from "../../img/landing-page/Capture d’écran de 2020-07-01 19-23-34.png";

import Player from "../player";
import Footer from "../footer";

export default function LandingPage() {
    let url =
        "https://www.youtube.com/watch?v=20Zw7HJStwo&list=PLGQNRg69XpETvMHYznKmPpPAgHLT4OcyN";
    return (
        <Fragment>
            <div className={"landing-page"}>
                <Header />
                <section className={"section-landing-page"}>
                    <div className={"services-introdution"}>
                        <div className={"item-landing-page"}>
                            <div id={"img-one-landing-page"}></div>
                            <div id={"text-one-landing-page"}></div>
                        </div>
                        <div className={"item-landing-page"}>
                            <div id={"img-two-landing-page"}></div>
                            <div id={"text-two-landing-page"}></div>
                        </div>
                        <div className={"item-landing-page"}>
                            <div id={"img-three-landing-page"}></div>
                            <div id={"text-three-landing-page"}></div>
                        </div>
                    </div>

                    <div className={"awarded"}>
                        <h2>{"Awarded"}</h2>
                        <hr />
                        <h3>{"One of the best salon in London"}</h3>
                    </div>
                    <Slide />

                    <div className={"anti-age-hair-container"}>
                        <Parallax
                            bgImage={ShortHairImg}
                            strength={150}
                            className={".img-parallax"}
                            style={{
                                height: "300px",
                                background: "red",
                            }}>
                            {" "}
                            <div className={"anti-age-hair-text"}>
                                <h5>{"WE WANT YOUR HAIR TO LOOK FABULOUS"}</h5>
                                <h1>{"ANTI-AGE YOUR HAIR "}</h1>
                                <p>
                                    {
                                        "Scenester Etsy aesthetic, Cosby sweater keytclaar sustainable forage. Synth vinyl biodiesel, pour-over forage Helvetica selvage XOXO mumblecore literally pop-up locavore. Blue Bottle bicycle rights photo booth, cray single-origin coffee locavore fanny pack American Apparel cornhole hella."
                                    }
                                </p>
                            </div>
                        </Parallax>
                    </div>
                    <div className={"featured-product"}>
                        <div className={"featured-product-item-one"}>
                            <img src={FeaturedProductImgOne} />
                            <div className={"featured-text"}>
                                <h2>{"Expression of EXCELLENCE"}</h2>
                                <p>{"Protect Color’s richness, vibrancy"}</p>
                            </div>
                        </div>
                        <div className={"featured-product-item-two"}>
                            <img src={FeaturedProductImgTwo} />
                        </div>
                        <div className={"featured-product-item-three"}>
                            <div>
                                <Player
                                    width={390}
                                    height={390}
                                    url={
                                        "https://www.youtube.com/watch?v=20Zw7HJStwo&list=PLGQNRg69XpETvMHYznKmPpPAgHLT4OcyN"
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </Fragment>
    );
}
