import React from "react";
import ReadMoreReact from "read-more-react";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";

import NFTTimeLeft from "../nft-time-left";
import BidValue from "../bid-value";
import ToolTip from "../tooltip";
import NFTPlaceBid from "./../nft-place-bid";
import { ReactComponent as DiscordSvg } from "./../../icons/discord_logo.svg";
import { currencyFormat } from "../../utils/common";

import "./style.scss";

const NFTBaseDetails = ({
  nft,
  placeBidPop,
  setPlaceBidPop,
  // socketData,
  totalBuy,
  userTotalBuys,
  price,
  availableQty,
  isAuctionStarted,
  isAuctionEnded,
  soldOut,
  auctionEndTime,
  handleAuctionStartTimer,
  handleAuctionEndTimer,
  winner,
}) => {
  const { user } = useSelector((state) => state.user.data);

  const erc721 = nft.nft_type === "erc721";

  return (
    <>
      <div className="creator mt-3">
        {nft.category_name} | Amitabh Bachchan Exclusive NFTs
        <ToolTip
          icon={<FaCheckCircle size={16} className="ms-2 check-icon" />}
          content="Verified Artist"
          placement="right"
        />
        {(isAuctionEnded || soldOut) && (
          <span className="nft-status-tag rounded-pill">Sold Out</span>
        )}
      </div>
      <div className="nft-title-container">
        <div className="nft-title">{nft.name}</div>

        <ToolTip
          icon={
            <div
              className="discord"
              onClick={() =>
                window.open("https://discord.com/invite/87s8ReJ5FA", "_blank")
              }
            >
              {/* <div className="count">22</div> */}
              <DiscordSvg />
            </div>
          }
          content="View this NFT bid's discord server"
          placement="left"
        />
      </div>
      <p className="text-secondary mt-1 mb-5 nft-desc">
        {nft.description && (
          <ReadMoreReact
            min={200}
            ideal={200}
            max={550}
            text={nft.description}
          />
        )}
      </p>

      <div className="bottom-content">
        <div className="d-flex">
          {erc721 ? (
            <BidValue
              title={(() => {
                if (isAuctionEnded) {
                  return "Last Bid";
                } else if (isAuctionStarted) {
                  return "Current Bid";
                } else {
                  return "Minimum Bid";
                }
              })()}
              value={
                price
                  ? currencyFormat(price, "USD")
                  : currencyFormat(nft.minimum_bid, "USD")
              }
            />
          ) : (
            <BidValue
              title="Price"
              value={nft.buy_amount && currencyFormat(nft.buy_amount, "USD")}
            />
          )}

          {user && nft.user_highest_bid && (
            <BidValue
              title="Your Last Bid"
              value={currencyFormat(nft.user_highest_bid, "USD")}
              status={
                parseFloat(nft.user_highest_bid) < parseFloat(nft.minimum_bid)
                  ? "Outbid"
                  : ""
              }
            />
          )}

          {erc721 && isAuctionEnded && winner && (
            <BidValue
              title="Owned By"
              avatar={winner.avatar_url}
              name={winner.user_name}
              isEnd
            />
          )}
        </div>
        <hr className="custom-divider" />
        {!isAuctionStarted && (
          <NFTTimeLeft
            title="Auction starting in"
            tooltipText={(() => {
              if (erc721) {
                if (nft.auction_extend_minutes) {
                  return `When there are less than 5 minutes left in the auction, successful bids will reset the auction to ${nft.auction_extend_minutes} minutes.`;
                } else {
                  return "When there are less than 5 minutes left in the auction, successful bids will not reset the auction ending time";
                }
              } else {
                return "Nft buy auction";
              }
            })()}
            time={nft.auction_start_time}
            cTime={nft.time}
            handleTimer={handleAuctionStartTimer}
          />
        )}
        {!isAuctionEnded && isAuctionStarted && (
          <NFTTimeLeft
            title="End of Auction"
            tooltipText={(() => {
              if (erc721) {
                if (nft.auction_extend_minutes) {
                  return `When there are less than 5 minutes left in the auction, successful bids will reset the auction to ${nft.auction_extend_minutes} minutes.`;
                } else {
                  return "When there are less than 5 minutes left in the auction, successful bids will not reset the auction ending time";
                }
              } else {
                return "Nft buy auction";
              }
            })()}
            time={auctionEndTime}
            handleTimer={handleAuctionEndTimer}
          />
        )}
        {isAuctionEnded && (
          <NFTTimeLeft
            title="Auction ended on"
            tooltipText="Auction ended"
            time={auctionEndTime}
            isEnded={true}
          />
        )}
        <hr className="custom-divider" />
        <div className="d-flex">
          {(() => {
            if (erc721) {
              return <BidValue title="Limited Edition" value="1 of 1" isLeft />;
            } else if (nft.total_quantity) {
              return (
                <>
                  <BidValue
                    title="Edition(s)"
                    value={
                      availableQty >= 0 && availableQty != null
                        ? `${availableQty} / ${nft.total_quantity}`
                        : `${nft.quantity} / ${nft.total_quantity}`
                    }
                  />
                  {nft.total_user_buys > 0 && (
                    <BidValue
                      title="You Owned"
                      value={
                        userTotalBuys
                          ? `${userTotalBuys} / ${nft.total_quantity} NFTs`
                          : `${nft.total_user_buys} / ${nft.total_quantity} NFTs`
                      }
                    />
                  )}
                </>
              );
            } else {
              return (
                <BidValue
                  title="Unlimited Edition"
                  value={
                    totalBuy
                      ? `${totalBuy} / unlimited`
                      : `${nft.total_buys}  / unlimited`
                  }
                />
              );
            }
          })()}
        </div>
        <hr className="custom-divider" />

        <div className="text-center">
          <NFTPlaceBid
            nft={nft}
            placeBidPop={placeBidPop}
            setPlaceBidPop={setPlaceBidPop}
            // socketData={socketData}
            price={price}
            userTotalBuys={userTotalBuys}
            isAuctionStarted={isAuctionStarted}
            isAuctionEnded={isAuctionEnded}
            soldOut={soldOut}
          />

          {(() => {
            if (parseFloat(user?.balance) <= 0) {
              return (
                <button
                  disabled={isAuctionEnded}
                  className={`btn ${
                    isAuctionEnded
                      ? "btn-dark place-bid-btn"
                      : "btn-danger text-white recharge-btn"
                  } text-center btn-lg mt-2 rounded-pill`}
                  onClick={() =>
                    window.open(
                      `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/wallet`,
                      "_self"
                    )
                  }
                >
                  {isAuctionEnded ? "Auction has ended" : "Recharge Wallet"}
                </button>
              );
            } else if (!user) {
              return (
                <button
                  disabled={isAuctionEnded}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  onClick={() =>
                    window.open(
                      `${process.env.REACT_APP_ACCOUNTS_URL}/signin?redirect=${window.location.href}`,
                      "_self"
                    )
                  }
                >
                  {isAuctionEnded ? "Auction has ended" : "Sign In"}
                </button>
              );
            } else if (erc721) {
              return (
                <button
                  disabled={(() => {
                    if (!isAuctionStarted && !isAuctionEnded) {
                      return !isAuctionStarted;
                    } else {
                      return isAuctionEnded;
                    }
                  })()}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  onClick={() => setPlaceBidPop(!placeBidPop)}
                >
                  {(() => {
                    if (!isAuctionStarted && !isAuctionEnded) {
                      return "Auction has not yet begun";
                    } else if (isAuctionEnded) {
                      return "Auction has ended";
                    } else {
                      return "Place a Bid";
                    }
                  })()}
                </button>
              );
            } else {
              return (
                <button
                  disabled={(() => {
                    if (!isAuctionStarted && !isAuctionEnded) {
                      return !isAuctionStarted;
                    } else if (isAuctionEnded) {
                      return isAuctionEnded;
                    } else {
                      return soldOut;
                    }
                  })()}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  onClick={() => setPlaceBidPop(!placeBidPop)}
                >
                  {(() => {
                    if (!isAuctionStarted && !isAuctionEnded) {
                      return "Auction has not yet begun";
                    } else if (isAuctionEnded) {
                      return "Auction has ended";
                    } else if (soldOut) {
                      return "Sold Out";
                    } else {
                      return "Buy";
                    }
                  })()}
                </button>
              );
            }
          })()}

          <div className="mt-2 royalty-info">
            {erc721 &&
              !isAuctionEnded &&
              nft.auction_extend_minutes &&
              `Counterbid within the last 5 minutes will extend the auction by ${nft.auction_extend_minutes} minutes`}
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTBaseDetails;
