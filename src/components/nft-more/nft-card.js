import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useRouteMatch, Link } from "react-router-dom";
import { prominent } from "color.js";
import { FaHeart } from "react-icons/fa";
import { currencyFormat } from "../../utils/common";
import NFTCounter from "../nft-counter";
import cardImage from "../../images/drops/nft_2.png";
import startin from "../../images/start_icon.png";
import endsin from "../../images/ends_icon.png";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";

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

const CollectionCard = ({ nft, recentSold = false, favouriteNFT = false }) => {
  const erc721 = nft?.nft_type === "erc721";
  const { search } = useRouteMatch().params;
  const [bgColor, setBgColor] = useState();
  const [auctionEndTime, setAuctionEndTime] = useState("");
  const [isAuctionStarted, setIsAuctionStarted] = useState(false);
  const [isAuctionEnded, setIsAuctionEnded] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    if (nft?.order_details?.timed_auction) {
      setIsAuctionStarted(
        new Date(nft?.time).getTime() >=
          new Date(nft?.order_details?.auction_start_time).getTime()
      );
      setIsAuctionEnded(
        new Date(nft?.time).getTime() >
          new Date(nft?.order_details?.auction_end_time).getTime()
      );
      setShowTimer(true);
    }
    if (favouriteNFT && nft?.timed_auction) {
      setIsAuctionStarted(
        new Date(nft?.time).getTime() >=
          new Date(nft?.auction_start_time).getTime()
      );
      setIsAuctionEnded(
        new Date(nft?.time).getTime() >
          new Date(nft?.auction_end_time).getTime()
      );
      setShowTimer(true);
    }
  }, []);

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
    <Link
      className="more-card jt-card"
      to={(() => {
        if (favouriteNFT) {
          return search
            ? `/${search}/order/details/${nft?.slug}/${nft?.order_slug}`
            : `/order/details/${nft?.slug}/${nft?.order_slug}`;
        } else if (nft?.is_on_sale) {
          return search
            ? `/${search}/order/details/${nft?.slug}/${nft?.order_details?.slug}`
            : `/order/details/${nft?.slug}/${nft?.order_details?.slug}`;
        } else if (recentSold) {
          return search
            ? `/${search}/order/details/${nft?.slug}/${nft?.order_slug}`
            : `/order/details/${nft?.slug}/${nft?.order_slug}`;
        } else {
          return search
            ? `/${search}/details/${nft?.slug}`
            : `/details/${nft?.slug}`;
        }
      })()}
    >
      <span className="nft-type-badge">{nft.nft_type.toUpperCase()}</span>
      <article className={`player_stats `}>
        <div className="player-type">
          <img src={batsmanIcon} />
        </div>

        <div className="player-range">
          <span className="band">RO</span>
        </div>

        <div className="player-level">
          <h6>LVL 2</h6>
          <img src={lvl002} />
        </div>
      </article>
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
        {/* <div className="heart_box">
          <div className="svg_size filled_heart_icon"></div> */}

        {/* <div className="svg_size heart_icon"></div> */}
        {/* </div> */}
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
                {showTimer && (
                  <>
                    {!isAuctionStarted && !isAuctionEnded && (
                      <div className="time-counter-box">
                        <span className="time-counter-card">
                          <span className="time-title">Starts</span>
                          <NFTCounter
                            time={nft?.order_details?.auction_start_time}
                            cTime={nft?.time}
                            timeClass="font-onerem"
                            intervalClass="font-psevenrem"
                            intervalGapClass="me-1"
                            handleEndEvent={handleAuctionStartTimer}
                          />
                          {/* &nbsp;&nbsp;
                          <span class="fire-icon">
                            <AiFillFire />
                          </span> */}
                        </span>
                      </div>
                    )}
                    {!isAuctionEnded && isAuctionStarted && (
                      <div className="time-counter-box">
                        <span className="time-counter-card">
                          <span className="time-title">Ends</span>
                          <NFTCounter
                            time={nft?.order_details?.auction_end_time}
                            cTime={nft?.time}
                            timeClass="font-onerem"
                            intervalClass="font-psevenrem"
                            intervalGapClass="me-1"
                            handleEndEvent={handleAuctionEndTimer}
                          />
                          {/* &nbsp;&nbsp;
                          <span class="fire-icon">
                            <AiFillFire />
                          </span> */}
                        </span>
                      </div>
                    )}
                  </>
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
        {favouriteNFT && (
          <>
            {nft?.is_bid && nft?.timed_auction && (
              <>
                {showTimer && (
                  <>
                    {!isAuctionStarted && !isAuctionEnded && (
                      <div className="time-counter-box">
                        <span className="time-counter-card">
                          <img src={startin} alt="startin" />
                          <NFTCounter
                            time={nft?.auction_start_time}
                            cTime={nft?.time}
                            timeClass="font-onerem"
                            intervalClass="font-psevenrem"
                            intervalGapClass="me-1"
                            handleEndEvent={handleAuctionStartTimer}
                          />
                          &nbsp;&nbsp;
                          <span class="fire-icon">
                            <AiFillFire />
                          </span>
                        </span>
                      </div>
                    )}
                    {!isAuctionEnded && isAuctionStarted && (
                      <div className="time-counter-box">
                        <span className="time-counter-card">
                          <img src={endsin} alt="endsin" />
                          <NFTCounter
                            time={nft?.auction_end_time}
                            cTime={nft?.time}
                            timeClass="font-onerem"
                            intervalClass="font-psevenrem"
                            intervalGapClass="me-1"
                            handleEndEvent={handleAuctionEndTimer}
                          />
                          &nbsp;&nbsp;
                          <span class="fire-icon">
                            <AiFillFire />
                          </span>
                        </span>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
            <div className="more-bid-details">
              <div className="text-start">
                <div className="mb-title text-secondary">
                  {(() => {
                    if (erc721) {
                      return nft?.is_bid ? "Bid Price" : "Buy Price";
                    } else {
                      return "Buy Price";
                    }
                  })()}{" "}
                </div>
                <div className="mb-value">
                  {(() => {
                    if (erc721) {
                      return nft?.is_bid
                        ? currencyFormat(
                            nft?.top_bid ? nft?.top_bid : nft?.minimum_bid,
                            "USD"
                          )
                        : currencyFormat(nft?.buy_amount, "USD");
                    } else {
                      return currencyFormat(nft?.buy_amount, "USD");
                    }
                  })()}
                </div>
              </div>
              {erc721 && nft?.is_bid && nft?.is_buy && (
                <div className="text-end">
                  <div className="mb-title text-secondary">Buy Price</div>
                  <div className="mb-value">
                    {currencyFormat(nft?.buy_amount, "USD")}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default CollectionCard;
