import React from "react";
import "./style.scss";
import UserImage from "../../images/amitabh.png";

const HistoryHeader = () => {
  return (
    <div className="bid-history--header">
      <div className="bh-user-image">
        <img src={UserImage} alt="bid-user" />
      </div>
      <div className="bh-user-details">
        <h2 className="bh-user-name">@sirdonski</h2>
        <h4 className="bh-user-status">Owner</h4>
        <div className="bh-user-sold-info">
          <div className="price">
            <span className="key">NFT sold for</span>
            <span className="value">$2000.99</span>
          </div>
          <div className="date">
            <span className="key">Sold on</span>
            <span className="value">Sep 16, 21 11:11pm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryHeader;
