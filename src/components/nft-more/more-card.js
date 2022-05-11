import React from "react";
import dayjs from "dayjs";
import { useRouteMatch, Link } from "react-router-dom";
import NFTCounter from "../nft-counter";

import sample from "../../images/drops/nft_2.png";

import { currencyFormat } from "../../utils/common";

import batsmanIcon from "../../images/jump-trade/batsman_ico.png";
import bowlerIcon from "../../images/jump-trade/bowler_ico.png";

import lvl001 from "../../images/jump-trade/player_levels/1.png";
import lvl002 from "../../images/jump-trade/player_levels/2.png";
import lvl003 from "../../images/jump-trade/player_levels/3.png";
import lvl004 from "../../images/jump-trade/player_levels/4.png";
import lvl005 from "../../images/jump-trade/player_levels/5.png";
import lvl006 from "../../images/jump-trade/player_levels/6.png";
import lvl007 from "../../images/jump-trade/player_levels/7.png";
import lvl008 from "../../images/jump-trade/player_levels/8.png";
import lvl009 from "../../images/jump-trade/player_levels/9.png";
import lvl0010 from "../../images/jump-trade/player_levels/10.png";
import lvl0011 from "../../images/jump-trade/player_levels/11.png";
import lvl0012 from "../../images/jump-trade/player_levels/12.png";
import lvl0013 from "../../images/jump-trade/player_levels/13.png";
import lvl0014 from "../../images/jump-trade/player_levels/14.png";
import lvl0015 from "../../images/jump-trade/player_levels/15.png";

import "./style.scss";

const MoreCard = ({ nft, isStarted = false, isEnded, time, label }) => {
  const erc721 = nft.nft_type === "erc721";
  const { search } = useRouteMatch().params;

  return (
    <Link
      className="more-card jt-card"
      to={search ? `${search}/details/${nft.slug}` : `/details/${nft.slug}`}
      target="_blank"
    >
      <span className="nft-type-badge">{nft.nft_type.toUpperCase()}</span>
      <article className={`player_stats `}>
        <div className="player-type">
          <img src={batsmanIcon} />
        </div>

        <div className="player-range">
          <span className="band">RO</span>
        </div>

        <div className="player-level">
          <h6>LVL 2</h6>
          <img src={lvl002} />
        </div>
      </article>
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
      <div className="top-content-title">
        {/* <div className="heart_box">
          <div className="svg_size filled_heart_icon"></div> */}

        {/* <div className="svg_size heart_icon"></div> */}
        {/* </div> */}

        <div className="cart_box">
          <div className="svg_size cart_icon"></div>
        </div>
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
      </div>
    </Link>
  );
};

export default MoreCard;
