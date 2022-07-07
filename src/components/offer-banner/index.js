import React from "react";

import buyWeb from "../../images/jump-trade/hero-banner/04_BuyUCoin250_BG-only_WEB.jpg";
import buyMobile from "../../images/jump-trade/hero-banner/04_BuyUCoin250_BG-only_Mobile.jpg";
import buyWebText from "../../images/jump-trade/hero-banner/04_BuyUCoin250_Text-only_WEB.png";
import buyMobileText from "../../images/jump-trade/hero-banner/04_BuyUCoin250_Text-only_Mobile.png";
import buyUCoinLogo from "../../images/jump-trade/hero-banner/04_BuyUCoin Logo_Web.png";
import Header from "../header";
import Footer from "../footer";
import "./style.scss";

const OfferBanner = () => {
  const { innerWidth } = window;

  return (
    <>
      <Header bgImage />
      <div class="item">
        <section
          className="buy-banner-sec"
          style={{
            backgroundImage: `url(${innerWidth > 769 ? buyWeb : buyMobile})`,
          }}
        >
          <div className="buy-content-block">
            <img
              src={innerWidth > 767 ? buyWebText : buyMobileText}
              alt="Best NFT Marketplace"
              className="hero-content-img"
              loading="lazy"
            />

            <div className="buy-content-box">
              <div>
                <img
                  src={buyUCoinLogo}
                  alt="UCoin Logo"
                  width="200px"
                  height="70px"
                />
              </div>
              <div className="buy-btn-block">
                <button
                  className="theme-btn"
                  onClick={() =>
                    window.open(
                      process.env.REACT_APP_BUYUCOIN_URL,
                      "_blank",
                      "nofollow noopener noreferrer"
                    )
                  }
                >
                  <span>Visit</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default OfferBanner;
