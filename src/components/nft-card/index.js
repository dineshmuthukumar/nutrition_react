import React from "react";
import { useHistory } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { currencyFormat } from "../../utils/common";
import cardImage from "../../images/drops/nft_2.png";

import "./style.scss";

const NFTCard = ({ nft }) => {
  const erc721 = nft?.nft_type === "erc721";
  const history = useHistory();

  const handleClick = () => {
    if (nft?.is_on_sale) {
      history.push(`/order/details/${nft?.slug}/${nft?.order_details?.slug}`);
    } else {
      history.push(`/details/${nft?.slug}`);
    }
  };
  return (
    <div className="more-card" role="button" onClick={handleClick}>
      {/* <span className="nft-like-btn">
        <FaHeart size={30} color="#ccc" />
      </span> */}
      <span className="nft-type-badge">{nft.nft_type.toUpperCase()}</span>
      <img
        alt="media logo"
        src={(() => {
          if (nft?.asset_type?.includes("image")) {
            return nft.asset_url ? nft.asset_url : cardImage;
          } else {
            return nft.cover_url ? nft.cover_url : cardImage;
          }
        })()}
        role="button"
      />

      <div className="top-content-title">
        <div>
          <div className="more-nft-title">{nft?.name}</div>
          <div className="more-nft-desc">Featured NFT</div>
        </div>
        {nft?.is_on_sale && (
          <>
            <div className="more-bid-details">
              <div className="text-end">
                <div className="mb-title text-secondary">
                  {(() => {
                    if (erc721) {
                      return nft?.order_details?.is_bid ? "Bid Price" : "Price";
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
                        : currencyFormat(nft?.order_details?.buy_amount, "USD");
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
    </div>
  );
};

export default NFTCard;
