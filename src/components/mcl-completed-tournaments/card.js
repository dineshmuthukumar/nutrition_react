import React from "react";

import SlamImage from "../../images/jump-trade/tournament/Grand-Slam.png";
import GoldCup from "../../images/jump-trade/cups/gold-cup.svg";
import SilverCup from "../../images/jump-trade/cups/silver-cup.svg";
import BronzeCup from "../../images/jump-trade/cups/bronze-cup.svg";

import "./style.scss";

const Card = () => {
  return (
    <>
      <article className="complete-tournament-list">
        <div className="slam-box">
          <img src={SlamImage} />
          <h5 className="leader-pill"> Leaderboard</h5>
          <h6>23/07/2022</h6>
        </div>
        <div className="winnerlist-box">
          <h3>Winners</h3>
          <ul>
            <li>
              <img src={GoldCup} alt="GoldCup" />
              <span className="winnername">VISHNU</span>
            </li>
            <li>
              <img src={SilverCup} alt="SilverCup" />
              <span className="winnername">Devendra</span>
            </li>
            <li>
              <img src={BronzeCup} alt="BronzeCup" />
              <span className="winnername">User_100</span>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
};

export default Card;
