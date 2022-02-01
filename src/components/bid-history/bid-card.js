import React, { useEffect } from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

import BidName from "./bid-name";
import userImg from "../../images/user_1.jpg";
import { currencyFormat } from "../../utils/common";
import NFTCounter from "../nft-counter";
import ToolTip from "../tooltip/index";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import "./style.scss";

const BidCard = ({
  setBidExpiry,
  setIsBidder,
  history,
  isOrderOnSale = false,
  isOwner = false,
  isEnd = false,
  acceptBidConfirm,
  setAcceptBidConfirm,
  setAcceptBidDetail,
  latestIndex,
}) => {
  const { user } = useSelector((state) => state.user.data);

  // const bidExpiryDays = 1;

  useEffect(() => {
    if (isOrderOnSale && (history.slug === user?.slug || isOwner)) {
      setIsBidder(true);

      if (history?.status === "active" && latestIndex === 0) {
        // setBidExpiry(dayjs(history.created_at).add(bidExpiryDays, "day"));
        setBidExpiry(dayjs(history.expires_at));
      }
    }
  }, [user?.slug]);

  return (
    <div
      className={`bid-histroy-card ${
        history?.status === "active" && latestIndex === 0
          ? "active-history-card"
          : ""
      }`}
    >
      {isEnd ? (
        <div className="history-end-content">
          You've reached the end of the list
        </div>
      ) : (
        <>
          <div className="first-half">
            <img
              alt=""
              src={
                !history.private && history.avatar_url
                  ? history.avatar_url
                  : user?.slug === history.slug && history.avatar_url
                  ? history.avatar_url
                  : userImg
              }
            />
            <div className="bid-histoy-details">
              <div className="time text-secondary">
                {dayjs(history.created_at).format("MMM D, YYYY hh:mm A")}
                <span
                  className={`expire-pill ${
                    (history?.status === "active" &&
                      latestIndex === 0 &&
                      dayjs() < dayjs(history.expires_at)) ||
                    (history?.status === "success" && latestIndex === 0)
                      ? "active"
                      : ""
                  }`}
                >
                  {history?.status === "active" &&
                  latestIndex === 0 &&
                  dayjs() < dayjs(history.expires_at)
                    ? "Active"
                    : history?.status === "success" && latestIndex === 0
                    ? "Success"
                    : "Expired"}
                </span>
              </div>
              <div className="bid-owner">
                Bid placed by{" "}
                <BidName
                  imgUrl={history.avatar_url}
                  text={history.user_name}
                  slug={history.slug}
                />
              </div>

              {user?.slug &&
                isOrderOnSale &&
                (history.slug === user?.slug || isOwner) &&
                history?.status === "active" &&
                latestIndex === 0 && (
                  <div className="bid-expire-cntent">
                    {dayjs() < dayjs(history.expires_at) ? (
                      <>
                        Bid Expires at
                        <NFTCounter time={dayjs(history.expires_at)} />{" "}
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
                              If the bid is not accepted before the shown time
                              in the countdown, the bid will expire. <br />
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
                  </div>
                )}
            </div>
          </div>
          <div className="second-half">
            <button
              className="assign-btn"
              onClick={() => {
                setAcceptBidConfirm(!acceptBidConfirm);
                setAcceptBidDetail(history);
              }}
            >
              Accept Bid
            </button>
            <div className="bid-value">
              {currencyFormat(history.bid_amount, "USD")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BidCard;
