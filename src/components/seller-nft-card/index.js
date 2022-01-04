import React from "react";
import { useHistory } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./style.scss";
import { currencyFormat } from "../../utils/common";

const SellerNFTCard = ({ nft, image }) => {
  const erc721 = nft?.nft_type === "erc721";
  const history = useHistory();

  const handleClick = () => {
    if (nft?.is_on_sale) {
      history.push(`/details/${nft?.slug}/${nft?.order_details?.slug}`);
    } else {
      history.push(`/details/${nft?.slug}`);
    }
  };
  return (
    <>
      <article className="nft-card">
        <figure>
          <img
            src={(() => {
              if (nft?.asset_type?.includes("image")) {
                return nft.asset_url ? nft.asset_url : image;
              } else {
                return nft?.cover_url ? nft?.cover_url : image;
              }
            })()}
            alt="cardImage"
            role="button"
            // onClick={handleClick}
          />
          <FaHeart className="heart-icon" />
        </figure>
        <div className="nft-content">
          <h3>{nft?.name}</h3>
          <h4>Featured NFT</h4>
          <div className="nft-priceType">
            <h5 className="nft-price">
              <span className="key">{erc721 ? "Bid Price" : "Price"}</span>
              <span className="value">
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
              </span>
            </h5>
            <h5 className="nft-type">
              <span className="key">NFT Type</span>
              <span className="value">
                {nft?.nft_type === "erc721" ? "ERC 721" : "ERC 1155"}
              </span>
            </h5>
          </div>
        </div>
      </article>
    </>
  );
};

export default SellerNFTCard;
