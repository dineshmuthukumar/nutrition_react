import React from "react";
import { useSelector } from "react-redux";

import userImg from "../../images/user_1.png";

const OwnerName = ({
  imgUrl,
  text,
  isTable = false,
  slug,
  static_name = false,
}) => {
  const { user } = useSelector((state) => state.user.data);

  const username =
    user?.slug === slug ? `@${user?.first_name + user?.last_name}` : text;

  return isTable ? (
    <div className="expand-history-owner">
      <img src={imgUrl ? imgUrl : userImg} alt="" />
      <div>
        <div
          className="text-secondary"
          role={static_name ? "none" : "button"}
          onClick={() =>
            !static_name &&
            window.open(
              user?.slug === slug
                ? `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/profile`
                : `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/view/${slug}`
            )
          }
        >
          {username}
        </div>
      </div>
    </div>
  ) : (
    <span
      className="text-secondary"
      role={static_name ? "none" : "button"}
      onClick={() =>
        !static_name &&
        window.open(
          user?.slug === slug
            ? `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/profile`
            : `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/view/${slug}`
        )
      }
    >
      {username}
    </span>
  );
};

export default OwnerName;
