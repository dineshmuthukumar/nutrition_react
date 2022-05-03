import React from "react";

import "./style.scss";

const HeroBanner = () => {
  return (
    <>
      <section className="hero-banner-sec">
        <div className="hero-content-block">
          <h3>META CRICKET LEAGUE</h3>
          <div className="hero-btn-block">
            <button className="theme-btn">
              <span>Signup</span>
            </button>
            <button className="secondary-btn">Fund your wallet</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
