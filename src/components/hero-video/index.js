import React from "react";
import "./styles.scss";

const HeroVideo = () => {
    return <>
        <video autoPlay loop muted id="hero-video">
            <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
        </video>
    </>;
};

export default HeroVideo;