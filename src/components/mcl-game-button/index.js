import React from "react";
import Search from "../../images/mcl-game-launcher/search-interface-symbol.svg";
import Copy from "../../images/mcl-game-launcher/copy.svg";
import Phone from "../../images/mcl-game-launcher/smartphone.svg";
import "./style.scss";

const MclGameButton = () => {
  return (
    <>
      <section className="game-launch-button">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-6 col-12">
              <a
                target="_self"
                href="/nft-marketplace/"
                className="launch-anchor mb-4"
              >
                <div className="launch-btn d-flex align-items-center justify-content-center">
                  <div className="launch-icon">
                    <img src={Search} />
                  </div>
                  <div className="launch-title">
                    Explore <span>Marketplace</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <a
                target="_blank"
                href="https://mcl-wp.jump.trade/"
                className="launch-anchor mb-4"
              >
                <div className="launch-btn d-flex align-items-center justify-content-center">
                  <div className="launch-icon">
                    <img src={Copy} />
                  </div>
                  <div className="launch-title">
                    Check-Out <span> Whitepaper</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <a
                target="_blank"
                href="/mcl-game"
                className="launch-anchor mb-2"
              >
                <div className="launch-btn d-flex align-items-center justify-content-center">
                  <div className="launch-icon">
                    <img src={Phone} />
                  </div>
                  <div className="launch-title">
                    Download <span>MCL App</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MclGameButton;
