import React from "react";
import dayjs from "dayjs";
import BidName from "./bid-name";
import { currencyFormat } from "../../utils/common";
import userImg from "../../images/user_1.png";
import "./style.scss";

const BidCard = ({ history, isEnd = false }) => {
  return (
    <div className="bid-histroy-card">
      {isEnd ? (
        <div className="history-end-content">
          You've reached the end of the list
        </div>
      ) : (
        <>
          <div className="first-half">
            <img src={history.avatar_url ? history.avatar_url : userImg} />
            <div className="bid-histoy-details">
              <div className="time text-secondary">
                {dayjs(history.created_at).format("MMM D, YYYY hh:mm:ssa")}
              </div>
              <div className="bid-owner">
                Bid placed by{" "}
                <BidName imgUrl={history.avatar_url} text={history.user_name} />
              </div>
            </div>
          </div>
          <div className="second-half">
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
