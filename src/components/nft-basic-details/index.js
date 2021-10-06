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
import { DescriptionLoader, TitleLoader } from "./content-loader";

const NFTBaseDetails = ({ nft, isPlaceBid }) => {
  const history = useHistory();
  const { user } = useSelector((state) => state.user.data);
  const [currentUser, setCurrentUser] = useState(false);
  const [isAuctionEnded, setIsAuctionEnded] = useState(
    new Date().getTime() > new Date(nft?.auction_end_time).getTime()
  );
  const [isAuctionStarted, setIsAuctionStarted] = useState(
    new Date().getTime() >= new Date(nft?.auction_start_time).getTime()
  );

  const erc721 = nft.nft_type === "erc721";
  // const isAuctionStarted =
  //   new Date().getTime() >= new Date(nft.auction_start_time).getTime();

  // const isAuctionEnded =
  //   new Date().getTime() > new Date(nft.auction_end_time).getTime();

  useEffect(() => {
    const startInterval = setInterval(() => {
      checkStartTimer(startInterval);
    }, 1000);
    const endInterval = setInterval(() => {
      checkEndTimer(endInterval);
    }, 1000);
    return () => {
      window.clearInterval(startInterval);
      window.clearInterval(endInterval);
    };
  }, [nft]);

  const checkStartTimer = (i) => {
    if (new Date().getTime() >= new Date(nft.auction_start_time).getTime()) {
      setIsAuctionStarted(true);
      window.clearInterval(i);
    }
  };
  const checkEndTimer = (i) => {
    if (new Date().getTime() >= new Date(nft.auction_end_time).getTime()) {
      setIsAuctionEnded(true);
      window.clearInterval(i);
    }
  };

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
        <div className="nft-title">{nft.name ? nft.name : <TitleLoader />}</div>

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
        {nft.description ? (
          <ReadMoreReact
            min={300}
            ideal={300}
            max={700}
            text={nft.description}
          />
        ) : (
          <DescriptionLoader />
        )}
      </p>

      <div className="bottom-content">
        <div className="d-flex">
          {erc721 ? (
            <BidValue
              title="Minimum Bid"
              value={nft.minimum_bid && currencyFormat(nft.minimum_bid, "USD")}
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
            tooltipText="When there are less than 5 minutes left in the auction, successful bids will reset the auction to 5 minutes."
            time={nft.auction_start_time}
          />
        )}
        {!isAuctionEnded && isAuctionStarted && (
          <NFTTimeLeft
            title="Auction ending in"
            tooltipText="When there are less than 5 minutes left in the auction, successful bids will reset the auction to 5 minutes."
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
        {erc721 ? (
          <BidValue title="Limited Edition" value="1 of 1" isLeft />
        ) : (
          nft.quantity && (
            <BidValue
              title="Limited Edition"
              value={`${nft.quantity} / ${nft.quantity}`}
            />
          )
        )}

        <hr className="custom-divider" />

        <div className="text-center">
          <NFTPlaceBid show={isPlaceBid ? true : false} nft={nft} />

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
                      `${process.env.REACT_APP_BASE_URL}/accounts#wallet`,
                      "_self"
                    )
                  }
                >
                  {isAuctionEnded ? "Auction has ended" : "Recharge Wallet"}
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
            Counterbid within the last 5 minutes will extend the auction by 15
            minutes
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTBaseDetails;
