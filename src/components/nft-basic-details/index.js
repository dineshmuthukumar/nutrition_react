import React from "react";
import ReadMoreReact from "read-more-react";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import _ from "lodash";

import NFTTimeLeft from "../nft-time-left";
import BidValue from "../bid-value";
import ToolTip from "../tooltip";
import NFTPlaceBid from "../nft-place-bid";
import NFTPlaceBuy from "../nft-place-buy";
import NFTPutOnSale from "../nft-put-on-sale";
import NFTCancelTheSale from "../nft-cancel-the-sale";
import HelpLine from "../help-line";
import { ReactComponent as DiscordSvg } from "./../../icons/discord_logo.svg";
import { currencyFormat } from "../../utils/common";

import "./style.scss";
const NFTBaseDetails = ({
  nft,
  placeBidPop,
  setPlaceBidPop,
  placeBuyPop,
  setPlaceBuyPop,
  putOnSalePop,
  setPutOnSalePop,
  cancelTheSalePop,
  setCancelTheSalePop,
  totalBuy,
  userTotalBuys,
  price,
  availableQty,
  userOutBid,
  userLastBid,
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
  const isBid = _.get(nft, "order_details.is_bid", false);
  const isBuy = _.get(nft, "order_details.is_buy", false);
  const isOwner = _.has(nft, "owner_details");
  const isOnSale = _.size(_.get(nft, "owner_details.orders", [])) > 0;
  const onSaleQty = _.get(nft, "owner_details.available_quantity", 0) != 0;
  const isOrder = _.has(nft, "order_details");
  const orderDetails = _.get(nft, "order_details", {});

  return (
    <>
      <div className="creator mt-3">
        {nft.category_name} | Amitabh Bachchan Exclusive NFTs
        <ToolTip
          icon={<FaCheckCircle size={16} className="ms-2 check-icon" />}
          content="Verified Artist"
          placement="right"
        />
        {/* {(isAuctionEnded || soldOut) && (
          <span className="nft-status-tag rounded-pill">Sold Out</span>
        )} */}
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
            max={560}
            text={nft.description}
          />
        )}
      </p>
      <div className="d-flex justify-content-end align-items-center w-100">
        <HelpLine />
      </div>

      <div className="bottom-content">
        <div className="d-flex">
          {(() => {
            if (isOrder) {
              if (erc721) {
                if (isBid) {
                  return (
                    <BidValue
                      title="Minimum Bid"
                      value={
                        price
                          ? currencyFormat(price, "USD")
                          : currencyFormat(orderDetails.minimum_bid, "USD")
                      }
                    />
                  );
                } else {
                  return (
                    <BidValue
                      title="Price"
                      value={
                        price
                          ? currencyFormat(price, "USD")
                          : currencyFormat(orderDetails.buy_amount, "USD")
                      }
                    />
                  );
                }
              } else {
                return (
                  <BidValue
                    title="Price"
                    value={currencyFormat(orderDetails.buy_amount, "USD")}
                  />
                );
              }
            }
          })()}

          {/* {(() => {
            if (user && userLastBid && price) {
              return (
                <BidValue
                  title="Your Last Bid"
                  value={currencyFormat(userLastBid, "USD")}
                  status={
                    parseFloat(userLastBid) < parseFloat(price) ? "Outbid" : ""
                  }
                />
              );
            } else if (user && nft.user_highest_bid) {
              return (
                <BidValue
                  title="Your Last Bid"
                  value={currencyFormat(nft.user_highest_bid, "USD")}
                  status={
                    parseFloat(nft.user_highest_bid) <
                    parseFloat(nft.minimum_bid)
                      ? "Outbid"
                      : ""
                  }
                />
              );
            } else {
              return null;
            }
          })()} */}

          {/* {erc721 && isAuctionEnded && winner && (
            <BidValue
              title="Owned By"
              avatar={winner.avatar_url}
              name={winner.user_name}
              isEnd
            />
          )} */}
        </div>
        <hr className="custom-divider" />

        <div className="d-flex">
          <BidValue title="Category" value={nft.category_name} />
        </div>
        <hr className="custom-divider" />
        <div className="d-flex">
          {(() => {
            if (erc721 && isOwner) {
              return (
                <BidValue
                  title="You Own"
                  value="1 of 1"
                  isLeft
                  isOwner={isOwner}
                />
              );
            } else if (erc721 && !isOwner) {
              return <BidValue title="Limited Edition" value="1 of 1" isLeft />;
            } else if (!erc721 && isOwner) {
              return (
                <BidValue
                  title="You Own"
                  value={`${_.get(nft, "owner_details.total_quantity")} / ${
                    nft.total_quantity
                  }`}
                  isOwner
                />
              );
            } else {
              return (
                <BidValue
                  title="Edition(s)"
                  value={(() => {
                    if (availableQty >= 0 && availableQty != null) {
                      return `${availableQty} / ${nft.total_quantity}`;
                    } else if (isOrder) {
                      return `${orderDetails.available_quantity} / ${orderDetails.total_quantity}`;
                    } else {
                      return nft.total_quantity;
                    }
                  })()}
                />
              );
            }
          })()}
        </div>
        <hr className="custom-divider" />

        <div className="text-center">
          <NFTPlaceBid
            nft={nft}
            orderDetails={orderDetails}
            placeBidPop={placeBidPop}
            setPlaceBidPop={setPlaceBidPop}
            isBid={isBid}
            isBuy={isBuy}
            price={price}
            userTotalBuys={userTotalBuys}
            isAuctionStarted={isAuctionStarted}
            isAuctionEnded={isAuctionEnded}
            soldOut={soldOut}
          />
          <NFTPlaceBuy
            nft={nft}
            orderDetails={orderDetails}
            placeBuyPop={placeBuyPop}
            setPlaceBuyPop={setPlaceBuyPop}
            isBid={isBid}
            isBuy={isBuy}
            price={price}
            userTotalBuys={userTotalBuys}
            isAuctionStarted={isAuctionStarted}
            isAuctionEnded={isAuctionEnded}
            soldOut={soldOut}
          />
          <NFTPutOnSale
            nft={nft}
            putOnSalePop={putOnSalePop}
            setPutOnSalePop={setPutOnSalePop}
            price={price}
            userTotalBuys={userTotalBuys}
            isAuctionStarted={isAuctionStarted}
            isAuctionEnded={isAuctionEnded}
            soldOut={soldOut}
          />
          <NFTCancelTheSale
            nft={nft}
            cancelTheSalePop={cancelTheSalePop}
            setCancelTheSalePop={setCancelTheSalePop}
            price={price}
            userTotalBuys={userTotalBuys}
            isAuctionStarted={isAuctionStarted}
            isAuctionEnded={isAuctionEnded}
            soldOut={soldOut}
          />

          {(() => {
            if (!user) {
              return (
                <button
                  disabled={false}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  onClick={() =>
                    window.open(
                      `${process.env.REACT_APP_ACCOUNTS_URL}/signin?redirect=${window.location.href}`,
                      "_self"
                    )
                  }
                >
                  Sign In
                </button>
              );
            } else if (parseFloat(user?.balance) <= 0 && !isOwner) {
              return (
                <button
                  disabled={false}
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
                  Recharge Wallet
                </button>
              );
            } else if (isOwner && !isOnSale) {
              return (
                <button
                  disabled={false}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  onClick={() => setPutOnSalePop(!putOnSalePop)}
                >
                  Put on sale
                </button>
              );
            } else if (erc721 && isOwner && isOnSale) {
              return (
                <>
                  <button
                    disabled={false}
                    className="btn btn-dark text-center btn-lg mt-2 me-4 rounded-pill place-bid-buy-btn"
                    // onClick={() => setPlaceBidPop(!placeBidPop)}
                  >
                    Cancel the sale
                  </button>
                  <button
                    disabled={false}
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-buy-btn"
                    // onClick={() => setPlaceBidPop(!placeBidPop)}
                  >
                    Assign
                  </button>
                </>
              );
            } else if (!erc721 && isOwner && isOnSale) {
              return onSaleQty ? (
                <>
                  <button
                    disabled={false}
                    className="btn btn-dark text-center btn-lg mt-2 me-4 rounded-pill place-bid-buy-btn"
                    // onClick={() => setPlaceBidPop(!placeBidPop)}
                  >
                    Cancel the sale
                  </button>
                  <button
                    disabled={false}
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-buy-btn"
                    onClick={() => setPutOnSalePop(!putOnSalePop)}
                  >
                    Put on sale (
                    {_.get(nft, "owner_details.available_quantity")}qty)
                  </button>
                </>
              ) : (
                <>
                  <button
                    disabled={false}
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                    // onClick={() => setPlaceBidPop(!placeBidPop)}
                  >
                    Cancel the sale
                  </button>
                </>
              );
            } else if (isBid && isBuy) {
              return (
                <>
                  <button
                    disabled={false}
                    className="btn btn-dark text-center btn-lg mt-2 me-4 rounded-pill place-bid-buy-btn"
                    onClick={() => setPlaceBuyPop(!placeBuyPop)}
                  >
                    Buy {currencyFormat(orderDetails.buy_amount, "USD")}
                  </button>
                  <button
                    disabled={false}
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-buy-btn"
                    onClick={() => setPlaceBidPop(!placeBidPop)}
                  >
                    Place a Bid
                  </button>
                </>
              );
            } else if (isBid) {
              return (
                <button
                  disabled={false}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  onClick={() => setPlaceBidPop(!placeBidPop)}
                >
                  Place a Bid
                </button>
              );
            } else if (isBuy) {
              return (
                <button
                  disabled={false}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  onClick={() => setPlaceBuyPop(!placeBuyPop)}
                >
                  Buy {currencyFormat(orderDetails.buy_amount, "USD")}
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
