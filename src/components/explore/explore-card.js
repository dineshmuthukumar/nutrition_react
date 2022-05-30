import React from "react";
import { useRouteMatch, Link } from "react-router";

import images from "../../utils/images.json";
import { currencyFormat } from "../../utils/common";
import { level, role, playerCategory } from "../../utils/common";

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

  const levelData = level(nft?.core_statistics?.level?.value);
  const roleData = role(nft?.core_statistics?.role?.value);
  const playerCatData = playerCategory(nft?.core_statistics?.category?.value);

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
