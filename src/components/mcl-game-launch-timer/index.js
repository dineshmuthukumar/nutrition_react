import React, { useRef, useState, useEffect } from "react";
import "./style.scss";
import NFTCounter from "../nft-counter";
import MockHand from "../../images/mcl-game-launcher/mock1.png";
import Search from "../../images/mcl-game-launcher/search-interface-symbol.svg";
import Copy from "../../images/mcl-game-launcher/copy.svg";
import Phone from "../../images/mcl-game-launcher/smartphone.svg";
import MCL from "../../images/mcl-game-launcher/mcl.png";
import Liveicon from "../../images/mcl-game-launcher/liveicon.png";
import Downloadicon from "../../images/mcl-game-launcher/downloadicon.png";

import Marquee from "react-fast-marquee";
import { tournamentsApi } from "../../api/base-methods";

const MclGameLaunchTimer = () => {
  const white_paper_start_date = "July 22 2022 05:20:00";
  const liveST = "2022-07-22T05:15:25.000Z";
  const liveET = "2022-07-22T05:17:00.000Z";

  const [whitepaper_time, set_whitepaper_time] = useState();
  const [end_time, set_end_time] = useState(false);
  const [liveTournament, setLiveTournament] = useState({});
  const [upcomingTournament, setUpcomingTournament] = useState({});

  // Timed Auction
  const [startTime, setStartTime] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const cTime = new Date();

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
    tournamentsTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTimer = () => {
    timeFunction();
  };

  const tournamentsTimer = async () => {
    try {
      let result = await tournamentsApi();
      const [live] = result.data.data?.live;
      const [upcoming] = result.data.data?.upcoming;
      const start_time = live ? live?.start_time : upcoming?.start_time;
      console.log(live, "live");
      console.log(upcoming, "upcoming");
      setLiveTournament(live);
      setUpcomingTournament(upcoming);
      startTime(start_time);
      // setIsStarted(new Date().getTime() >= new Date(start_time).getTime());
      // setIsEnded(new Date().getTime() > new Date(live?.end_time).getTime());
      setIsStarted(new Date().getTime() >= new Date(liveST).getTime());
      setIsEnded(new Date().getTime() > new Date(liveET).getTime());
    } catch (error) {
      console.log(error);
    }
  };

  const handleStartTimer = () => {
    setIsStarted(true);
  };
  const handleEndTimer = () => {
    setIsEnded(true);
  };
  const handleUpcomingTimer = () => {
    setIsStarted(true);
  };

  return (
    <>
      <div>
        <>
          <div>
            <section
              // className="trailer_section "
              className={
                !end_time || !isStarted
                  ? "trailer_section"
                  : "trailer_section live"
              }
            >
              <div className="trailer-container">
                <div className="">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="trailer-content">
                      <div>
                        <div className="mock-device">
                          <img src={MCL} />
                        </div>
                        <h2 className="mb-2 text-center">
                          {!end_time && <>MCL GAME LAUNCH IN</>}
                          {!isStarted && end_time && <>BETA SPECIAL LEAGUE</>}
                          {!isEnded && isStarted && end_time && (
                            <>BETA SPECIAL LEAGUE</>
                          )}
                          {isEnded && end_time && <>BETA SPECIAL LEAGUE</>}
                        </h2>
                        {/* <h2 className="mb-2 text-center">
                          {liveTournament?.name}
                        </h2> */}
                        <h4 className="mb-2 text-center">
                          {!isEnded && isStarted && end_time && <>Live Game</>}
                        </h4>
                        <h2 className="mb-2 text-center">
                          {!isEnded && isStarted && end_time && (
                            <>TOURNAMENT ENDS IN</>
                          )}
                        </h2>
                        <h2 className="mb-2 text-center">
                          {isEnded && end_time && <>UPCOMING TOURNAMENT</>}
                        </h2>

                        <h4 className="text-center game-counter">
                          {!end_time && (
                            <NFTCounter
                              time={whitepaper_time}
                              timeClass="counter-time"
                              handleEndEvent={handleTimer}
                              cTime={cTime}
                            />
                          )}
                          {!isStarted && end_time && (
                            <NFTCounter
                              time={liveST}
                              timeClass="counter-time"
                              handleEndEvent={handleStartTimer}
                              cTime={cTime}
                            />
                          )}
                          {!isEnded && isStarted && end_time && (
                            <NFTCounter
                              time={liveET}
                              timeClass="counter-time"
                              handleEndEvent={handleEndTimer}
                              cTime={cTime}
                            />
                          )}
                          {isEnded && end_time && (
                            <NFTCounter
                              time={upcomingTournament?.start_time}
                              timeClass="counter-time"
                              cTime={cTime}
                              handleEndEvent={handleUpcomingTimer}
                            />
                          )}
                        </h4>
                      </div>
                      {(!end_time || !isStarted) && (
                        <>
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
                        </>
                      )}

                      {!isEnded && isStarted && end_time && (
                        <>
                          <div className="mock-device">
                            <img src={Liveicon} />
                          </div>
                          <Marquee
                            pauseOnHover
                            speed={100}
                            className="marque-block"
                          >
                            <span>Want To Play?</span>{" "}
                            <span>DOWNLOAD THE GAME NOW!</span>
                          </Marquee>

                          <a href="https://dl.jump.trade/mcl.apk">
                            <img src={Downloadicon} />
                          </a>
                        </>
                      )}
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
          </div>
        </>
      </div>
    </>
  );
};

export default MclGameLaunchTimer;
