import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import ReadMoreReact from "read-more-react";
import NFTTimeLeft from "../nft-time-left";
import BidValue from "../bid-value";
import NFTPlaceBid from "./../nft-place-bid";
import { ReactComponent as DiscordSvg } from "./../../icons/discord_logo.svg";
import ToolTip from "../tooltip";
import "./style.scss";
import { currencyFormat } from "../../utils/common";

const NFTBaseDetails = ({
  nft,
  isPlaceBid,
  socketData,
  isAuctionStarted,
  isAuctionEnded,
}) => {
  const history = useHistory();
  const { user } = useSelector((state) => state.user.data);
  const [currentUser, setCurrentUser] = useState(false);
  // const [isAuctionEnded, setIsAuctionEnded] = useState(
  //   new Date().getTime() > new Date(nft?.auction_end_time).getTime()
  // );
  // const [isAuctionStarted, setIsAuctionStarted] = useState(
  //   new Date().getTime() >= new Date(nft?.auction_start_time).getTime()
  // );

  const erc721 = nft.nft_type === "erc721";

  return (
    <>
      <div className="creator mt-3">
        Amitabh Bachchan
        <ToolTip
          icon={<FaCheckCircle size={16} className="ms-2 check-icon" />}
          content="Verified Artist"
          placement="right"
        />
        {isAuctionEnded && (
          <span className="nft-status-tag rounded-pill">Sold Out</span>
        )}
      </div>
      <div className="nft-title-container">
        <div className="nft-title">{nft.name}</div>

        <ToolTip
          icon={
            <div className="discord">
              <div className="count">22</div>
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
            min={300}
            ideal={300}
            max={700}
            text={nft.description}
          />
        )}
      </p>

      <div className="bottom-content">
        <div className="d-flex">
          {erc721 ? (
            <BidValue
              title={isAuctionStarted ? "Current Bid" : "Minimum Bid"}
              value={
                socketData.price
                  ? currencyFormat(socketData.price, "USD")
                  : currencyFormat(nft.minimum_bid, "USD")
              }
            />
          ) : (
            <BidValue
              title="Price"
              value={nft.buy_amount && currencyFormat(nft.buy_amount, "USD")}
            />
          )}

          {currentUser && (
            <BidValue
              title="Your Last Bid"
              value="1.8k"
              currency="$"
              status="Outbid"
            />
          )}

          {isAuctionEnded && (
            <BidValue title="Owned By" name="@CryptoGeek" isEnd />
          )}
        </div>
        <hr className="custom-divider" />
        {!isAuctionStarted && (
          <NFTTimeLeft
            title="Auction starting in"
            tooltipText={
              erc721
                ? "When there are less than 5 minutes left in the auction, successful bids will reset the auction to 5 minutes."
                : "Nft buy auction"
            }
            time={nft.auction_start_time}
          />
        )}
        {!isAuctionEnded && isAuctionStarted && (
          <NFTTimeLeft
            title="Auction ending in"
            tooltipText={
              erc721
                ? "When there are less than 5 minutes left in the auction, successful bids will reset the auction to 5 minutes."
                : "Nft buy auction"
            }
            time={nft.auction_end_time}
          />
        )}
        {isAuctionEnded && (
          <NFTTimeLeft
            title="Auction ended on"
            tooltipText="Auction ended"
            time={nft.auction_end_time}
            isEnded={true}
          />
        )}
        <hr className="custom-divider" />
        {(() => {
          if (erc721) {
            return <BidValue title="Limited Edition" value="1 of 1" isLeft />;
          } else if (nft.total_quantity) {
            return (
              <BidValue
                title="Limited Edition"
                value={
                  socketData.availableQty
                    ? `${socketData.availableQty} / ${nft.total_quantity}`
                    : `${nft.quantity} / ${nft.total_quantity}`
                }
              />
            );
          } else {
            return (
              <BidValue
                title="Unlimited Edition"
                value={
                  socketData.totalBuy
                    ? `${socketData.totalBuy} / unlimited`
                    : `${nft.total_buys}  / unlimited`
                }
              />
            );
          }
        })()}

        <hr className="custom-divider" />

        <div className="text-center">
          <NFTPlaceBid
            show={isPlaceBid ? true : false}
            nft={nft}
            socketData={socketData}
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
                      `${process.env.REACT_APP_BASE_URL}/accounts/wallet`,
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
                      `${process.env.REACT_APP_BASE_URL}/signin?redirect=${window.location.href}`,
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
                  disabled={isAuctionEnded}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  onClick={() =>
                    history.push(`${history.location.pathname}/placebid`)
                  }
                >
                  {isAuctionEnded ? "Auction has ended" : "Place a Bid"}
                </button>
              );
            } else {
              return (
                <button
                  disabled={isAuctionEnded}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  onClick={() =>
                    history.push(`${history.location.pathname}/placebid`)
                  }
                >
                  {isAuctionEnded ? "Auction has ended" : "Buy"}
                </button>
              );
            }
          })()}

          <div className="mt-2 royalty-info">
            {erc721 &&
              "Counterbid within the last 5 minutes will extend the auction by 15 minutes"}
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTBaseDetails;
