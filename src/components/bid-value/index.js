import React from "react";
import "./style.scss";

const BidValue = ({
  title,
  value,
  currency,
  status,
  isEnd = false,
  isLeft = false,
  name,
}) => {
  return (
    <div className="current-bid">
      <div className="title">
        {title}
        {status && <span className="status-tag rounded-pill">{status}</span>}
      </div>
      <div className="value">
        {isEnd ? (
          <div className="user-detail">
            <img src="https://picsum.photos/100/100" />
            <div className="win-user-name">{name}</div>
          </div>
        ) : (
          <div className="crypto me-3">
            {currency} {value}
            {isLeft && <div className="edition">left</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default BidValue;
