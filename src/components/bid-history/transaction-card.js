import React from "react";
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import BidName from "./bid-name";
import userImg from "../../images/user_1.jpg";
import { currencyFormat } from "../../utils/common";

import "./style.scss";

const TransactionCard = ({ nft, history, isEnd = false }) => {
  const routeHistory = useHistory();
  const { user } = useSelector((state) => state.user.data);

  return (
    <div className="bid-histroy-card">
      {isEnd ? (
        <div className="history-end-content">
          You've reached the end of the list
        </div>
      ) : (
        <>
          <div className="first-half full-width">
            <div className="bid-histoy-details">
              <div className="time text-secondary">
                Transfered on :{" "}
                {dayjs(history.transfered_at).format("MMM D, YYYY hh:mm A")}
              </div>
              <div className="bid-owner">
                <span
                  className="transaction-value"
                  role={"button"}
                  onClick={() =>
                    routeHistory.push(`/seller/${history.buyer_slug}/details`)
                  }
                >
                  {history.buyer_name}
                </span>
                &nbsp;has bought{" "}
                {nft?.nft_type === "erc721" ? "this" : history.quantity} NFT
                from&nbsp;
                <span
                  className="transaction-value"
                  role={"button"}
                  onClick={() =>
                    routeHistory.push(`/seller/${history.seller_slug}/details`)
                  }
                >
                  {history.seller_name}
                </span>
                &nbsp;for&nbsp;
                <span className="transaction-value">
                  {currencyFormat(history.total_amount, "USD")}
                </span>
              </div>
            </div>
          </div>
          {/* <div className="second-half">
            <div className="bid-value">
              {currencyFormat(history.total_amount, "USD")}
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default TransactionCard;
