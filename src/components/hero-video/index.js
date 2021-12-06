import React from "react";
import "./styles.scss";


const HeroVideo = ({video}) => {
    return <>
        <video autoPlay loop muted id="hero-video">
            <source src={video} type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
    </>;
};

export default HeroVideo;