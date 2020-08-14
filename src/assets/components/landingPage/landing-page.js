import React, {
    Fragment,
    useLayoutEffect,
    useState,
    useEffect,
    useRef,
} from "react";
import {Parallax, Background} from "react-parallax";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../header";
import Slide from "../slide";
import AntiAgeImg from "../../img/models/anti-age-img.jpg";
import ShortHairImg from "../../img/models/banner/imgFour.jpg";
import FeaturedProductImgOne from "../../img/landing-page/Capture d’écran de 2020-07-01 16-59-11.png";
import {useSpring, animated} from "react-spring";
import FeaturedProductImgTwo from "../../img/landing-page/Capture d’écran de 2020-07-01 19-23-34.png";

import Player from "../player";
import Footer from "../footer";

export default function LandingPage() {
    const [divSize, setDivsize] = useState(0);
    const [antiAge, setantiAge] = useState(0);
    const [arrayQueries, setarrayQueries] = useState([]);
    const [leftToggle, setLeftToggle] = useState(false);
    const [rightToggle, setRightToggle] = useState(false);
    const divHeight = useRef(0);
    const [showCommentsTop, setShowCommentsTop] = useState(0);
    const propsLeft = useSpring({
        to: [{left: "0%", color: "rgb(14,26,19)"}],

        from: {position: "relative", left: "-100%", color: "red"},
    });
    const propsRight = useSpring({
        to: [{right: "0%", color: "rgb(14,26,19)", opacity: 1}],

        from: {position: "relative", right: "-100%", color: "red", opacity: 0},
    });

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    useEffect(() => {
        function fetchQueries() {
            fetch("https://jsonplaceholder.typicode.com/comments")
                .then(response => response.json())
                .then(json => setarrayQueries(json));
        }
        fetchQueries();
    }, []);

    useEffect(() => {
        function getHeight() {
            setDivsize(divHeight.current.clientHeight);
        }
        getHeight();
        window.addEventListener("resize", getHeight);
        return () => window.removeEventListener("resize", getHeight);
    }, []);

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

                    <div className={"anti-age-hair-container"} ref={divHeight}>
                        <Parallax
                            bgImage={ShortHairImg}
                            strength={150}
                            className={".img-parallax"}
                            style={{
                                height: "365px",
                                background: "black",
                            }}>
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
                                    width={290}
                                    height={390}
                                    url={
                                        "https://www.youtube.com/watch?v=20Zw7HJStwo&list=PLGQNRg69XpETvMHYznKmPpPAgHLT4OcyN"
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className={"commentaire-container"}>
                        {arrayQueries.slice(0, 10).map((item, index) => {
                            return (
                                <div className={"comment-item"} key={index}>
                                    <div style={propsRight} className={"name"}>
                                        <strong>
                                            <span>{"Name : "}</span>
                                        </strong>
                                        <span>{item.name}</span>
                                    </div>
                                    <div
                                        style={propsLeft}
                                        className={"comments"}
                                        data-aos={"fade-left"}>
                                        <strong>
                                            <span>{"Comment : "}</span>
                                        </strong>
                                        <span>{item.body}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <Footer />
            </div>
        </Fragment>
    );
}
