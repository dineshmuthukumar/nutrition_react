import React from "react";
import dayjs from "dayjs";
import { useHistory } from "react-router";

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
  const history = useHistory();

  const handleClick = () => {
    if (nft?.is_on_sale) {
      history.push(`/details/${nft?.slug}/${nft?.order_details?.slug}`);
    } else {
      history.push(`/details/${nft?.slug}`);
    }
  };
  return (
    <div className="col-xl-4 col-lg-4 col-sm-6">
      <div className="block-box user-post  mb-5">
        <div className="item-post">
          <span className="nft-type-badge">{nft.nft_type.toUpperCase()}</span>
          <img
            alt="item logo "
            className={punkClass}
            src={(() => {
              if (nft?.asset_type?.includes("image")) {
                return nft.asset_url ? nft.asset_url : sample;
              } else {
                return nft.cover_url ? nft.cover_url : sample;
              }
            })()}
            width="100%"
            align="post"
            role="button"
            onClick={handleClick}
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="left-bid">
            <h6 className="post-title">{nft.name}</h6>
            <p className="desc-para">{nft.description}</p>
          </div>
          {/* {!erc721 && !isEnded && (
            <div className="rights-bid">
              <p className="left_bid mt-3">
                {nft.quantity ? `Only ${nft.quantity} left` : "Sold out"}
              </p>
            </div>
          )} */}
        </div>
        <div className="post-cost pw_we d-flex  justify-content-between">
          <div className="left-bids">
            <div className="post-sold-text">
              {erc721 ? "Bid Price" : "Price"}
            </div>
            <div className="post-sold-cost">
              {(() => {
                if (nft?.is_on_sale) {
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
                } else {
                  return "Not For Sale";
                }
              })()}
            </div>
          </div>
          {/* <div className="right-bid">
            <div className="post-sold-text">NFT Type</div>
            <div className="post-sold-cost">
              {nft?.nft_type === "erc721" ? "ERC 721" : "ERC 1155"}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
