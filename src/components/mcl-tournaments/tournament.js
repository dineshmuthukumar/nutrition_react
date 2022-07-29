import React, { useEffect, useState } from "react";
import "./style.scss";

import SlamImage from "../../images/jump-trade/tournament/Grand-Slam.png";
import LivenowBall from "../../images/jump-trade/tournament/Balll_1.png";
import NFTCounter from "../nft-counter";
import dayjs from "dayjs";

const Tournament = ({ statusChange=()=>{}, tournamentData = {}, ClassNames }) => {
  const [cTime, setCTime] = useState(new Date());
  console.log(Object.keys(tournamentData).length)

  // Timed Auction
  const [isUpcoming, setIsUpcoming] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isLiveStarted, setIsLiveStarted] = useState(false);
  var className = "upcoming-card";

  useEffect(() => {
    showTimer();
  }, []);

  const showTimer = () => {
    if (
      new Date().getTime() <= new Date(tournamentData?.end_time).getTime() &&
      new Date().getTime() > new Date(tournamentData?.start_time).getTime()
    ) {
      setIsLiveStarted(true);
    }
    if (
      new Date().getTime() <= new Date(tournamentData?.start_time).getTime()
    ) {
      setIsUpcoming(true);
    }
    if (new Date().getTime() > new Date(tournamentData?.end_time).getTime()) {
      setIsFinished(true);
    }
  };
  const setChangeStart = () => {
    // setIsUpcoming(false);
    // setIsLiveStarted(true);
     statusChange();
  };
  const setChangeEnd = () => {
    // setIsLiveStarted(false);
    // setIsFinished(true);
     statusChange();
  };
  if (isUpcoming) className = "upcoming-card";
  else if (isFinished) className = "expire-card";
  else if(isLiveStarted) className = "livenow-card";

  return (
    <>
      <article className={`tournament-card ${className}`}>
        <img src={SlamImage} className="slam-image" />
        <div className="content-block">
          {isFinished && (
            <span className="tournament-end-band">
              tournament <br /> ended
            </span>
          )}
          {isLiveStarted && (
            <a href="javascript:void(0);" className="live-btn">
              <span>Live</span>
              <img src={LivenowBall} />
              <span>Now</span>
            </a>
          )}
          {isUpcoming && <h5>Upcoming tournament starts in</h5>}
          {isLiveStarted && <h5>tournament ends in</h5>}
          {isFinished && <h5>tournament ended on</h5>}
          <div className="timer-box">
            <h5 className="timer-time">
              {/* 11<sub>d</sub> 14<sub>h</sub> 40<sub>m</sub> 56<sub>h</sub> */}
              {isFinished &&
                dayjs(tournamentData.end_time).format("MMM D, YYYY hh:mm A")}
              {isLiveStarted && tournamentData?.end_time && (
                <>
                  <NFTCounter
                    time={tournamentData?.end_time}
                    timeClass="counter-time"
                    handleEndEvent={() => setChangeEnd()}
                    cTime={cTime}
                  />
                </>
              )}
              {isUpcoming && tournamentData?.start_time && (
                <>
                  <NFTCounter
                    time={tournamentData?.start_time}
                    timeClass="counter-time"
                    handleEndEvent={() => setChangeStart()}
                    cTime={cTime}
                  />
                </>
              )}
              {Object.keys(tournamentData).length===1 && "Upcoming Tournament Coming Soon"}
            </h5>
          </div>
        </div>
      </article>
    </>
  );
};

export default Tournament;
