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

  const level = [
    {
      type: "1",
      name: "LVL 1",
      value: lvl001,
    },
    {
      type: "2",
      name: "LVL 2",
      value: lvl002,
    },
    {
      type: "3",
      name: "LVL 3",
      value: lvl003,
    },
    {
      type: "4",
      name: "LVL 4",
      value: lvl004,
    },
    {
      type: "5",
      name: "LVL 5",
      value: lvl005,
    },
    {
      type: "6",
      name: "LVL 6",
      value: lvl006,
    },
    {
      type: "7",
      name: "LVL 7",
      value: lvl007,
    },
    {
      type: "8",
      name: "LVL 8",
      value: lvl008,
    },
    {
      type: "9",
      name: "LVL 9",
      value: lvl009,
    },
    {
      type: "10",
      name: "LVL 10",
      value: lvl0010,
    },
    {
      type: "11",
      name: "LVL 11",
      value: lvl0011,
    },
    {
      type: "12",
      name: "LVL 12",
      value: lvl0012,
    },
    {
      type: "13",
      name: "LVL 13",
      value: lvl0013,
    },
    {
      type: "14",
      name: "LVL 14",
      value: lvl0014,
    },
    {
      type: "15",
      name: "LVL 15",
      value: lvl0015,
    },
  ];

  const role = [
    {
      type: "Batsman",
      name: "BATSMAN",
      value: batsmanIcon,
    },
    {
      type: "Bowler",
      name: "BOWLER",
      value: bowlerIcon,
    },
    {
      type: "Bat",
      name: "BAT",
      value: batsmanIcon,
    },
  ];

  const playerCategory = [
    {
      type: "ROOKIE",
      value: "RO",
      color: "#3b56ff",
    },
    {
      type: "RARE",
      value: "RA",
      color: "#f58220",
    },
    {
      type: "EPIC",
      value: "EP",
      color: "#9e6cef",
    },
    {
      type: "LEGEND",
      value: "LG",
      color: "linear-gradient(202deg, #e2ff00, #18e0e0, #e8318d)",
    },
    {
      type: "SUPER RARE",
      value: "SR",
      color: "#803cef",
    },
    {
      type: "ULTRA RARE",
      value: "UR",
      color: "#803cef",
    },
    {
      type: "IMMORTAL",
      value: "IM",
      color: "#803cef",
    },
  ];

  const levelData = level.find(
    (obj) => obj.type === nft?.core_statistics?.level?.value
  );
  const roleData = role.find(
    (obj) => obj.type === nft?.core_statistics?.role?.value
  );
  const playerCatData = playerCategory.find(
    (obj) => obj.type === nft?.core_statistics?.category?.value
  );

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
          {roleData && (
            <div className="player-type">
              <img src={roleData?.value} />
            </div>
          )}

          {playerCatData && (
            <div
              className="player-range"
              style={{
                borderBottom: levelData ? "0.1rem solid #fff" : "none",
              }}
            >
              <span
                className="band"
                style={{
                  background: playerCatData?.color ? playerCatData?.color : "",
                }}
              >
                {playerCatData?.value}
              </span>
            </div>
          )}

          {levelData && (
            <div className="player-level">
              <h6>{levelData?.name}</h6>
              <img src={levelData?.value} />
            </div>
          )}
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
          {/* <div className="heart_box">
            <div className="svg_size filled_heart_icon"></div> */}

          {/* <div className="svg_size heart_icon"></div> */}
          {/* </div> */}
          <div className="cart_box">
            <div className="svg_size cart_icon"></div>
            <span className="cart_text">Add To Cart</span>
          </div>
          <div>
            {nft?.owner_name && (
              <div className="more-nft-desc owner_name">{nft?.owner_name}</div>
            )}
            <div className="more-nft-title">{nft?.name}</div>
            <h6 className="nft-signature">
              <span>Signed by </span> Sachin Tendulkar &amp; Ricky Ponting
            </h6>
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
