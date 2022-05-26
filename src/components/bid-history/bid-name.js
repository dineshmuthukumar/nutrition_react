import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import images from "../../utils/images.json";

const BidName = ({
  imgUrl,
  text,
  isTable = false,
  slug,
  static_name = false,
}) => {
  const history = useHistory();
  const { user } = useSelector((state) => state.user.data);

  const username =
    user?.slug === slug ? `@${user?.first_name + user?.last_name}` : text;
  return isTable ? (
    <div className="expand-history-owner">
      <img src={imgUrl ? imgUrl : images.userJPG} alt="" loading="lazy" />
      <div>
        <div
          className="text-secondary"
          role={static_name ? "none" : "button"}
          onClick={() =>
            !static_name && user?.slug === slug
              ? window.open(
                  `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/profile`
                )
              : history.push(`/user/${slug}/details`)
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
        !static_name && user?.slug === slug
          ? window.open(
              `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/profile`
            )
          : history.push(`/user/${slug}/details`)
      }
    >
      {username}
    </span>
  );
};

export default BidName;
