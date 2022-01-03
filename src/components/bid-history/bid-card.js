import React from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

import BidName from "./bid-name";
import userImg from "../../images/user_1.png";
import { currencyFormat } from "../../utils/common";

import "./style.scss";

const BidCard = ({
  history,
  isEnd = false,
  acceptBidConfirm,
  setAcceptBidConfirm,
  setAcceptBidDetail,
}) => {
  const { user } = useSelector((state) => state.user.data);

  return (
    <div
      className={`bid-histroy-card ${
        history?.status === "active" ? "active-history-card" : ""
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
                  : user?.slug === history.slug
                  ? history.avatar_url
                  : userImg
              }
            />
            <div className="bid-histoy-details">
              <div className="time text-secondary">
                {dayjs(history.created_at).format("MMM D, YYYY hh:mm A")}
                <span className={`expire-pill ${history?.status}`}>
                  {history?.status === "active" ? "Active" : "Expired"}
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
              Assign
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
