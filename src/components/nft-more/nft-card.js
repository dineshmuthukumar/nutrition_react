import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";
import { prominent } from "color.js";
import { FaHeart } from "react-icons/fa";
import { currencyFormat } from "../../utils/common";
import NFTCounter from "../nft-counter";
import cardImage from "../../images/drops/nft_2.png";
import startin from "../../images/start_icon.png";
import endsin from "../../images/ends_icon.png";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

import "./style.scss";

const CollectionCard = ({ nft, recentSold = false }) => {
  const erc721 = nft?.nft_type === "erc721";
  const history = useHistory();
  const [bgColor, setBgColor] = useState();
  const [auctionEndTime, setAuctionEndTime] = useState("");
  const [isAuctionStarted, setIsAuctionStarted] = useState(false);
  const [isAuctionEnded, setIsAuctionEnded] = useState(false);

  const handleAuctionStartTimer = () => {
    setIsAuctionStarted(true);
    // setAuctionEndTime(nft?.order_details?.auction_end_time);
  };
  const handleAuctionEndTimer = () => {
    setIsAuctionEnded(true);
  };

  // useEffect(() => {
  //   if (nft?.asset_type?.includes("image")) {
  //     getBgColor(nft?.asset_url);
  //   } else if (nft?.cover_url) {
  //     getBgColor(nft?.cover_url);
  //   } else {
  //     getBgColor(nft?.asset_url);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const getBgColor = async (input) => {
  //   if (input) {
  //     const image = nft.asset_type.includes("image")
  //       ? nft.asset_url
  //       : nft.cover_url
  //       ? nft.cover_url
  //       : nft.asset_url;
  //     const color = await prominent(image, { amount: 1 });
  //     if (nft.asset_type.includes("image")) {
  //       setBgColor(`rgb(${color[0]},${color[1]},${color[2]},0.3)`);
  //     } else {
  //       setBgColor(`#020001`);
  //     }
  //   } else {
  //     setBgColor(`rgb(0,0,0,0.1)`);
  //   }
  // };

  // const handleClick = () => {
  //   if (nft?.is_on_sale) {
  //     history.push(`/order/details/${nft?.slug}/${nft?.order_details?.slug}`);
  //   } else if (recentSold) {
  //     history.push(`/order/details/${nft?.slug}/${nft?.order_slug}`);
  //   } else {
  //     history.push(`/details/${nft?.slug}`);
  //   }
  // };
  return (
    <a
      className="more-card"
      role="button"
      href={
        nft?.is_on_sale
          ? `/order/details/${nft?.slug}/${nft?.order_details?.slug}`
          : recentSold
          ? `/order/details/${nft?.slug}/${nft?.order_slug}`
          : `/details/${nft?.slug}`
      }
    >
      <span className="nft-type-badge">{nft.nft_type.toUpperCase()}</span>
      <img
        // style={{ background: bgColor }}
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
          {recentSold && nft?.seller?.user_name && (
            <div className="more-nft-desc">{nft?.seller?.user_name}</div>
          )}
        </div>

        {nft?.is_on_sale && (
          <>
            {nft?.order_details?.is_bid && nft?.order_details?.timed_auction && (
              <>
                {!isAuctionStarted && !isAuctionEnded && (
                  <div className="time-counter-box">
                    <img src={startin} alt="startin" />
                    <NFTCounter
                      time={nft?.order_details?.auction_start_time}
                      cTime={nft?.time}
                      timeClass="font-onerem"
                      intervalClass="font-psevenrem"
                      intervalGapClass="me-1"
                      handleEndEvent={handleAuctionStartTimer}
                    />
                  </div>
                )}
                {!isAuctionEnded && isAuctionStarted && (
                  <div className="time-counter-box">
                    <img src={endsin} alt="endsin" />
                    <NFTCounter
                      time={nft?.order_details?.auction_end_time}
                      cTime={nft?.time}
                      timeClass="font-onerem"
                      intervalClass="font-psevenrem"
                      intervalGapClass="me-1"
                      handleEndEvent={handleAuctionEndTimer}
                    />
                  </div>
                )}
              </>
            )}
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
                  })()}{" "}
                  {/* {nft?.order_details?.is_bid && 100 > 0 ? (
                  <span className="value-diff-range green">
                    <BiUpArrowAlt className="arrow-icon" />
                    {`${100}%`}
                  </span>
                ) : (
                  <span className="value-diff-range red">
                    <BiDownArrowAlt className="arrow-icon" />
                    {`${100}%`}
                  </span>
                )} */}
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
        {recentSold && (
          <div className="more-bid-details">
            <div className="text-start">
              <div className="mb-title text-secondary">
                Sold For
                {/* {100 > 0 ? (
                  <span className="value-diff-range green">
                    <BiUpArrowAlt className="arrow-icon" />
                    {`${100}%`}
                  </span>
                ) : (
                  <span className="value-diff-range red">
                    <BiDownArrowAlt className="arrow-icon" />
                    {`${100}%`}
                  </span>
                )} */}
              </div>
              <div className="mb-value">
                {currencyFormat(nft?.amount, "USD")}
              </div>
            </div>
            <div className="text-end">
              <div className="mb-title-date text-secondary">Sold On</div>
              <div className="mb-value">
                {dayjs(nft?.created_at).format("MMM D, YYYY hh:mm A")}
              </div>
            </div>
          </div>
        )}
      </div>
    </a>
  );
};

export default CollectionCard;
