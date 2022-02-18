import React from "react";
import sample from "../../../../images/sampleNFT.jpg";
import "./style.scss";
import { currencyFormat } from "../../../../utils/common";

const Cards = ({ nft }) => {
  const erc721 = nft?.nft_type === "erc721";
  return (
    <>
      <a
        className="more-card"
        role="link"
        href={(() => {
          if (nft?.is_on_sale) {
            return `/order/details/${nft?.slug}/${nft?.order_details?.slug}`;
          } else {
            return `/details/${nft?.slug}`;
          }
        })()}
      >
        <span className="nft-type-badge">{nft?.nft_type.toUpperCase()}</span>
        <img
          alt="media logo"
          src={(() => {
            if (nft?.asset_type?.includes("image")) {
              return nft.asset_url ? nft.asset_url : sample;
            } else if (nft?.cover_url) {
              return nft.cover_url ? nft.cover_url : sample;
            } else {
              return nft.asset_url ? nft.asset_url : sample;
            }
          })()}
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
                          : "Buy Price";
                      } else {
                        return "Buy Price";
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
                {erc721 &&
                  nft?.order_details?.is_bid &&
                  nft?.order_details?.is_buy && (
                    <div className="text-end">
                      <div className="mb-title text-secondary">Buy Price</div>
                      <div className="mb-value">
                        {currencyFormat(nft?.order_details?.buy_amount, "USD")}
                      </div>
                    </div>
                  )}
              </div>
            </>
          )}
        </div>
      </a>
    </>
  );
};

export default Cards;
