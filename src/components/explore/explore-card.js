import React from "react";
import dayjs from "dayjs";
import { useRouteMatch, Link } from "react-router";

import sample from "../../images/sampleNFT.jpg";
import NFTCounter from "../nft-counter";
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
        className="more-card"
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
