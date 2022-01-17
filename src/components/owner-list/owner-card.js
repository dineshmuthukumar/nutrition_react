import React from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

import OwnerName from "./owner-name";
import userImg from "../../images/user_1.png";

import "./style.scss";

const OwnerCard = ({ owner, isEnd = false, totalQuantity }) => {
  const { user } = useSelector((state) => state.user.data);

  return (
    <div className="bid-histroy-card">
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
                !owner.private && owner.avatar_url
                  ? owner.avatar_url
                  : user?.slug === owner.slug && owner.avatar_url
                  ? owner.avatar_url
                  : userImg
              }
            />
            <div className="bid-histoy-details">
              <div className="time text-secondary">
                {dayjs(owner.sold_at).format("MMM D, YYYY hh:mm A")}
              </div>
              <div className="bid-owner">
                NFT Owned by{" "}
                <OwnerName
                  imgUrl={owner.avatar_url}
                  text={owner.user_name}
                  slug={owner.slug}
                  seller={true}
                />
              </div>
            </div>
          </div>
          <div className="second-half">
            <div className="bid-value">{`${owner.sold_quantity} / ${totalQuantity}`}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default OwnerCard;
