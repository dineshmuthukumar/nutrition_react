import React from "react";
import "./style.scss";

import SlamImage from "../../images/jump-trade/tournament/Grand-Slam.png";
import LivenowBall from "../../images/jump-trade/tournament/Balll_1.png";

const Tournament = ({ ClassNames }) => {
  return (
    <>
      <article className={`tournament-card ${ClassNames}`}>
        <img src={SlamImage} className="slam-image" />
        <div className="content-block">
          <span className="tournament-end-band">
            tournament <br /> ended
          </span>
          <a href="javascript:void(0);" className="live-btn">
            <span>Live</span>
            <img src={LivenowBall} />
            <span>Now</span>
          </a>
          <h5>Upcoming tournament starts in</h5>
          <div className="timer-box">
            <h5 className="timer-time">
              11<sub>d</sub> 14<sub>h</sub> 40<sub>m</sub> 56<sub>h</sub>
            </h5>
          </div>
        </div>
      </article>
    </>
  );
};

export default Tournament;
