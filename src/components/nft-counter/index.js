import React from "react";
import Countdown from "react-countdown";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import "./style.scss";

const NFTCounter = () => {
  return (
    <div className="nft-counter">
      <div className="title">
        Auction ending in
        <BsFillQuestionCircleFill size={20} className="ms-1 question-icon" />
      </div>
      <Countdown date={Date.now() + 1000000} daysInHours />
    </div>
  );
};

export default NFTCounter;
