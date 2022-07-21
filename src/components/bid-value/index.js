import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import ToolTip from "../tooltip/index";
import images from "../../utils/images.json";

import "./style.scss";

const BidValue = ({
  ClassNames,
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
  toolTip,
}) => {
  const history = useHistory();
  const { user } = useSelector((state) => state.user.data);
  // console.log("shdujdfkfkefkreffrffr", user);
  const userName = user?.private
    ? `@${user.private_name}`
    : `@${user?.first_name}${user?.last_name}`;

  return (
    <div className={`current-bid ${ClassNames}`}>
      <div className="title">
        {title}{" "}
        {toolTip && (
          <ToolTip
            icon={
              <BsFillQuestionCircleFill size={16} className="mb-1 check-icon" />
            }
            content={toolTip}
            placement="top"
          />
        )}
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
                  : images.userJPG
              }
            />
            {userSlug ? (
              <div
                className="win-user-name"
                role={"button"}
                onClick={() => {
                  if (user?.slug === userSlug) {
                    window.open(
                      `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/profile`
                    );
                  } else {
                    history.push(`/user/${userSlug}/details`);
                  }
                }}
              >
                {user?.slug === userSlug ? userName : name}
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
