import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import userImg from "../../images/user_1.jpg";

import "./style.scss";

const BidValue = ({
  title,
  value,
  currency,
  status,
  isEnd = false,
  isLeft = false,
  isOwner = false,
  name,
  avatar,
  userSlug,
  seller = false,
  owner,
}) => {
  const history = useHistory();
  const { user } = useSelector((state) => state.user.data);
  return (
    <div className="current-bid">
      <div className="title">
        {title}
        {status && <span className="status-tag rounded-pill">{status}</span>}
      </div>
      <div className="value">
        {isEnd ? (
          <div className="user-detail">
            <img
              alt="user"
              src={
                !owner?.private && avatar
                  ? avatar
                  : user?.slug === owner?.slug && avatar
                  ? avatar
                  : userImg
              }
            />
            {userSlug ? (
              <div
                className="win-user-name"
                role={"button"}
                onClick={() => {
                  if (seller) {
                    if (user?.slug === userSlug) {
                      window.open(
                        `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/profile`
                      );
                    } else {
                      history.push(`/seller/${userSlug}/details`);
                    }
                  } else {
                    window.open(
                      user?.slug === userSlug
                        ? `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/profile`
                        : `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/view/${userSlug}`
                    );
                  }
                }}
              >
                {user?.slug === userSlug
                  ? `@${user?.first_name}${user?.last_name}`
                  : name}
              </div>
            ) : (
              <div className="win-user-name">{name}</div>
            )}
          </div>
        ) : (
          <>
            <div className="crypto me-2">
              {currency} {value}
              {isLeft && <div className="edition">left</div>}
            </div>
            {isOwner && <div className="h2">Edition</div>}
          </>
        )}
      </div>
    </div>
  );
};

export default BidValue;
