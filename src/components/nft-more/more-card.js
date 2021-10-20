import React from "react";
import dayjs from "dayjs";
import { currencyFormat } from "../../utils/common";
import NFTCounter from "../nft-counter";
import sample from "../../images/sampleNFT.jpg";
import "./style.scss";

const MoreCard = ({ nft, isStarted = false, isEnded, time, label }) => {
  const erc721 = nft.nft_type === "erc721";
  return (
    <div className="more-card">
      <img
        src={nft.image_url ? nft.image_url : sample}
        role="button"
        onClick={() => {
          window.open(`/details/${nft.slug}`, "_blank");
        }}
      />
      <div className="more-nft-title">
        {nft.name}
        {!erc721 && !isEnded && (
          <span className="left-count">
            {nft.quantity ? `Only ${nft.quantity} left` : "Sold out"}
          </span>
        )}
      </div>
      <div className="more-nft-desc"></div>
      <div className="more-bid-details">
        <div>
          <div className="mb-title text-secondary">
            {erc721 ? "Top Bid" : "Price"}
          </div>
          <div className="mb-value">
            {erc721
              ? currencyFormat(nft.top_bid, "USD")
              : currencyFormat(nft.buy_amount, "USD")}
          </div>
        </div>
        <div className="text-end">
          <div className="mb-title text-secondary">{label}</div>
          <div className="mb-value text-end">
            {isEnded ? (
              <>{time && dayjs(time).format("DD. MM. YYYY")}</>
            ) : (
              <NFTCounter
                time={time}
                timeClass="font-onerem"
                intervalClass="font-psevenrem"
                intervalGapClass="me-1"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreCard;
