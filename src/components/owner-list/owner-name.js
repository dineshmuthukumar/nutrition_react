import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import userImg from "../../images/user_1.jpg";

const OwnerName = ({
  imgUrl,
  text,
  isTable = false,
  slug,
  static_name = false,
  seller = false,
}) => {
  const history = useHistory();
  const { user } = useSelector((state) => state.user.data);

  const username =
    user?.slug === slug ? `@${user?.first_name + user?.last_name}` : text;

  return isTable ? (
    <div className="expand-history-owner">
      <img src={imgUrl ? imgUrl : userImg} alt="" loading="lazy" />
      <div>
        <div
          className="text-secondary"
          role={static_name ? "none" : "button"}
          onClick={() => {
            if (seller) {
              history.push(`/user/${slug}/details`);
            } else {
              !static_name && user?.slug === slug
                ? window.open(
                    `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/profile`
                  )
                : history.push(`/user/${slug}/details`);
            }
          }}
        >
          {username}
        </div>
      </div>
    </div>
  ) : (
    <span
      className="text-secondary"
      role={static_name ? "none" : "button"}
      onClick={() => {
        if (seller) {
          history.push(`/user/${slug}/details`);
        } else {
          !static_name && user?.slug === slug
            ? window.open(
                `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/profile`
              )
            : history.push(`/user/${slug}/details`);
        }
      }}
    >
      {username}
    </span>
  );
};

export default OwnerName;
