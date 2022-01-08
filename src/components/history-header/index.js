import React from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import userImg from "../../images/user_1.png";
import "./style.scss";

import { currencyFormat } from "../../utils/common";

const HistoryHeader = ({ nftOwner }) => {
  const { user } = useSelector((state) => state.user.data);

  return (
    <div className="bid-history--header">
      <div className="bh-user-image">
        <img src={userImg} alt="bid-user" />
      </div>
      <div className="bh-user-details">
        <h2 className="bh-user-name">{nftOwner?.user_name}</h2>
        <h4 className="bh-user-status">Owner</h4>
        <div className="bh-user-sold-info">
          {/* <div className="price">
            <span className="key">NFT sold for</span>
            <span className="value">
              {currencyFormat(nftOwner?.sold_amount, "USD")}
            </span>
          </div> */}
          <div className="date">
            <span className="key">Sold on</span>
            <span className="value">
              {dayjs(nftOwner.sold_at).format("MMM D, YYYY hh:mm A")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryHeader;
