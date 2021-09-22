import React from "react";
import "./style.scss";

const BidWinner = (props) => {
  return (
    <div className="bid-winner">
      <div className="winner-text">WINNER</div>

      <div className="winner-user-details">
        <img src="https://picsum.photos/200/200" />
        <div className="winner-id">@rtyuio</div>
      </div>

      <div className="nft-sold-details">
        <div className="sold-for">
          <div className="sold-for-title">NFT sold for</div>
          <div className="sold-for-value">$2098.98</div>
        </div>
        <div className="sold-on">
          <div className="sold-on-title">NFT sold on</div>
          <div className="sold-on-value">Sep 16, 21 11:11pm</div>
        </div>
      </div>

      <div className="nft-lastbid-details">
        <div className="lastbid-left">
          <div className="lastbid-title">Last Bid</div>
          <div className="lastbid-value">$2098.98</div>
        </div>
        <div className="lastbid-right">
          <div className="lastbid-date-title">Last Bid Date</div>
          <div className="lastbid-date-value">Sep 16, 21 11:11pm</div>
        </div>
      </div>

      <div className="bottom-section">
        <button
          type="button"
          className="btn btn-dark rounded-pill border border-white bidding-history-btn"
        >
          Bidding History
        </button>
      </div>
    </div>
  );
};

export default BidWinner;
