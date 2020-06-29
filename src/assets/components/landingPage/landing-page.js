import React, {Fragment} from "react";
import Header from "../header";
import Slide from "../slide";
import AntiAgeImg from "../../img/models/anti-age-img.jpg";
export default function LandingPage() {
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
                        <div className={"anti-age-img"}>
                            <img src={AntiAgeImg} />
                        </div>
                        <div className={"anti-age-hair-text"}>
                            <h5>{"WE WANT YOUR HAIR TO LOOK FABULOUS"}</h5>
                            <h1>{"ANTI-AGE YOUR HAIR "}</h1>
                            <p>
                                {
                                    "Scenester Etsy aesthetic, Cosby sweater keytclaar sustainable forage. Synth vinyl biodiesel, pour-over forage Helvetica selvage XOXO mumblecore literally pop-up locavore. Blue Bottle bicycle rights photo booth, cray single-origin coffee locavore fanny pack American Apparel cornhole hella."
                                }
                            </p>
                        </div>
                    </div>
                </section>
                {/* <section className={"about-us"}>
                     <div className={"background-img"}>
                        <img src={BackgrondImg} />
                    </div> 
                </section>*/}
            </div>
        </Fragment>
    );
}
