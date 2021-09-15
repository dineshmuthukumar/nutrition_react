import React from "react";
import "./style.scss";

const CurrentBid = () => {
  return (
    <div className="current-bid">
      <div className="title">Current Bid</div>
      <div className="value">
        <div className="crypto me-3">2.55 ETH</div>
        <div className="dollar text-secondary">$ 3,444.00</div>
      </div>
    </div>
  );
};

export default CurrentBid;
