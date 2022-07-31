import React, { useEffect, useState } from "react";
import "./style.scss";

import SlamImage from "../../images/jump-trade/tournament/Grand-Slam.png";
import LivenowBall from "../../images/jump-trade/tournament/Balll_1.png";
import finishedMatch from "../../images/mcl-game-launcher/finished-match.png";
import upcomingMatch from "../../images/mcl-game-launcher/upcoming-match.png";
import NFTCounter from "../nft-counter";
import dayjs from "dayjs";

const Tournament = ({
  index,
  statusChange = () => {},
  tournamentData = {},
}) => {
  const [cTime, setCTime] = useState(new Date());
  // Timed Auction
  const [isUpcoming, setIsUpcoming] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isLiveStarted, setIsLiveStarted] = useState(false);
  var className = "upcoming-card";

  useEffect(() => {
    showTimer();
  }, []);
  console.log(!tournamentData?.schedule);

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
    statusChange();
  };
  const setChangeEnd = () => {
    statusChange();
  };
  if (isUpcoming) className = "upcoming-card";
  else if (isFinished) className = "expire-card";
  else if (isLiveStarted) className = "livenow-card";

  return (
    <>
      <article className={`tournament-card ${className}`}>
        {!tournamentData?.schedule && (
          <img src={tournamentData?.img_url} className="slam-image" />
        )}
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
          {isFinished && (
            <img className="img-upcoming_expire" src={finishedMatch} />
          )}
          {isUpcoming && (
            <img className="img-upcoming_expire" src={upcomingMatch} />
          )}
          {tournamentData?.schedule && (
            <img className="img-upcoming_expire" src={upcomingMatch} />
          )}
          {isUpcoming && (
            <>
              {" "}
              {index === 2 ? (
                <h5> Tournament starts in</h5>
              ) : (
                <h5>Upcoming tournament starts in</h5>
              )}
            </>
          )}
          {isLiveStarted && <h5>tournament ends in</h5>}
          {isFinished && <h5>tournament ended on</h5>}
          <div className="timer-box">
            <h5 className="timer-time">
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
              {tournamentData?.schedule && "Up Next"
          }
            </h5>
          </div>
        </div>
      </article>
    </>
  );
};

export default Tournament;
