import React from "react";
import userImg from "../../images/user_1.png";

const BidName = ({ imgUrl, text, isTable = false }) => {
  return isTable ? (
    <div className="expand-history-owner">
      <img src={imgUrl ? imgUrl : userImg} />
      <div>
        <div className="text-secondary">{text}</div>
      </div>
    </div>
  ) : (
    <span className="text-secondary">{text}</span>
  );
};

export default BidName;
