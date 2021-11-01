import React from "react";
import ReadMoreReact from "read-more-react";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";

import NFTTimeLeft from "../nft-time-left";
import BidValue from "../bid-value";
import NFTLootBuy from "../nft-loot-buy";
import ToolTip from "../tooltip";
import { ReactComponent as DiscordSvg } from "./../../icons/discord_logo.svg";
import { currencyFormat } from "../../utils/common";

import "./style.scss";

const NFTLootBaseDetails = ({
  category,
  lootBuyPop,
  setLootBuyPop,
  availableQty,
  isAuctionStarted,
  isAuctionEnded,
  soldOut,
  auctionEndTime,
  handleAuctionStartTimer,
  handleAuctionEndTimer,
}) => {
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
        {category.category_detail && (
          <ReadMoreReact
            min={200}
            ideal={200}
            max={550}
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
            title="End of Buying Window"
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
          value={
            availableQty >= 0 && availableQty != null
              ? `${availableQty} / ${category.category_detail.total_quantity}`
              : `${category.category_detail.quantity} / ${category.category_detail.total_quantity}`
          }
        />

        <hr className="custom-divider" />

        <div className="text-center">
          <NFTLootBuy
            category={category}
            lootBuyPop={lootBuyPop}
            availableQty={availableQty}
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
                      return "Purchase the Loot Box";
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
