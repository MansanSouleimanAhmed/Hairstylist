import React from "react";
//import autoprefixer from "autoprefixer";

export default function ImgBanner({src, props}) {
    function project() {
        switch (props) {
            case "one":
                return <h3>{"We still. You  smile."}</h3>;
            case "two":
                return <h3>{"Get happy hair, get happy life."}</h3>;
            case "three":
                return (
                    <h3>{"You are never fully dressed without great hair."}</h3>
                );
        }
    }

    return (
        <div className={"img-landing-page"}>
            <img src={src} />
            <div className={"title-little"}>{project()}</div>
        </div>
    );
}
