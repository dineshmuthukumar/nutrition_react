import React from "react";

import HeroContentImgWeb from "../../images/jump-trade/hero-content-web.png";
import HeroContentImgMobile from "../../images/jump-trade/hero-content-mobile.png";

import "./style.scss";

const HeroBanner = () => {
  const { innerWidth } = window;
  return (
    <>
      <section className="hero-banner-sec">
        <div className="hero-content-block">
          <h3>
            Marketplace <span>Is Live</span>
          </h3>
          <div className="hero-btn-block">
            <button className="theme-btn">
              <span>Signup</span>
            </button>
            <button className="secondary-btn">Fund your wallet</button>
          </div>
          <img
            src={innerWidth > 767 ? HeroContentImgWeb : HeroContentImgMobile}
            alt="HeroContentImgWeb"
            className="hero-content-img"
          />
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
