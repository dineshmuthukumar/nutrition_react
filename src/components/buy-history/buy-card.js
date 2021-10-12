import React from "react";
import dayjs from "dayjs";
import "./style.scss";
import BuyName from "./buy-name";
import { currencyFormat } from "../../utils/common";

const BuyCard = ({ history, isEnd = false }) => {
  return (
    <div className="bid-histroy-card">
      {isEnd ? (
        <div className="history-end-content">
          You've reached the end of the list
        </div>
      ) : (
        <>
          <div className="first-half">
            <img src="https://picsum.photos/100/100" />
            <div className="bid-histoy-details">
              <div className="time text-secondary">
                {dayjs(history.created_at).format("MMM D, YYYY hh:mma")}
              </div>
              <div className="bid-owner">
                NFT Bought by <BuyName text={history.tag} />
              </div>
            </div>
          </div>
          <div className="second-half">
            <div className="bid-value">
              {currencyFormat(history.buy_amount, "USD")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BuyCard;
