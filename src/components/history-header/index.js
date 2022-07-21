import React from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import images from "../../utils/images.json";
import "./style.scss";

//import { currencyFormat } from "../../utils/common";

const HistoryHeader = ({ nftOwner, nft }) => {
  const { user } = useSelector((state) => state.user.data);
  // console.log("sdfdsfscx", user);
  const userName = user?.private
    ? `@${user?.private_name}`
    : `@${user?.first_name}${user?.last_name}`;

  return (
    <div className="bid-history--header">
      <div className="bh-user-image">
        <img
          src={
            !nftOwner?.private && nftOwner?.avatar_url
              ? nftOwner?.avatar_url
              : user?.slug === nftOwner?.slug && nftOwner?.avatar_url
              ? nftOwner?.avatar_url
              : images.userJPG
          }
          alt="bid-user"
        />
      </div>
      <div className="bh-user-details">
        <h2 className="bh-user-name">
          {user?.slug === nftOwner?.slug ? userName : nftOwner?.user_name}
        </h2>
        <h4 className="bh-user-status">Owner</h4>
        <div className="bh-user-sold-info">
          {/* <div className="price">
            <span className="key">NFT sold for</span>
            <span className="value">
              {currencyFormat(nftOwner?.sold_amount, "USD")}
            </span>
          </div> */}
          <div className="date">
            {!parseInt(process.env.REACT_APP_HINDUSTAN_TIMES_ID) ===
              nft?.celebrity_id && (
              <>
                <span className="key">Sold on</span>
                <span className="value">
                  {dayjs(nftOwner?.sold_at).format("MMM D, YYYY hh:mm A")}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryHeader;
