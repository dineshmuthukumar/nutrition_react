import React from "react";
import "./style.scss";
import BidName from "./bid-name";

const BidCard = () => {
  return (
    <div className="bid-histroy-card">
      <div className="first-half">
        <img src="https://picsum.photos/100/100" />
        <div className="bid-histoy-details">
          <div className="time text-secondary">4 hours ago</div>
          <div className="bid-owner">
            Bid placed by <BidName text="johndoe" />
          </div>
        </div>
      </div>
      <div className="second-half">
        <div className="bid-value">1.34 ETH</div>
        <div className="usd-value text-secondary">$2,900.39</div>
      </div>
    </div>
  );
};

export default BidCard;
