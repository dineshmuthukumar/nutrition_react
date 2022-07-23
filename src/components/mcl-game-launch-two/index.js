import React, { useRef, useState, useEffect } from "react";
import "./style.scss";
import NFTCounter from "../nft-counter";
import MockHand from "../../images/mcl-game-launcher/mock1.png";
import Search from "../../images/mcl-game-launcher/search-interface-symbol.svg";
import Copy from "../../images/mcl-game-launcher/copy.svg";
import Phone from "../../images/mcl-game-launcher/smartphone.svg";
import Marquee from "react-fast-marquee";
import MCL from "../../images/mcl-game-launcher/mcl.png";
import Downloadicon from "../../images/mcl-game-launcher/downloadicon.png";
import Liveicons from "../../images/mcl-game-launcher/live-icon.png";
import ball from "../../images/mcl-game-launcher/ball.png";

const MclGameLaunchTimer = () => {
  const white_paper_start_date = "July 22 2022 15:30:00";

  const [whitepaper_time, set_whitepaper_time] = useState();
  const [end_time, set_end_time] = useState(false);

  const timeFunction = (check = false) => {
    var offset = new Date().getTimezoneOffset();

    var white_paper_start_date_utc = new Date(white_paper_start_date);
    white_paper_start_date_utc.setMinutes(
      white_paper_start_date_utc.getMinutes() - offset
    );

    var s_time = new Date();

    if (check) s_time.setSeconds(s_time.getSeconds() + 2);

    if (new Date(white_paper_start_date_utc) < s_time) {
      set_end_time(true);
      // dispatch(market_live_thunk());
    } else {
      set_end_time(false);
      set_whitepaper_time(white_paper_start_date_utc);
      // dispatch(market_live_off_thunk());
    }
  };

  useEffect(() => {
    timeFunction(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTimer = () => {
    set_end_time(true);
  };

  return (
    <>
      <div>
        <>
          <div>
            {/* <section className="trailer_section ">
              <div className="trailer-container">
                <div className="">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="trailer-content">
                      <h2 className="mb-2 text-center">MCL Game Launch In</h2>
                      <h4 className="text-center game-counter">
                        {" "}
                        <NFTCounter
                          time={whitepaper_time}
                          timeClass="counter-time"
                          handleEndEvent={handleTimer}
                          // className="whitepaper"
                        />
                      </h4>
                      <div className="mock-device">
                        <img src={MockHand} />
                      </div>
                      <Marquee
                        pauseOnHover
                        speed={100}
                        className="marque-block"
                      >
                        <span>Are you Ready To Play?</span>{" "}
                        <span>Are you Ready To Play?</span>
                        <span>Are you Ready To Play?</span>
                        <span>Are you Ready To Play?</span>
                        <span>Are you Ready To Play?</span>
                      </Marquee>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            {/* 
            <section className="trailer_section ">
              <div className="trailer-container">
                <div className="">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="trailer-content">
                      <div className="mock-device mcl-logo-launch">
                        <img src={MCL} />
                      </div>
                      <h2 className="my-4 text-center">
                        <>GRAND SLAM 1</>
                      </h2>
                      <h4 className="mb-2 text-center text-white fs-2">
                        TOURNAMENT START IN
                      </h4>

                      <h4 className="text-center game-counter">
                        {" "}
                        <NFTCounter
                          time={whitepaper_time}
                          timeClass="counter-time"
                          handleEndEvent={handleTimer}
                          // className="whitepaper"
                        />
                      </h4>
                      <a
                        className="download-icon-btn my-5 d-block text-center"
                        href="https://dl.jump.trade/mcl.apk"
                      >
                        <img src={Downloadicon} />
                      </a>
                      <div className="mock-device">
                        <img src={MockHand} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            <section className="trailer_section live">
              <div className="trailer-container">
                <div className="">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="trailer-content">
                      <div className="mock-device mcl-logo-launch">
                        <img src={MCL} />
                      </div>
                      <h2 className="my-4 text-center">
                        <>GRAND SLAM 1</>
                      </h2>

                      <h4 className="my-4 text-center">
                        <div className="live-games my-4">
                          <img src={Liveicons} />
                          <img className="ball" src={ball} />
                        </div>
                      </h4>
                      <h2 className="my-4 text-center ends-tournament">
                        TOURNAMENT ENDS IN
                      </h2>
                      <h4 className="text-center game-counter">
                        {" "}
                        <NFTCounter
                          time={whitepaper_time}
                          timeClass="counter-time"
                          handleEndEvent={handleTimer}
                          // className="whitepaper"
                        />
                      </h4>

                      <Marquee
                        pauseOnHover
                        speed={100}
                        className="marque-block mt-5"
                      >
                        <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                        <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                        <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                        <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                      </Marquee>

                      <a
                        className="download-icon-btn my-5 d-block"
                        href={process.env.REACT_APP_MCL_GAME_LINK}
                      >
                        <img src={Downloadicon} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

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
                          Check-Out <span>Whitepaper</span>
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
          </div>
        </>
      </div>
    </>
  );
};

export default MclGameLaunchTimer;
