import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ReadMoreReact from "read-more-react";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { VscChevronRight } from "react-icons/vsc";
import _ from "lodash";
import dayjs from "dayjs";

import { acceptBidApi } from "../../api/methods";
import BidValue from "../bid-value";
import ToolTip from "../tooltip";
import NFTPlaceBid from "../nft-place-bid";
import NFTPlaceBuy from "../nft-place-buy";
import NFTCancelTheSale from "../nft-cancel-the-sale";
import NFTCounter from "../nft-counter";
import HelpLine from "../help-line";
import { ReactComponent as DiscordSvg } from "./../../icons/discord_logo.svg";
import { currencyFormat } from "../../utils/common";
import postImages from "../../images/post1.png";
import userImg from "../../images/user_1.jpg";

import "./style.scss";

const NFTOrderBaseDetails = ({
  bidExpiry,
  isBidder = false,
  nft,
  placeBidPop,
  setPlaceBidPop,
  placeBuyPop,
  setPlaceBuyPop,
  cancelTheSalePop,
  setCancelTheSalePop,
  totalBuy,
  userTotalBuys,
  price,
  availableQty,
  totalQty,
  userOutBid,
  userLastBid,
  soldOut,
  transferringNFT,
  owners,
  isOrderOnSale,
  isOrderSuccess,
  isOrderCancelled,
  orderSlug,
  slug,
  latestBid,
  bidOutDated,
  handleBidExpiredEndTimer,
  bidExpired,
}) => {
  const history = useHistory();
  const { user } = useSelector((state) => state.user.data);
  const [modalShow, setModalShow] = useState(false);
  const [acceptBidConfirm, setAcceptBidConfirm] = useState(false);
  const [acceptBidSucess, setAcceptBidSucess] = useState(false);

  const erc721 = nft.nft_type === "erc721";
  const isBid = _.get(nft, "order_details.is_bid", false);
  const isBuy = _.get(nft, "order_details.is_buy", false);
  const isOwner = _.get(nft, "order_details.owned", false);
  const orderDetails = _.get(nft, "order_details", {});
  const ownerOrderDetails = _.get(nft, "owner_details.orders", []);

  const handleAcceptBid = async () => {
    setAcceptBidConfirm(!acceptBidConfirm);
    try {
      const result = await acceptBidApi({
        order_slug: orderSlug,
        order: { bid_slug: latestBid.bid_slug },
      });
      if (result.data.success) {
        setAcceptBidSucess(true);
      }
    } catch (error) {
      if (error.response.data.status === 422) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {/* <ul className="bredcrumb-link">
        <li>
          <span onClick={() => !erc721 && history.push(`/details/${slug}`)}>
            NFT <VscChevronRight className="icon" />
          </span>
        </li>
        <li>
          <span
            onClick={() => history.push(`/order/details/${slug}/${orderSlug}`)}
          >
            Order Detail
            <VscChevronRight className="icon" />
          </span>
        </li>
      </ul> */}
      <div className="creator mt-3">
        <span
          className="link"
          onClick={() =>
            history.push(`/explore/category/${nft?.category_slug}`)
          }
        >
          {nft.category_name}
        </span>{" "}
        |{" "}
        {(() => {
          if (nft.celebrity_id === 1) {
            return "Amitabh Bachchan";
          } else if (
            nft.celebrity_id ===
            parseInt(process.env.REACT_APP_HINDUSTAN_TIMES_ID)
          ) {
            return "Hindustan Times";
          } else {
            return "Stan Lee";
          }
        })()}{" "}
        Exclusive NFTs
        <ToolTip
          icon={<FaCheckCircle size={16} className="ms-2 check-icon" />}
          content="Verified Artist"
          placement="right"
        />
        {transferringNFT && (
          <span className="nft-status-tag rounded-pill">
            {soldOut ? (
              "Sold Out"
            ) : (
              <>
                Token Transfer Initiated{" "}
                <ToolTip
                  icon={
                    <BsFillQuestionCircleFill
                      size={16}
                      className="ms-2 check-icon"
                    />
                  }
                  content={
                    "The NFT's transfer/transaction is in process on the blockchain. Visit again for latest sale-status."
                  }
                  placement="top"
                />
              </>
            )}
          </span>
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

      <div className="bottom-content">
        {!transferringNFT &&
        !soldOut &&
        !isOrderCancelled &&
        !bidOutDated &&
        acceptBidConfirm ? (
          <>
            {user?.slug &&
              isOrderOnSale &&
              (isOwner || isBidder) &&
              bidExpiry &&
              !transferringNFT &&
              !soldOut &&
              !isOrderCancelled &&
              !bidOutDated && (
                <p className="bid-expire-alert">
                  {dayjs() < bidExpiry && !bidExpired ? (
                    <>
                      Bid Expire at
                      <NFTCounter
                        time={bidExpiry}
                        handleEndEvent={handleBidExpiredEndTimer}
                      />{" "}
                      <ToolTip
                        icon={
                          <BsFillQuestionCircleFill
                            color={"#000"}
                            size={16}
                            className="mb-1 check-icon"
                          />
                        }
                        content={
                          <>
                            If the bid is not accepted before the shown time in
                            the countdown, the bid will expire. <br />
                            The <b>Funds on Hold</b> will be returned to the{" "}
                            <b>Available Funds</b> of the bidder's wallet.
                          </>
                        }
                        placement="top"
                      />
                    </>
                  ) : (
                    <>Bid Expired</>
                  )}
                </p>
              )}
            <div className={`assign-card`}>
              <div className="first-half">
                <img
                  alt=""
                  src={
                    !latestBid?.private && latestBid?.avatar_url
                      ? latestBid?.avatar_url
                      : user?.slug === latestBid?.slug && latestBid?.avatar_url
                      ? latestBid?.avatar_url
                      : userImg
                  }
                />
                <div className="bid-histoy-details">
                  <div className="time text-secondary">
                    {dayjs(latestBid?.created_at).format("MMM D, YYYY hh:mm A")}
                  </div>
                  <div className="bid-owner">
                    Bid placed by {latestBid?.user_name}
                  </div>
                </div>
              </div>
              <div className="second-half">
                <div className="highest-bid">
                  <span className="key">Highest Bid Price</span>
                  <span className="value">
                    {currencyFormat(latestBid?.bid_amount, "USD")}
                  </span>
                </div>
              </div>
            </div>

            <div className="d-flex">
              <BidValue
                title="Artist Fee"
                value={`${parseFloat(nft.royalties)} %`}
                toolTip={"The royalty paid to the artist or the inspiration."}
              />

              <BidValue
                title="Service Fee"
                value={`${parseFloat(nft.service_fee)} %`}
                toolTip={
                  "The service fee includes gas fee and the platform fee."
                }
              />
            </div>
            <hr className="custom-divider" />
            <div className="d-flex">
              <BidValue
                title="You will Get"
                value={currencyFormat(
                  parseFloat(latestBid?.bid_amount) -
                    (parseFloat(latestBid?.bid_amount) *
                      (parseFloat(nft.royalties) +
                        parseFloat(nft.service_fee))) /
                      100,
                  "USD"
                )}
              />
            </div>
            <hr className="custom-divider" />
          </>
        ) : (
          <>
            {user?.slug &&
              isOrderOnSale &&
              (isOwner || isBidder) &&
              bidExpiry &&
              !transferringNFT &&
              !soldOut &&
              !isOrderCancelled &&
              !bidOutDated && (
                <p className="bid-expire-alert">
                  {dayjs() < bidExpiry && !bidExpired ? (
                    <>
                      Bid Expire at
                      <NFTCounter
                        time={bidExpiry}
                        handleEndEvent={handleBidExpiredEndTimer}
                      />{" "}
                      <ToolTip
                        icon={
                          <BsFillQuestionCircleFill
                            color={"#000"}
                            size={16}
                            className="mb-1 check-icon"
                          />
                        }
                        content={
                          <>
                            If the bid is not accepted before the shown time in
                            the countdown, the bid will expire. <br />
                            The <b>Funds on Hold</b> will be returned to the{" "}
                            <b>Available Funds</b> of the bidder's wallet.
                          </>
                        }
                        placement="top"
                      />
                    </>
                  ) : (
                    <>Bid Expired</>
                  )}
                </p>
              )}
            <div className="d-flex">
              {(() => {
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
              })()}

              {(() => {
                if (user && userLastBid && price) {
                  return (
                    <BidValue
                      title="Your Last Bid"
                      value={currencyFormat(userLastBid, "USD")}
                      status={
                        parseFloat(userLastBid) < parseFloat(price)
                          ? "Outbid"
                          : ""
                      }
                    />
                  );
                } else if (user && orderDetails.user_highest_bid) {
                  return (
                    <BidValue
                      title="Your Last Bid"
                      value={currencyFormat(
                        orderDetails.user_highest_bid,
                        "USD"
                      )}
                      status={
                        parseFloat(orderDetails.user_highest_bid) <
                        parseFloat(orderDetails.minimum_bid)
                          ? "Outbid"
                          : ""
                      }
                    />
                  );
                } else {
                  return null;
                }
              })()}

              {erc721 && owners.length > 0 && (
                <BidValue
                  title="Owned By"
                  avatar={owners[0].avatar_url}
                  name={owners[0].user_name}
                  userSlug={owners[0].slug}
                  seller={true}
                  owner={owners[0]}
                  isEnd
                />
              )}
            </div>
            <hr className="custom-divider" />
            <div className="d-flex">
              <BidValue title="Category" value={nft.category_name} />
            </div>
            <hr className="custom-divider" />
            <div className="d-flex">
              {(() => {
                if (erc721) {
                  return (
                    <BidValue title="Limited Edition" value="1 of 1" isLeft />
                  );
                } else {
                  return (
                    <BidValue
                      title="Edition(s)"
                      value={
                        availableQty >= 0 && availableQty != null
                          ? `${availableQty} / ${
                              totalQty != null
                                ? totalQty
                                : orderDetails.total_quantity
                            }`
                          : `${orderDetails.available_quantity} / ${orderDetails.total_quantity}`
                      }
                    />
                  );
                }
              })()}
            </div>
            <hr className="custom-divider" />
          </>
        )}

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
            soldOut={soldOut}
            transferringNFT={transferringNFT}
            isOrderOnSale={isOrderOnSale}
            isOrderCancelled={isOrderCancelled}
          />
          <NFTPlaceBuy
            nft={nft}
            orderDetails={orderDetails}
            placeBuyPop={placeBuyPop}
            setPlaceBuyPop={setPlaceBuyPop}
            isBid={isBid}
            isBuy={isBuy}
            price={price}
            availableQty={availableQty}
            totalQty={totalQty}
            userTotalBuys={userTotalBuys}
            soldOut={soldOut}
            transferringNFT={transferringNFT}
            isOrderOnSale={isOrderOnSale}
            isOrderCancelled={isOrderCancelled}
          />

          <NFTCancelTheSale
            nft={nft}
            orderDetails={orderDetails}
            isOwner={isOwner}
            cancelTheSalePop={cancelTheSalePop}
            setCancelTheSalePop={setCancelTheSalePop}
            price={price}
            availableQty={availableQty}
            isOrderOnSale={isOrderOnSale}
            isOrderCancelled={isOrderCancelled}
            totalQty={totalQty}
            soldOut={soldOut}
            transferringNFT={transferringNFT}
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
            } else if (soldOut) {
              return (
                <button
                  disabled={true}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                >
                  Sold Out
                </button>
              );
            } else if (transferringNFT) {
              return (
                <ToolTip
                  icon={
                    <button
                      disabled={true}
                      className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                    >
                      Token Transfer Initiated{" "}
                      <BsFillQuestionCircleFill
                        size={16}
                        className="ms-2 check-icon"
                      />
                    </button>
                  }
                  content={
                    "The NFT's transfer/transaction is in process on the blockchain. Visit again for latest sale-status."
                  }
                  placement="top"
                />
              );
            } else if (isOrderCancelled) {
              return (
                <button
                  disabled={true}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                >
                  Order Cancelled
                </button>
              );
            } else if (parseFloat(user?.balance) <= 0 && !isOwner) {
              return (
                <button
                  disabled={false}
                  className={`btn btn-danger text-white recharge-btn
                   text-center btn-lg mt-2 rounded-pill`}
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
            } else if (erc721 && isOwner && isOrderOnSale) {
              if (!bidOutDated && acceptBidConfirm) {
                return (
                  <>
                    <button
                      disabled={false}
                      className="btn btn-dark text-center btn-lg mt-2 me-4 rounded-pill place-bid-buy-btn filled-btn"
                      onClick={() => setAcceptBidConfirm(!acceptBidConfirm)}
                    >
                      Cancel
                    </button>
                    <button
                      disabled={false}
                      className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-buy-btn"
                      onClick={handleAcceptBid}
                    >
                      Confirm
                    </button>
                  </>
                );
              } else {
                if (isBid) {
                  return (
                    <>
                      <button
                        disabled={false}
                        className={`btn btn-dark text-center btn-lg mt-2 me-4 rounded-pill place-bid-buy-btn filled-btn`}
                        onClick={() => setCancelTheSalePop(!cancelTheSalePop)}
                      >
                        Cancel the sale
                      </button>
                      <button
                        disabled={
                          latestBid?.slug &&
                          latestBid?.status === "active" &&
                          dayjs() < bidExpiry &&
                          !bidExpired
                            ? false
                            : true
                        }
                        className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-buy-btn"
                        onClick={() => setAcceptBidConfirm(!acceptBidConfirm)}
                      >
                        Accept Bid
                      </button>
                    </>
                  );
                } else {
                  return (
                    <button
                      disabled={false}
                      className={`btn btn-dark text-center btn-lg mt-2 me-4 rounded-pill place-bid-btn filled-btn`}
                      onClick={() => setCancelTheSalePop(!cancelTheSalePop)}
                    >
                      Cancel the sale
                    </button>
                  );
                }
              }
            } else if (!erc721 && isOwner && isOrderOnSale) {
              return (
                <>
                  <button
                    disabled={false}
                    className="btn btn-dark text-center btn-lg mt-2 me-4 rounded-pill place-bid-btn filled-btn"
                    onClick={() => setCancelTheSalePop(!cancelTheSalePop)}
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
                    className="btn btn-dark text-center btn-lg mt-2 me-4 rounded-pill place-bid-buy-btn filled-btn"
                    onClick={() => setPlaceBuyPop(!placeBuyPop)}
                  >
                    Buy {currencyFormat(orderDetails.buy_amount, "USD")}
                  </button>
                  <button
                    disabled={false}
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-buy-btn"
                    onClick={() => setPlaceBidPop(!placeBidPop)}
                  >
                    Place Bid
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
                  Place Bid
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
            } else {
              return (
                <button
                  disabled={true}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                >
                  Yet To Be Listed!
                </button>
              );
            }
          })()}

          <div className="mt-2 royalty-info">
            {/* {erc721 &&
              nft.auction_extend_minutes &&
              `Counterbid within the last 5 minutes will extend the auction by ${nft.auction_extend_minutes} minutes`} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTOrderBaseDetails;
