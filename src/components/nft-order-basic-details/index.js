import React, { useState } from "react";
import ReadMoreReact from "read-more-react";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { Modal } from "react-bootstrap";
import _ from "lodash";
import dayjs from "dayjs";

import { acceptBidApi } from "../../api/methods";
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
import postImages from "../../images/post1.png";
import CancelNft from "./nft-cancel-box";
import userImg from "../../images/user_1.png";

import "./style.scss";
const NFTOrderBaseDetails = ({
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
  owners,
  isOrderOnSale,
  isOrderSuccess,
  isOrderCancelled,
  orderSlug,
  latestBid,
}) => {
  const { user } = useSelector((state) => state.user.data);
  const [modalShow, setModalShow] = useState(false);
  const [acceptBidConfirm, setAcceptBidConfirm] = useState(false);
  const [acceptBidSucess, setAcceptBidSucess] = useState(false);

  const erc721 = nft.nft_type === "erc721";
  const isBid = _.get(nft, "order_details.is_bid", false);
  const isBuy = _.get(nft, "order_details.is_buy", false);
  const isOwner = _.has(nft, "owner_details");
  const isOnSale = _.size(_.get(nft, "owner_details.orders", [])) > 0;
  const onSaleQty = _.get(nft, "owner_details.available_quantity", 0) != 0;
  const isOrder = _.has(nft, "order_details");
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
      <div className="creator mt-3">
        {nft.category_name} | Amitabh Bachchan Exclusive NFTs
        <ToolTip
          icon={<FaCheckCircle size={16} className="ms-2 check-icon" />}
          content="Verified Artist"
          placement="right"
        />
        {soldOut && (
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
            max={560}
            text={nft.description}
          />
        )}
      </p>

      {!acceptBidConfirm && (
        <div className="d-flex justify-content-end align-items-center w-100">
          <HelpLine />
        </div>
      )}

      <div className="bottom-content">
        {acceptBidConfirm ? (
          <>
            <div className={`assign-card`}>
              <div className="first-half">
                <img
                  alt=""
                  src={
                    !latestBid.private && latestBid.avatar_url
                      ? latestBid.avatar_url
                      : user?.slug === latestBid.slug
                      ? latestBid.avatar_url
                      : userImg
                  }
                />
                <div className="bid-histoy-details">
                  <div className="time text-secondary">
                    {dayjs(latestBid.created_at).format("MMM D, YYYY hh:mm A")}
                  </div>
                  <div className="bid-owner">
                    Bid placed by {latestBid.user_name}
                  </div>
                </div>
              </div>
              <div className="second-half">
                <div className="highest-bid">
                  <span className="key">Highest Bid Price</span>
                  <span className="value">
                    {currencyFormat(latestBid.bid_amount, "USD")}
                  </span>
                </div>
              </div>
            </div>

            <div className="d-flex">
              <BidValue
                title="Artist fee"
                value={`${parseFloat(nft.royalties)} %`}
              />

              <BidValue
                title="Service fee"
                value={`${parseFloat(nft.service_fee)} %`}
              />
            </div>
            <hr className="custom-divider" />
            <div className="d-flex">
              <BidValue
                title="You will Get"
                value={currencyFormat(
                  parseFloat(latestBid.bid_amount) -
                    (parseFloat(latestBid.bid_amount) *
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
            <div className="d-flex">
              {(() => {
                if (isOrderOnSale) {
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
                } else if (isOrderSuccess) {
                  return (
                    <BidValue
                      title="Price"
                      value={currencyFormat(orderDetails.buy_amount, "USD")}
                    />
                  );
                } else {
                  return (
                    <BidValue
                      title="Sold Price"
                      value={currencyFormat(nft.price, "USD")}
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
                  return (
                    <BidValue title="Limited Edition" value="1 of 1" isLeft />
                  );
                } else if (!erc721 && isOwner) {
                  if (isOrder) {
                    return (
                      <BidValue
                        title="Edition(s)"
                        value={`${orderDetails.available_quantity} / ${orderDetails.total_quantity}`}
                      />
                    );
                  } else {
                    return (
                      <BidValue
                        title="You Own"
                        value={`${_.get(
                          nft,
                          "owner_details.total_quantity"
                        )} / ${nft.total_quantity}`}
                        isOwner
                      />
                    );
                  }
                } else {
                  return (
                    <BidValue
                      title="Edition(s)"
                      value={(() => {
                        if (
                          availableQty >= 0 &&
                          availableQty != null &&
                          isOrderOnSale
                        ) {
                          return `${availableQty} / ${orderDetails.total_quantity}`;
                        } else if (isOrderOnSale) {
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
            orderDetails={orderDetails}
            isOwner={isOwner}
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
              if (isOrder && !isOrderOnSale) {
                return (
                  <button
                    disabled={true}
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  >
                    {isOrderSuccess ? "Sold Out" : "Cancelled"}
                  </button>
                );
              } else {
                return (
                  <button
                    disabled={false}
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                    onClick={() => setPutOnSalePop(!putOnSalePop)}
                  >
                    Put on sale
                  </button>
                );
              }
            } else if (erc721 && isOwner && isOnSale) {
              if (acceptBidConfirm) {
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
              } else if (acceptBidSucess || isOrderSuccess) {
                return (
                  <button
                    disabled={true}
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  >
                    Sold Out
                  </button>
                );
              } else {
                return (
                  <>
                    <button
                      disabled={false}
                      className={`btn btn-dark text-center btn-lg mt-2 me-4 rounded-pill ${
                        isOrder ? `place-bid-buy-btn` : "place-bid-btn"
                      } filled-btn`}
                      onClick={() => setCancelTheSalePop(!cancelTheSalePop)}
                    >
                      Cancel the sale
                    </button>
                    {isOrder && (
                      <button
                        disabled={latestBid ? false : true}
                        className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-buy-btn"
                        onClick={() => setAcceptBidConfirm(!acceptBidConfirm)}
                      >
                        Accept Bid
                      </button>
                    )}
                  </>
                );
              }
            } else if (!erc721 && isOwner && isOnSale) {
              if (onSaleQty) {
                return (
                  <>
                    {orderSlug ? (
                      <button
                        disabled={false}
                        className="btn btn-dark text-center btn-lg mt-2 me-4 rounded-pill place-bid-buy-btn filled-btn"
                        onClick={() => setCancelTheSalePop(!cancelTheSalePop)}
                      >
                        Cancel the sale
                      </button>
                    ) : (
                      <button
                        disabled={false}
                        className="btn btn-dark text-center btn-lg mt-2 me-4 rounded-pill place-bid-buy-btn filled-btn"
                        onClick={() => setModalShow(true)}
                      >
                        Cancel the sale
                      </button>
                    )}

                    <button
                      disabled={false}
                      className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-buy-btn"
                      onClick={() => setPutOnSalePop(!putOnSalePop)}
                    >
                      Put on sale (
                      {_.get(nft, "owner_details.available_quantity")}qty)
                    </button>
                  </>
                );
              } else {
                return (
                  <>
                    {orderSlug ? (
                      <button
                        disabled={false}
                        className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                        onClick={() => setCancelTheSalePop(!cancelTheSalePop)}
                      >
                        Cancel the sale
                      </button>
                    ) : (
                      <button
                        disabled={false}
                        className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                        onClick={() => setModalShow(true)}
                      >
                        Cancel the sale
                      </button>
                    )}
                  </>
                );
              }
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

      <Modal size="lg" centered show={modalShow} className="history-modal">
        <Modal.Header className="bg-dark p-0">
          <Modal.Title className="flex-fill">
            <div className="modal-bid-history-title-content">
              <div className="modal-bid-history-title">
                Select Sale-Order for Cancelation
              </div>
              <div className="modal-bid-history-filter">
                <BiX
                  role="button"
                  style={{ color: "#fff" }}
                  size={25}
                  onClick={() => setModalShow(false)}
                />
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="scroll-modal ">
          {ownerOrderDetails.length > 0 ? (
            <ul className="cancel-nft-list">
              {ownerOrderDetails.map((order, i) => (
                <li className="cancel-nft-item">
                  <CancelNft
                    key={i}
                    nft={nft}
                    order={order}
                    image={postImages}
                    modalShow={modalShow}
                    setModalShow={setModalShow}
                  />
                </li>
              ))}
            </ul>
          ) : (
            "No Orders Found"
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NFTOrderBaseDetails;
