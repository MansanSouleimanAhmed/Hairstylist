import React, {Fragment, useState, useEffect} from "react";
import LandingPage from "./assets/components/landingPage/landing-page";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import AboutUS from "./assets/components/about-us/about-us";
import ContactPage from "./assets/components/contact/contact-page";
import Services from "./assets/components/services/services-page";
import LogoDark from "./assets/img/logo-dark.png";
import LogoLight from "./assets/img/logo-light.png";
import {ParallaxProvider} from "react-scroll-parallax";

function App() {
    const [scrollPosition, setSrollPosition] = useState(0);
    const [service, setService] = useState("");
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let navWhite;
    let checkTrue;
    let logo;

    navWhiteColor();
    function navWhiteColor() {
        if (scrollPosition > 15) {
            checkTrue = true;
        } else {
            checkTrue = false;
        }

        if (checkTrue || checkTrue === null) {
            logo = LogoLight;
        } else {
            logo = LogoDark;
        }
        navWhite = checkTrue ? "nav-white" : "";
    }

    return (
        <Fragment>
            <ParallaxProvider>
                <Router>
                    <nav className={navWhite}>
                        <ul>
                            <li id={"logo"} className={"nav-link"}>
                                <img src={logo} />
                            </li>
                            <li>
                                <Link to={"/"} className={"nav-link"}>
                                    {"Home"}
                                </Link>
                            </li>
                            <li>
                                <Link to={"/services"} className={"nav-link"}>
                                    {"Services"}
                                </Link>
                            </li>
                            <li>
                                <Link to={"/contact"} className={"nav-link"}>
                                    {"Contact"}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path={"/"} component={LandingPage} />
                        <Route exact path={"/services"} component={Services} />
                        <Route path={"/contact"} component={ContactPage} />
                        <Route path={"/about-us"} component={AboutUS} />
                    </Switch>
                </Router>
            </ParallaxProvider>
        </Fragment>
    );
}

export default App;
