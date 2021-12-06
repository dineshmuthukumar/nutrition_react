import React from "react";
import "./style.scss";
import HeroVideo from "../hero-video";
import heroVideoBox from "../../images/amithabNft.mp4"

const Banner = () => {
  return <>
    <section className="hero-section">
      <HeroVideo video={heroVideoBox} />
      <div className="hero-content">
        <h1>COLLECT SUPER RARE DIGITAL ARTWORKS</h1>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
      </div>
    </section>
  </>;
};

export default Banner;
