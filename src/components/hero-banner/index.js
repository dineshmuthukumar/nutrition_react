import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import HeroContentImgWeb from "../../images/jump-trade/hero-content-web.png";
import HeroContentImgMobile from "../../images/jump-trade/hero-content-mobile.png";

import "./style.scss";
import NFTCounter from "../nft-counter/index";

const HeroBanner = () => {
  const { innerWidth } = window;
  const history = useHistory();

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
      console.log("fire");
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
      <section className="hero-banner-sec">
        <div className="hero-content-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <h1>
                  {live ? (
                    <>
                      Jump.trade -{" "}
                      <span>
                        The NFT Marketplace To Trade Legendary NFTs{" "}
                      </span>
                    </>
                  ) : (
                    market_time && (
                      <>
                        <div className="live-text-title">MARKETPLACE</div>
                        <div className="live-text">TIME LEFT UNTIL LAUNCH</div>
                        <NFTCounter
                          time={market_time}
                          handleEndEvent={handleCheck}
                          timeClass="live-time"
                          intervalClass="live-interval"
                          intervalGapClass="live-gap"
                        />
                      </>
                    )
                  )}
                </h1>
                <p className="hero-desc">
                  Jump.trade - The #1 NFT marketplace to buy the world’s first
                  P2E cricket game NFTs. Buy NFT bats, players, and signed
                  legendary NFTs commemorating World Cup final matches!
                </p>
                <div className="hero-btn-block">
                  {/* <button className="theme-btn">
              <span>Signup</span>
            </button>
            <button className="secondary-btn">Fund your wallet</button> */}
                  {live && (
                    <button
                      className="theme-btn"
                      onClick={() => history.push("/explore-all")}
                    >
                      <span>Explore</span>
                    </button>
                  )}

                  {/* <button className="secondary-btn">Fund your wallet</button> */}
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src={
                    innerWidth > 767 ? HeroContentImgWeb : HeroContentImgMobile
                  }
                  alt="Best NFT Marketplace"
                  className="hero-content-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
