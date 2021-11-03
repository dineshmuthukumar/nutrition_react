import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import userImg from "../../images/user_1.png";
import winnerImg from "../../images/success.png";
import { currencyFormat } from "../../utils/common";
import "./style.scss";

const LootNFTOwn = ({ nft }) => {
  const { user } = useSelector((state) => state.user.data);
  return (
    <>
      <div className="bid-winner">
        <div className="winner-title">
          <div className="winner-text">HURRAY!</div>
        </div>
        <div className="winner_details">
          <div className="winner-user-details">
            <img alt="" src={winnerImg} />
            <div className="winner-id">Congratulations!!</div>
          </div>
          <div className="nft-lastbid-details">
            <div className="lastbid-left">
              <div className="lastbid-title">Price</div>
              <div className="lastbid-value">{currencyFormat(10, "USD")}</div>
            </div>
            <div className="lastbid-right">
              <div className="lastbid-date-title">You Own</div>
              <div className="lastbid-date-value">
                {nft.nft_type === "erc721" ? "1 of 1" : nft.total_user_buys}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="nft-sold-details">
          <div className="sold-for">
            <div className="sold-for-title">NFT sold for</div>
            <div className="sold-for-value">{currencyFormat(10, "USD")}</div>
          </div>
          <div className="sold-on">
            <div className="sold-on-title">NFT sold on</div>
            <div className="sold-on-value">
              {dayjs(new Date()).format("MMM D, YYYY hh:mm A")}
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default LootNFTOwn;
