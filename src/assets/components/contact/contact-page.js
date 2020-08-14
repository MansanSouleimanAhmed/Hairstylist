import React, {Fragment} from "react";
import Header from "../header";
import Footer from "../footer";
import MapContainer from "./map-container";

export default function ContactPage() {
    return (
        <Fragment>
            <div className={"contact-page"}>
                <Header />
                <section className={"contact"}>
                    <div className={"map"}>
                        <MapContainer />
                    </div>
                    <div className={"contact-info"}>
                        <h2>{"Contact Us"}</h2>
                        <p>{"Tel: XXX XXXXX"} </p>
                        <p>{"Mail: XXX XXXXX "}</p>
                        <p>{"Address: XXX XXXXX"} </p>
                    </div>
                </section>
            </div>
            <Footer />
        </Fragment>
    );
}
