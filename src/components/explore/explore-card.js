import React from "react";
import dayjs from "dayjs";
import { useRouteMatch, Link } from "react-router";

import sample from "../../images/sampleNFT.jpg";
import NFTCounter from "../nft-counter";
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

const ExploreCard = ({
  nft,
  slug,
  punkClass = "",
  isStarted,
  isEnded,
  time,
  label,
  title,
  bidPrice,
  desc,
  nftType,
}) => {
  const erc721 = nftType === "erc721";
  const { search } = useRouteMatch().params;

  // const handleClick = () => {
  //   if (nft?.is_on_sale) {
  //     history.push(`/order/details/${nft?.slug}/${nft?.order_details?.slug}`);
  //   } else {
  //     history.push(`/details/${nft?.slug}`);
  //   }
  // };
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
      <Link
        className="more-card jt-card"
        to={(() => {
          if (nft?.is_on_sale) {
            return search
              ? `/${search}/order/details/${nft?.slug}/${nft?.order_details?.slug}`
              : `/order/details/${nft?.slug}/${nft?.order_details?.slug}`;
          } else {
            return search
              ? `/${search}/details/${nft?.slug}`
              : `/details/${nft?.slug}`;
          }
        })()}
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
          alt="item logo "
          className={punkClass}
          src={(() => {
            if (nft?.asset_type?.includes("image")) {
              return nft.asset_url ? nft.asset_url : sample;
            } else if (nft?.cover_url) {
              return nft.cover_url ? nft.cover_url : sample;
            } else {
              return nft.asset_url ? nft.asset_url : sample;
            }
          })()}
          width="100%"
          align="post"
          role="button"
        />

        <div className="top-content-title">
          <div className="heart_box">
            <div className="svg_size filled_heart_icon"></div>

            {/* <div className="svg_size heart_icon"></div> */}
          </div>
          <div>
            <div className="more-nft-title">{nft?.name}</div>
            {nft?.owner_name && (
              <div className="more-nft-desc">{nft?.owner_name}</div>
            )}
          </div>
          {nft?.is_on_sale && (
            <>
              <div className="more-bid-details">
                <div className="text-start">
                  <div className="mb-title text-secondary">
                    {(() => {
                      if (erc721) {
                        return nft?.order_details?.is_bid
                          ? "Bid Price"
                          : "Price";
                      } else {
                        return "Price";
                      }
                    })()}
                  </div>
                  <div className="mb-value">
                    {(() => {
                      if (erc721) {
                        return nft?.order_details?.is_bid
                          ? currencyFormat(
                              nft?.order_details?.top_bid
                                ? nft?.order_details?.top_bid
                                : nft?.order_details?.minimum_bid,
                              "USD"
                            )
                          : currencyFormat(
                              nft?.order_details?.buy_amount,
                              "USD"
                            );
                      } else {
                        return currencyFormat(
                          nft?.order_details?.buy_amount,
                          "USD"
                        );
                      }
                    })()}
                  </div>
                </div>
                <div className="text-end">
                  <div className="mb-title text-secondary">
                    {(() => {
                      if (erc721) {
                        return nft?.order_details?.is_bid
                          ? "Bid Price"
                          : "Price";
                      } else {
                        return "Price";
                      }
                    })()}
                  </div>
                  <div className="mb-value">
                    {(() => {
                      if (erc721) {
                        return nft?.order_details?.is_bid
                          ? currencyFormat(
                              nft?.order_details?.top_bid
                                ? nft?.order_details?.top_bid
                                : nft?.order_details?.minimum_bid,
                              "USD"
                            )
                          : currencyFormat(
                              nft?.order_details?.buy_amount,
                              "USD"
                            );
                      } else {
                        return currencyFormat(
                          nft?.order_details?.buy_amount,
                          "USD"
                        );
                      }
                    })()}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ExploreCard;
