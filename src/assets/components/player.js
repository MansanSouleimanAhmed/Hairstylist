import React, {Fragment} from "react";
import ReactPlayer from "react-player/lazy";
export default function Player(props) {
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
