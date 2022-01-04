import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";
import { currencyFormat } from "../../utils/common";
import userImg from "../../images/user_1.png";
import "./style.scss";

const Seller = ({ index, seller, image }) => {
  const history = useHistory();
  const { user } = useSelector((state) => state.user.data);
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-sm-6">
        <article className="user-card">
          <h5 className="user-count"> {index + 1} </h5>
          <figure>
            <img
              src={
                !seller.private && seller.avatar_url
                  ? seller.avatar_url
                  : user?.slug === seller.slug && seller.avatar_url
                  ? seller.avatar_url
                  : userImg
              }
              alt="userImge"
              role={"button"}
              onClick={() => history.push(`/top-seller/${seller.slug}/details`)}
            />
            <IoIosCheckmark className="user-verify" />
          </figure>
          <div className="user-content">
            <h3
              className="user-name"
              role={"button"}
              onClick={() => history.push(`/top-seller/${seller.slug}/details`)}
            >
              {seller.user_name}
            </h3>
            <h4 className="user-price">
              {currencyFormat(seller.sold_total, "USD")}
            </h4>
          </div>
        </article>
      </div>
    </>
  );
};

export default Seller;
