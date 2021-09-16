import React from "react";
import BidCard from "./bid-card";
import "./style.scss";

const BidHistory = () => {
  return (
    <div className="bid-history">
      <div className="bid-history-title">Bid History</div>
      <div className="bid-history-content mt-3">
        <BidCard />
        <BidCard />
        <BidCard />
        <BidCard />
        <BidCard />
        <BidCard />
        <BidCard />
        <BidCard />
        <BidCard />
        <BidCard />
        <BidCard />
      </div>
    </div>
  );
};

export default BidHistory;
