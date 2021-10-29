import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import ReadMoreReact from "read-more-react";
import NFTTimeLeft from "../nft-time-left";
import BidValue from "../bid-value";
import NFTLootBuy from "../nft-loot-buy";
import { ReactComponent as DiscordSvg } from "./../../icons/discord_logo.svg";
import ToolTip from "../tooltip";
import { currencyFormat } from "../../utils/common";
import "./style.scss";

const NFTLootBaseDetails = ({
  category,
  nft,
  lootBuyPop,
  setLootBuyPop,
  totalBuy,
  price,
  availableQty,
  isAuctionStarted,
  isAuctionEnded,
  soldOut,
  auctionEndTime,
  handleAuctionStartTimer,
  handleAuctionEndTimer,
}) => {
  const history = useHistory();
  const { user } = useSelector((state) => state.user.data);

  return (
    <>
      <div className="creator mt-3">
        Amitabh's Exclusive NFTs
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
        <div className="nft-title">{category.name}</div>

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
        {category.category_detail && (
          <ReadMoreReact
            min={40}
            ideal={40}
            max={150}
            text={category.category_detail.description}
          />
        )}
      </p>

      <div className="bottom-content">
        <div className="d-flex">
          <BidValue
            title="Buying Price"
            value={
              category.category_detail &&
              currencyFormat(category.category_detail.buy_amount, "USD")
            }
          />
        </div>
        <hr className="custom-divider" />
        {!isAuctionStarted && (
          <NFTTimeLeft
            title="Auction starting in"
            tooltipText="NFT Loot Auction"
            time={category.category_detail.auction_start_time}
            handleTimer={handleAuctionStartTimer}
          />
        )}
        {!isAuctionEnded && isAuctionStarted && (
          <NFTTimeLeft
            title="End of Auction"
            tooltipText="NFT Loot Auction"
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
        <BidValue
          title="Edition(s)"
          value={`${category.category_detail.quantity} / ${category.category_detail.total_quantity}`}
        />

        <hr className="custom-divider" />

        <div className="text-center">
          <NFTLootBuy
            category={category}
            lootBuyPop={lootBuyPop}
            setLootBuyPop={setLootBuyPop}
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
                  onClick={() => setLootBuyPop(!lootBuyPop)}
                >
                  {(() => {
                    if (!isAuctionStarted && !isAuctionEnded) {
                      return "Auction has not yet begun";
                    } else if (isAuctionEnded) {
                      return "Auction has ended";
                    } else if (soldOut) {
                      return "Sold Out";
                    } else {
                      return "Purchase the Loot Box!";
                    }
                  })()}
                </button>
              );
            }
          })()}
        </div>
      </div>
    </>
  );
};

export default NFTLootBaseDetails;
