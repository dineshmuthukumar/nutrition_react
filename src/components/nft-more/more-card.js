import React from "react";
import "./style.scss";

const MoreCard = () => {
  return (
    <div className="more-card">
      <img src="https://picsum.photos/500/500" />
      <div className="more-nft-title">NFT Name</div>
      <div className="more-nft-desc">Jane Doe</div>
      <div className="more-bid-details">
        <div>
          <div className="mb-title text-secondary">Top Bid</div>
          <div className="mb-value">5.00 ETH</div>
        </div>
        <div className="text-end">
          <div className="mb-title text-secondary">Starting In</div>
          <div className="mb-value">10d 3h 12m 12s</div>
        </div>
      </div>
    </div>
  );
};

export default MoreCard;
