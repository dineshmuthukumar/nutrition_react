import React, { useRef, useState, useEffect } from "react";
import "./style.scss";
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

const MclGameLaunchTimer = () => {
  const white_paper_start_date = "July 23 2022 07:45:00";
  // const liveST = "2022-07-22T11:19:00.000Z";
  // const liveET = "2022-07-22T11:20:00.000Z";
  // const upComing = "2022-07-22T11:21:00.000Z";

  const [whitepaper_time, set_whitepaper_time] = useState();
  const [end_time, set_end_time] = useState(false);
  const [liveTournament, setLiveTournament] = useState({});
  const [upcomingTournament, setUpcomingTournament] = useState({});

  // Timed Auction
  const [startTime, setStartTime] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const cTime = new Date();

  const [isLive, setIsLive] = useState(false);
  const [isUpcoming, setIsUpcoming] = useState(false);
  const [isLiveStarted, setIsLiveStarted] = useState(false);
  const [isLiveEnded, setIsLiveEnded] = useState(false);
  const [isUpcomingStarted, setIsUpcomingStarted] = useState(false);

  const data = {
    live: [
      {
        name: "Grand Slam 1",
        start_time: "2022-07-23T08:55:00.000Z",
        end_time: "2022-07-23T07:54:00.000Z",
      },
      {
        name: "Warm-up League",
        start_time: "2022-07-21T21:05:00.000Z",
        end_time: "2022-07-22T21:02:00.000Z",
      },
    ],
    upcoming: [
      {
        name: "Manimohan Upcoming",
        start_time: "2022-07-23T07:55:00.000Z",
        end_time: "2022-07-23T15:12:00.000Z",
      },
      {
        name: "tournamenttttee",
        start_time: "2022-08-17T14:47:00.000Z",
        end_time: "2022-08-18T14:47:00.000Z",
      },
    ],
  };

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
      showTimer(data);
    } catch (error) {
      console.log(error);
    }
  };
  // const tournamentsTimer = async () => {
  //   try {
  //     let result = await tournamentsApi();

  //     const [live] = result.data.data?.live;
  //     const [upcoming] = result.data.data?.upcoming;
  //     const start_time = live ? live?.start_time : upcoming?.start_time;
  //     console.log(live, "live");
  //     console.log(upcoming, "upcoming");
  //     setLiveTournament(live);
  //     setUpcomingTournament(upcoming);
  //     startTime(start_time);
  //     setIsStarted(new Date().getTime() >= new Date(start_time).getTime());
  //     setIsEnded(new Date().getTime() > new Date(live?.end_time).getTime());
  //     // setIsStarted(new Date().getTime() >= new Date(liveST).getTime());
  //     // setIsEnded(new Date().getTime() > new Date(liveET).getTime());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const showTimer = (data) => {
    const live = data?.live;
    const upcoming = data?.upcoming;
    setIsLive(live?.length > 0);
    setIsUpcoming(upcoming?.length > 0);

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
              // className="trailer_section "
              className={
                !end_time || !isLive
                  ? "trailer_section"
                  : "trailer_section live"
              }
            >
              <div className="trailer-container">
                <div className="">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="trailer-content">
                      <div>
                        <div className="mock-device mcl-logo-launch">
                          <img src={MCL} />
                        </div>
                        <h2 className="mb-2 text-center">
                          {!end_time && <>MCL GAME LAUNCH IN</>}
                          {isLive &&
                            end_time &&
                            isUpcomingStarted &&
                            !isUpcoming && <>{liveTournament?.name}</>}
                          {/* {!isEnded && isLive && end_time && (
                            <>{liveTournament?.name}</>
                          )} */}
                          {!isLive &&
                            isUpcoming &&
                            end_time &&
                            !isUpcomingStarted &&
                            upcomingTournament?.start_time && (
                              <>{upcomingTournament?.name}</>
                            )}
                          {isLive &&
                            isUpcoming &&
                            end_time &&
                            isLiveStarted &&
                            isLiveEnded &&
                            !isUpcomingStarted &&
                            upcomingTournament?.start_time && (
                              <>{upcomingTournament?.name}</>
                            )}
                        </h2>
                        <h4 className="mb-2 text-center text-white fs-2">
                          {isLive && end_time && !isLiveStarted && (
                            <>TOURNAMENT STARTS IN</>
                          )}
                        </h4>
                        <h2 className="mb-2 text-center">
                          {isUpcomingStarted && isLiveStarted && (
                            <>
                              Play the World's First Hit-To-Earn Cricket NFT
                              Game
                            </>
                          )}
                        </h2>
                        {/* <h2 className="mb-2 text-center">
                          {liveTournament?.name}
                        </h2> */}
                        <h4 className="mb-2 text-center">
                          {/* {!isEnded && isStarted && end_time && ( */}
                          {isLive && end_time && isLiveStarted && !isLiveEnded && (
                            <>
                              {/* <div className="live-game my-4">
                                <img src={Liveicon} />
                              </div> */}

                              <div className="live-games my-4">
                                <img src={Liveicons} />
                                <img className="ball" src={ball} />
                              </div>
                            </>
                          )}
                        </h4>

                        <h4 className="text-center game-counter">
                          {!end_time && (
                            <>
                              <NFTCounter
                                time={whitepaper_time}
                                timeClass="counter-time"
                                handleEndEvent={handleTimer}
                                cTime={cTime}
                              />
                              <a
                                className="download-icon-btn my-5 d-block"
                                href="https://dl.jump.trade/mcl.apk"
                              >
                                <img src={Downloadicon} />
                              </a>
                            </>
                          )}
                          {isLive &&
                            end_time &&
                            !isLiveStarted &&
                            liveTournament?.start_time && (
                              <>
                                <NFTCounter
                                  time={liveTournament?.start_time}
                                  timeClass="counter-time"
                                  handleEndEvent={handleLiveStartTimer}
                                  cTime={cTime}
                                />
                                <a
                                  className="download-icon-btn my-5 d-block"
                                  href="https://dl.jump.trade/mcl.apk"
                                >
                                  <img src={Downloadicon} />
                                </a>
                              </>
                            )}

                          {isLive &&
                            end_time &&
                            isLiveStarted &&
                            !isLiveEnded &&
                            liveTournament?.end_time && (
                              <>
                                <NFTCounter
                                  time={liveTournament?.end_time}
                                  timeClass="counter-time"
                                  handleEndEvent={handleLiveEndTimer}
                                  cTime={cTime}
                                />
                                <h2 className="mb-2 text-center ends-tournament">
                                  {isLive &&
                                    end_time &&
                                    isLiveStarted &&
                                    !isLiveEnded && <>TOURNAMENT ENDS IN</>}
                                </h2>
                                <a
                                  className="download-icon-btn my-5 d-block"
                                  href="https://dl.jump.trade/mcl.apk"
                                >
                                  <img src={Downloadicon} />
                                </a>
                              </>
                            )}

                          {isLive &&
                            isUpcoming &&
                            end_time &&
                            isLiveStarted &&
                            isLiveEnded &&
                            !isUpcomingStarted &&
                            upcomingTournament?.start_time && (
                              <>
                                <NFTCounter
                                  time={upcomingTournament?.start_time}
                                  // time={upComing}
                                  timeClass="counter-time"
                                  cTime={cTime}
                                  handleEndEvent={handleUpcomingStartTimer}
                                />
                                <h2 className="mb-2 text-center ends-tournament">
                                  {isLive &&
                                    isUpcoming &&
                                    end_time &&
                                    isLiveStarted &&
                                    isLiveEnded &&
                                    !isUpcomingStarted && (
                                      <>UPCOMING TOURNAMENT</>
                                    )}
                                </h2>

                                <a
                                  className="download-icon-btn my-5 d-block"
                                  href="https://dl.jump.trade/mcl.apk"
                                >
                                  <img src={Downloadicon} />
                                </a>
                              </>
                            )}

                          {!isLive &&
                            isUpcoming &&
                            end_time &&
                            !isUpcomingStarted &&
                            upcomingTournament?.start_time && (
                              <>
                                <NFTCounter
                                  time={upcomingTournament?.start_time}
                                  // time={upComing}
                                  timeClass="counter-time"
                                  cTime={cTime}
                                  handleEndEvent={handleUpcomingStartTimer}
                                />

                                <h2 className="mb-2 text-center ends-tournament">
                                  {!isLive &&
                                    isUpcoming &&
                                    end_time &&
                                    !isUpcomingStarted && (
                                      <>UPCOMING TOURNAMENT</>
                                    )}
                                </h2>
                                <a
                                  className="download-icon-btn my-5 d-block"
                                  href="https://dl.jump.trade/mcl.apk"
                                >
                                  <img src={Downloadicon} />
                                </a>
                              </>
                            )}
                        </h4>
                      </div>
                      {isLive && end_time && !isLiveStarted && (
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

                      {!isLive && end_time && !isLiveStarted && (
                        <>
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
                            href="https://dl.jump.trade/mcl.apk"
                          >
                            <img src={Downloadicon} />
                          </a>
                        </>
                      )}
                      {isUpcomingStarted && (
                        <>
                          <a
                            className="download-icon-btn my-5 d-block"
                            href="https://dl.jump.trade/mcl.apk"
                          >
                            <img src={Downloadicon} />
                          </a>
                          <button onClick={() => window.location.reload()}>
                            reload
                          </button>
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
