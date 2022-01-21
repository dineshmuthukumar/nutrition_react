import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { prominent } from "color.js";
import { FaHeart } from "react-icons/fa";
import { currencyFormat } from "../../utils/common";
import cardImage from "../../images/drops/nft_2.png";

import "./style.scss";

const CollectionCard = ({ nft }) => {
  const erc721 = nft?.nft_type === "erc721";
  const history = useHistory();
  const [bgColor, setBgColor] = useState();

  useEffect(() => {
    if (nft?.asset_type?.includes("image")) {
      getBgColor(nft?.asset_url);
    } else if (nft?.cover_url) {
      getBgColor(nft?.cover_url);
    } else {
      getBgColor(nft?.asset_url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBgColor = async (input) => {
    if (input) {
      const image = nft.asset_type.includes("image")
        ? nft.asset_url
        : nft.cover_url
        ? nft.cover_url
        : nft.asset_url;
      const color = await prominent(image, { amount: 1 });
      if (nft.asset_type.includes("image")) {
        setBgColor(`rgb(${color[0]},${color[1]},${color[2]},0.3)`);
      } else {
        setBgColor(`#020001`);
      }
    } else {
      setBgColor(`rgb(0,0,0,0.1)`);
    }
  };

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
        style={{ background: bgColor }}
        alt="media logo"
        src={(() => {
          if (nft?.asset_type?.includes("image")) {
            return nft.asset_url ? nft.asset_url : cardImage;
          } else if (nft?.cover_url) {
            return nft.cover_url ? nft.cover_url : cardImage;
          } else {
            return nft.asset_url ? nft.asset_url : cardImage;
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
          <div className="more-bid-details">
            <div className="text-start">
              <div className="mb-title text-secondary">
                {(() => {
                  if (erc721) {
                    return nft?.order_details?.is_bid && "Bid Price";
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
            {erc721 && nft?.order_details?.is_buy && (
              <div className="text-end">
                <div className="mb-title text-secondary">Price</div>
                <div className="mb-value">
                  {currencyFormat(nft?.order_details?.buy_amount, "USD")}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionCard;
