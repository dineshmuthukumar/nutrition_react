import React from "react";
import NFTCounter from "../nft-counter";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import ToolTip from "../tooltip";
import "./style.scss";

const NFTTimeLeft = () => {
  return (
    <div className="nft-time-left">
      <div className="title">
        Auction ending in
        <ToolTip
          content="When there are less than 5 minutes left in the auction, successful bids will reset the auction to 5 minutes."
          icon={
            <BsFillQuestionCircleFill
              size={16}
              className="ms-2 question-icon"
            />
          }
          placement="right"
        />
      </div>
      <NFTCounter time={"2021-09-28"} />
    </div>
  );
};

export default NFTTimeLeft;
