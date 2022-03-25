import React from "react";
import dayjs from "dayjs";
import { useRouteMatch, Link } from "react-router-dom";
import NFTCounter from "../nft-counter";

import sample from "../../images/drops/nft_2.png";

import { currencyFormat } from "../../utils/common";

import "./style.scss";

const MoreCard = ({ nft, isStarted = false, isEnded, time, label }) => {
  const erc721 = nft.nft_type === "erc721";
  const { search } = useRouteMatch().params;

  return (
    <Link
      className="more-card"
      to={search ? `${search}/details/${nft.slug}` : `/details/${nft.slug}`}
      target="_blank"
    >
      <span className="nft-type-badge">{nft.nft_type.toUpperCase()}</span>
      <img
        alt="media logo"
        src={(() => {
          if (nft?.asset_type?.includes("image")) {
            return nft.asset_url ? nft.asset_url : sample;
          } else {
            return nft.cover_url ? nft.cover_url : sample;
          }
        })()}
        role="button"
      />
      <div className="more-nft-title">
        <span className="right-content">{nft.name}</span>
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
                cTime={nft.time}
                timeClass="font-onerem"
                intervalClass="font-psevenrem"
                intervalGapClass="me-1"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MoreCard;
