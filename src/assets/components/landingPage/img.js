import React from "react";
//import autoprefixer from "autoprefixer";

export default function ImgBanner({src, props}) {
    function project() {
        switch (props) {
            case "one":
                return <h3>{"test"}</h3>;
            case "two":
                return <h3>{"test2"}</h3>;
            case "three":
                return <h3>{"test3"}</h3>;
        }
    }

    return (
        <div className={"img-landing-page"}>
            <img src={src} />
            <div className={"title-little"}>{project()}</div>
        </div>
    );
}
