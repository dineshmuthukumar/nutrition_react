import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

import NFTCounter from "../nft-counter";
import MockHand from "../../images/mcl-game-launcher/mock1.png";
import Search from "../../images/mcl-game-launcher/search-interface-symbol.svg";
import Copy from "../../images/mcl-game-launcher/copy.svg";
import Phone from "../../images/mcl-game-launcher/smartphone.svg";
import MCL from "../../images/mcl-game-launcher/mcl.png";
import Liveicon from "../../images/mcl-game-launcher/liveicon.png";
import Liveicons from "../../images/mcl-game-launcher/live-icon.png";
import ball from "../../images/mcl-game-launcher/ball.png";
import Downloadicon from "../../images/mcl-game-launcher/downloadicon.png";

import Marquee from "react-fast-marquee";
import { tournamentsApi } from "../../api/base-methods";
import { MdRefresh } from "react-icons/md";

import "./style.scss";

const MclGameLaunchTimer = () => {
  // const white_paper_start_date = "July 23 2022 07:45:00";

  // const [whitepaper_time, set_whitepaper_time] = useState();
  // const [end_time, set_end_time] = useState(false);
  const [liveTournament, setLiveTournament] = useState({});
  const [upcomingTournament, setUpcomingTournament] = useState({});
  const [finishedTournament, setFinishedTournament] = useState({});

  const [cTime, setCTime] = useState(new Date());

  // Timed Auction
  const [isLive, setIsLive] = useState(false);
  const [isUpcoming, setIsUpcoming] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isLiveStarted, setIsLiveStarted] = useState(false);
  const [isLiveEnded, setIsLiveEnded] = useState(false);
  const [isUpcomingStarted, setIsUpcomingStarted] = useState(false);

  // const timeFunction = (check = false) => {
  //   var offset = new Date().getTimezoneOffset();

  //   var white_paper_start_date_utc = new Date(white_paper_start_date);
  //   white_paper_start_date_utc.setMinutes(
  //     white_paper_start_date_utc.getMinutes() - offset
  //   );

  //   var s_time = new Date();

  //   if (check) s_time.setSeconds(s_time.getSeconds() + 2);

  //   if (new Date(white_paper_start_date_utc) < s_time) {
  //     set_end_time(true);
  //     // dispatch(market_live_thunk());
  //   } else {
  //     set_end_time(false);
  //     set_whitepaper_time(white_paper_start_date_utc);
  //     // dispatch(market_live_off_thunk());
  //   }
  // };

  useEffect(() => {
    // timeFunction(false);
    tournamentsTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleTimer = () => {
  //   timeFunction();
  // };

  const tournamentsTimer = async () => {
    try {
      let result = await tournamentsApi();
      setCTime(result?.data?.data?.time);
      showTimer(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const showTimer = (data) => {
    const live = data?.live;
    const upcoming = data?.upcoming;
    const finished = data?.finished;

    setIsLive(live?.length > 0);
    setIsUpcoming(upcoming?.length > 0);
    setIsFinished(finished?.length > 0);

    if (live?.length > 0) {
      const [tournament] = live;
      setIsLiveStarted(
        new Date().getTime() >= new Date(tournament?.start_time).getTime()
      );
      setIsLiveEnded(
        new Date().getTime() > new Date(tournament?.end_time).getTime()
      );
      setLiveTournament(tournament);
    }
    if (upcoming?.length > 0) {
      const [tournament] = upcoming;
      setIsUpcomingStarted(
        new Date().getTime() >= new Date(tournament?.start_time).getTime()
      );
      setUpcomingTournament(tournament);
    }
    if (finished?.length > 0) {
      const [tournament] = finished;
      setFinishedTournament(tournament);
    }
  };

  const handleLiveStartTimer = () => {
    setIsLiveStarted(true);
  };
  const handleLiveEndTimer = () => {
    setIsLiveEnded(true);
  };
  const handleUpcomingStartTimer = () => {
    setIsUpcomingStarted(true);
  };

  return (
    <>
      <div>
        <>
          <div>
            <section
              className={`trailer_section ${
                !isLive || isLiveStarted ? "upcoming" : ""
              }`}
            >
              <div className="trailer-container">
                <div className="">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="trailer-content">
                      <div>
                        <div className="mock-device mcl-logo-launch">
                          <img src={MCL} />
                        </div>

                        {/* LIVE STARTS IN BLOCK */}
                        {isLive &&
                          !isLiveStarted &&
                          !isLiveEnded &&
                          liveTournament?.start_time && (
                            <>
                              <h2 className="mb-2 text-center">
                                {liveTournament?.name}
                              </h2>
                              <h4 className="mb-2 text-center text-white fs-2">
                                TOURNAMENT STARTS IN
                              </h4>
                            </>
                          )}
                        {/* LIVE STARTS IN BLOCK */}

                        {/* LIVE ENDS IN BLOCK */}
                        {isLive &&
                          isLiveStarted &&
                          !isLiveEnded &&
                          liveTournament?.end_time && (
                            <>
                              <h2 className="mb-2 text-center">
                                {liveTournament?.name}
                              </h2>
                              <h4 className="mb-2 text-center">
                                <div className="live-games my-4">
                                  <img src={Liveicons} />
                                  <img className="ball" src={ball} />
                                </div>
                              </h4>
                              <h2 className="mb-2 text-center ends-tournament">
                                TOURNAMENT ENDS IN
                              </h2>
                            </>
                          )}
                        {/* LIVE ENDS IN BLOCK */}

                        {/* UPCOMING STARTS IN BLOCK */}
                        {isLive &&
                          isUpcoming &&
                          isLiveStarted &&
                          isLiveEnded &&
                          !isUpcomingStarted &&
                          upcomingTournament?.start_time && (
                            <>
                              <h2 className="mb-2 text-center">
                                {upcomingTournament?.name}
                              </h2>
                              <h4 className="mb-2 text-center text-white fs-2">
                                UPCOMING TOURNAMENT STARTS IN
                              </h4>
                            </>
                          )}

                        {!isLive &&
                          isUpcoming &&
                          !isUpcomingStarted &&
                          upcomingTournament?.start_time && (
                            <>
                              <h2 className="mb-2 text-center">
                                {upcomingTournament?.name}
                              </h2>
                              <h4 className="mb-2 text-center text-white fs-2">
                                UPCOMING TOURNAMENT STARTS IN
                              </h4>
                            </>
                          )}

                        {/* UPCOMING STARTS IN BLOCK */}

                        {/* NO LIVE & UPCOMING DATA BLOCK */}
                        {isUpcoming && isUpcomingStarted && (
                          <>
                            <h2 className="mt-2 mb-2 text-center">
                              {upcomingTournament?.name}
                            </h2>
                            <h4 className="mb-2 text-center text-white fs-2">
                              STARTED
                            </h4>
                            <h4 className="text-center game-counter">
                              <a
                                className="download-icon-btn my-5 d-block"
                                href={process.env.REACT_APP_MCL_GAME_LINK}
                              >
                                <img src={Downloadicon} />
                              </a>
                            </h4>
                          </>
                        )}

                        {!isLive && !isUpcoming && (
                          <>
                            {isFinished ? (
                              <>
                                <h2 className="mb-2 text-center">
                                  {finishedTournament?.name}
                                </h2>
                                <h4 className="mb-2 text-center text-white fs-2">
                                  TOURNAMENT ENDED ON
                                </h4>
                                <h4 className="mb-2 text-center text-white fs-2">
                                  {dayjs(finishedTournament?.end_time).format(
                                    "MMM D, YYYY hh:mm A"
                                  )}
                                </h4>
                              </>
                            ) : (
                              <h2 className="mt-2 mb-2 text-center">
                                Play the World's First Hit-To-Earn Cricket NFT
                                Game
                              </h2>
                            )}
                            <h4 className="text-center game-counter">
                              <a
                                className="download-icon-btn my-5 d-block"
                                href={process.env.REACT_APP_MCL_GAME_LINK}
                              >
                                <img src={Downloadicon} />
                              </a>
                            </h4>
                          </>
                        )}

                        {isLive && isLiveStarted && isLiveEnded && !isUpcoming && (
                          <>
                            <h2 className="mt-2 mb-2 text-center">
                              Play the World's First Hit-To-Earn Cricket NFT
                              Game
                            </h2>

                            <h4 className="text-center game-counter">
                              <a
                                className="download-icon-btn my-5 d-block"
                                href={process.env.REACT_APP_MCL_GAME_LINK}
                              >
                                <img src={Downloadicon} />
                              </a>
                            </h4>
                          </>
                        )}
                        {/* NO LIVE & UPCOMING DATA BLOCK */}

                        {/* LIVE STARTS IN TIMER BLOCK */}
                        {isLive &&
                          !isLiveStarted &&
                          !isLiveEnded &&
                          liveTournament?.start_time && (
                            <>
                              <h4 className="text-center game-counter">
                                <NFTCounter
                                  time={liveTournament?.start_time}
                                  timeClass="counter-time"
                                  handleEndEvent={handleLiveStartTimer}
                                  cTime={cTime}
                                />
                                <a
                                  className="download-icon-btn my-5 d-block"
                                  href={process.env.REACT_APP_MCL_GAME_LINK}
                                >
                                  <img src={Downloadicon} />
                                </a>
                              </h4>
                            </>
                          )}
                        {/* LIVE STARTS IN TIMER BLOCK */}

                        {/* LIVE ENDS IN TIMER BLOCK */}
                        {isLive &&
                          isLiveStarted &&
                          !isLiveEnded &&
                          liveTournament?.end_time && (
                            <>
                              <h4 className="text-center game-counter">
                                <NFTCounter
                                  time={liveTournament?.end_time}
                                  timeClass="counter-time"
                                  handleEndEvent={handleLiveEndTimer}
                                  cTime={cTime}
                                />
                              </h4>
                            </>
                          )}

                        {/* LIVE ENDS IN TIMER BLOCK */}

                        {/* UPCOMING STARTS IN TIMER BLOCK */}
                        {isLive &&
                          isUpcoming &&
                          isLiveStarted &&
                          isLiveEnded &&
                          !isUpcomingStarted &&
                          upcomingTournament?.start_time && (
                            <>
                              <h4 className="text-center game-counter">
                                <NFTCounter
                                  time={upcomingTournament?.start_time}
                                  timeClass="counter-time"
                                  cTime={cTime}
                                  handleEndEvent={handleUpcomingStartTimer}
                                />
                                <a
                                  className="download-icon-btn my-5 d-block"
                                  href={process.env.REACT_APP_MCL_GAME_LINK}
                                >
                                  <img src={Downloadicon} />
                                </a>
                              </h4>
                            </>
                          )}

                        {!isLive &&
                          isUpcoming &&
                          !isUpcomingStarted &&
                          upcomingTournament?.start_time && (
                            <>
                              <h4 className="text-center game-counter">
                                <NFTCounter
                                  time={upcomingTournament?.start_time}
                                  timeClass="counter-time"
                                  cTime={cTime}
                                  handleEndEvent={handleUpcomingStartTimer}
                                />
                                <a
                                  className="download-icon-btn my-5 d-block"
                                  href={process.env.REACT_APP_MCL_GAME_LINK}
                                >
                                  <img src={Downloadicon} />
                                </a>
                              </h4>
                            </>
                          )}
                        {/* UPCOMING STARTS IN TIMER BLOCK */}
                      </div>

                      {/* LIVE STARTS IN MARQUEE BLOCK */}
                      {isLive &&
                        !isLiveStarted &&
                        !isLiveEnded &&
                        liveTournament?.start_time && (
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
                      {/* LIVE STARTS IN MARQUEE BLOCK */}

                      {/* LIVE ENDS IN MARQUEE BLOCK */}
                      {isLive && isLiveStarted && !isLiveEnded && (
                        <>
                          <Marquee
                            pauseOnHover
                            speed={100}
                            className="marque-block mt-5"
                          >
                            <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>
                            <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>
                            <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>
                            <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>
                          </Marquee>

                          <a
                            className="download-icon-btn my-5 d-block"
                            href={process.env.REACT_APP_MCL_GAME_LINK}
                          >
                            <img src={Downloadicon} />
                          </a>
                        </>
                      )}
                      {/* LIVE ENDS IN MARQUEE BLOCK */}

                      {/* RELOAD BLOCK */}
                      {isUpcoming && isUpcomingStarted && (
                        <>
                          <MdRefresh
                            className="reload-btn"
                            onClick={() => window.location.reload()}
                          />
                        </>
                      )}
                      {/* RELOAD BLOCK */}
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
