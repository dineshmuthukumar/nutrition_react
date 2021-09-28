import React from "react";
import NFTCounter from "../nft-counter";
import dayjs from "dayjs";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import ToolTip from "../tooltip";
import "./style.scss";

const NFTTimeLeft = ({ title, tooltipText, isEnded = false, time }) => {
  return (
    <div className="nft-time-left">
      <div className="title">
        {title}
        <ToolTip
          content={tooltipText}
          icon={
            <BsFillQuestionCircleFill
              size={16}
              className="ms-2 question-icon"
            />
          }
          placement="right"
        />
      </div>
      {isEnded ? (
        <div className="end-date">
          {dayjs("2019-01-25").format("DD. MM. YYYY")}
        </div>
      ) : (
        <NFTCounter time={time} />
      )}
    </div>
  );
};

export default NFTTimeLeft;
