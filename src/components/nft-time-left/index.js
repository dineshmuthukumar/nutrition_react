import React from "react";
import NFTCounter from "../nft-counter";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import "./style.scss";

const NFTTimeLeft = () => {
  return (
    <div className="nft-time-left">
      <div className="title">
        Auction ending in
        <BsFillQuestionCircleFill size={20} className="ms-1 question-icon" />
      </div>
      <NFTCounter time={"2021-09-28"} />
    </div>
  );
};

export default NFTTimeLeft;
