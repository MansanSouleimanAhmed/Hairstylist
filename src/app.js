import React, {Fragment} from "react";
import LandingPage from "./assets/components/landingPage/landing-page";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
//import Navbar from "./assets/components/nav-bar";
import AboutUS from "./assets/components/about-us/about-us";
import ContactPage from "./assets/components/contact/contact-page";
import Services from "./assets/components/services/services-page";
import {ParallaxProvider} from "react-scroll-parallax";
function App() {
    return (
        <Fragment>
            <ParallaxProvider>
                <Router>
                    <nav>
                        <ul>
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
                            <li>
                                <Link to={"/about-us"} className={"nav-link"}>
                                    {"About us"}
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
