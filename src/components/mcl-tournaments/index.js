import React from "react";
import OwlCarousel from "react-owl-carousel";
import Tournament from "./tournament";

import Marquee from "react-fast-marquee";
import MCL from "../../images/mcl-game-launcher/mcl.png";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.scss";

const MclTournaments = () => {
  return (
    <>
      <section className="trailer_section live">
        <div className="trailer-container">
          <div className="">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="trailer-content">
                <div className="mock-device mcl-logo-launch">
                  <img src={MCL} />
                </div>

                <OwlCarousel
                  className="owl-theme tournament-list-carousel"
                  loop
                  margin={0}
                  smartSpeed={500}
                  center={true}
                  dots={true}
                  responsive={{
                    0: {
                      items: 1,
                    },
                    600: {
                      items: 2,
                    },
                    992: {
                      items: 4,
                    },
                    1024: {
                      items: 4,
                    },
                    1200: {
                      items: 4,
                    },
                    1541: {
                      items: 4,
                    },
                  }}
                >
                  <Tournament ClassNames="expire-card" />
                  <Tournament ClassNames="expire-card" />
                  <Tournament ClassNames="livenow-card" />
                  <Tournament ClassNames="upcoming-card" />
                  <Tournament ClassNames="upcoming-card" />
                  <Tournament ClassNames="upcoming-card" />
                  <Tournament ClassNames="upcoming-card" />
                </OwlCarousel>

                <Marquee pauseOnHover speed={100} className="marque-block">
                  <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                  <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                  <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                  <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                </Marquee>

                {/* <a
                  className="download-icon-btn my-5 d-block"
                  href={process.env.REACT_APP_MCL_GAME_LINK}
                >
                  <img src={Downloadicon} />
                </a> */}
                <a
                  href={process.env.REACT_APP_MCL_GAME_LINK}
                  target="_blank"
                  className="download-icon-btn black-btn fs-5 fw-bold"
                >
                  <span>Download MCL Game</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MclTournaments;
