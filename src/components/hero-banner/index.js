import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import NFTCounter from "../nft-counter/index";
import images from "../../utils/images.json";
import OwlCarousel from "react-owl-carousel";

import ownMobile from "../../images/jump-trade/hero-banner/01_Own-Banner_low_Mobile.jpeg";
import playMobile from "../../images/jump-trade/hero-banner/02_Play-Banner_low_Mobile.jpeg";
import earnMobile from "../../images/jump-trade/hero-banner/03_Earn-Banner_low_Mobile.jpeg";
import ownWeb from "../../images/jump-trade/hero-banner/01_Own-Banner_low.jpeg";
import playWeb from "../../images/jump-trade/hero-banner/02_Play-Banner_low.jpeg";
import earnWeb from "../../images/jump-trade/hero-banner/03_Earn-Banner_low.jpeg";

import "./style.scss";

const HeroBanner = () => {
  const { innerWidth } = window;
  const history = useHistory();
  const { path } = useRouteMatch();
  const market_start_date = "May 4, 2022 12:30:00";

  const [live, setLive] = useState(false);

  const [market_time, set_market_time] = useState();

  const timeFunction = (check = false) => {
    var offset = new Date().getTimezoneOffset();

    var market_start_date_utc = new Date(market_start_date);
    market_start_date_utc.setMinutes(
      market_start_date_utc.getMinutes() - offset
    );

    var s_time = new Date();

    if (check) s_time.setSeconds(s_time.getSeconds() + 2);

    if (new Date(market_start_date_utc) < s_time) {
      setLive(true);
    } else {
      set_market_time(market_start_date_utc);
      setLive(false);
    }
  };

  useEffect(() => {
    timeFunction(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheck = () => {
    timeFunction(true);
  };

  return (
    <>
      <OwlCarousel
        className="owl-theme hero-carousel"
        margin={20}
        nav
        smartSpeed={500}
        dots={false}
        navContainerClass={"carousel-btn-block"}
        navText={[
          `<span class="icon-right-arrow left"> <img src=${images.backArrow}  /> </span>`,
          `<span class="icon-right-arrow right"><img src=${images.frontArrow} /></span>`,
        ]}
        responsive={{
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          800: {
            items: 1,
          },
        }}
      >
        <div class="item">
          <section
            className="hero-banner-sec"
            style={{
              backgroundImage: `url(${innerWidth > 769 ? ownWeb : ownMobile})`,
            }}
          >
            <div className="hero-content-block">
              <div className="hero-content-box">
                <div className="hero-btn-block">
                  {live && (
                    <button
                      className="theme-btn"
                      onClick={() => history.push("/nft-marketplace")}
                    >
                      <span>Explore</span>
                    </button>
                  )}
                </div>

                <h4>OWN - Legendary And Authenticated Cricket NFTs</h4>
                <p className="hero-desc">
                  Jump.trade is the only platform for you to purchase exclusive
                  and authenticated cricket NFTs from the marketplace. Some of
                  these NFTs include bats signed by legends of the game.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div class="item">
          <section
            className="hero-banner-sec"
            style={{
              backgroundImage: `url(${
                innerWidth > 769 ? playWeb : playMobile
              })`,
            }}
          >
            <div className="hero-content-block">
              <div className="hero-content-box">
                <div className="hero-btn-block"></div>

                <h4>PLAY - Immerse Yourself In An Addictive Cricket Game</h4>
                <p className="hero-desc">
                  Our NFTs enable you play the world's first-ever P2E cricket
                  game, the Meta Cricket League. Enjoy this super-addictive and
                  engaging game of cricket in the never-before meta-space!
                </p>
              </div>
            </div>
          </section>
        </div>
        <div class="item">
          <section
            className="hero-banner-sec"
            style={{
              backgroundImage: `url(${
                innerWidth > 769 ? earnWeb : earnMobile
              })`,
            }}
          >
            <div className="hero-content-block">
              <div className="hero-content-box">
                <div className="hero-btn-block"></div>

                <h4>
                  EARN - Get Rewarded For Your Game-Time, Skill &amp; Efforts{" "}
                </h4>
                <p className="hero-desc">
                  The Meta Cricket League game gives the players an opportunity
                  to monetize the time, efforts, and victories. Enter into a new
                  dimension of earning with our exciting reward-programs!
                </p>
              </div>
            </div>
          </section>
        </div>
      </OwlCarousel>
    </>
  );
};

export default HeroBanner;
