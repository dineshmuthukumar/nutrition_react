import React from "react";
import userImg from "../../images/user_1.png";

const BuyName = ({
  imgUrl,
  text,
  isTable = false,
  slug,
  static_name = false,
}) => {
  return isTable ? (
    <div className="expand-history-owner">
      <img src={imgUrl ? imgUrl : userImg} />
      <div>
        <div
          className="text-secondary"
          role={static_name ? "none" : "button"}
          onClick={() =>
            !static_name &&
            window.open(
              `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/view/${slug}`
            )
          }
        >
          {text}
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
          `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/view/${slug}`
        )
      }
    >
      {text}
    </span>
  );
};

export default BuyName;
