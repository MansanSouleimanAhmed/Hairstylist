import React, {Fragment} from "react";
import ReactPlayer from "react-player/lazy";
export default function Player(props) {
    //   console.log("mansan " + props.height);
    return (
        <Fragment>
            <ReactPlayer
                width={props.width}
                height={props.height}
                url={props.url}
                fluid={false}
                controls={true}
            />
        </Fragment>
    );
}
