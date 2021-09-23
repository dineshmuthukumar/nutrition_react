import React from "react";
import "./style.scss";
import BidName from "./bid-name";

const BidCard = ({ isEnd = false }) => {
  return (
    <div className="bid-histroy-card">
      {isEnd ? (
        <div className="history-end-content">
          You've reached the end of the list
        </div>
      ) : (
        <>
          <div className="first-half">
            <img src="https://picsum.photos/100/100" />
            <div className="bid-histoy-details">
              <div className="time text-secondary">Sep 20, 2021 11:15pm</div>
              <div className="bid-owner">
                Bid placed by <BidName text="johndoe" />
              </div>
            </div>
          </div>
          <div className="second-half">
            <div className="bid-value">$ 2345</div>
          </div>
        </>
      )}
    </div>
  );
};

export default BidCard;
