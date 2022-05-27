import React from "react";
import { useRouteMatch, Link } from "react-router";

import images from "../../utils/images.json";
import { currencyFormat } from "../../utils/common";

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
      value: images.level1,
    },
    {
      type: "2",
      name: "LVL 2",
      value: images.level2,
    },
    {
      type: "3",
      name: "LVL 3",
      value: images.level3,
    },
    {
      type: "4",
      name: "LVL 4",
      value: images.level4,
    },
    {
      type: "5",
      name: "LVL 5",
      value: images.level5,
    },
    {
      type: "6",
      name: "LVL 6",
      value: images.level6,
    },
    {
      type: "7",
      name: "LVL 7",
      value: images.level7,
    },
    {
      type: "8",
      name: "LVL 8",
      value: images.level8,
    },
    {
      type: "9",
      name: "LVL 9",
      value: images.level9,
    },
    {
      type: "10",
      name: "LVL 10",
      value: images.level10,
    },
    {
      type: "11",
      name: "LVL 11",
      value: images.level11,
    },
    {
      type: "12",
      name: "LVL 12",
      value: images.level12,
    },
    {
      type: "13",
      name: "LVL 13",
      value: images.level13,
    },
    {
      type: "14",
      name: "LVL 14",
      value: images.level14,
    },
    {
      type: "15",
      name: "LVL 15",
      value: images.level15,
    },
  ];

  const role = [
    {
      type: "Batsman",
      name: "BATSMAN",
      value: images.batsmanICO,
    },
    {
      type: "Bowler",
      name: "BOWLER",
      value: images.bowlerIco,
    },
    {
      type: "Bat",
      name: "BAT",
      value: images.batsmanICO,
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
              return nft.asset_url ? nft.asset_url : images.sample;
            } else if (nft?.cover_url) {
              return nft.cover_url ? nft.cover_url : images.sample;
            } else {
              return nft.asset_url ? nft.asset_url : images.sample;
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
