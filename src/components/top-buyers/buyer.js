import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";
import { currencyFormat } from "../../utils/common";
import userImg from "../../images/user_1.jpg";
import "./style.scss";

const Buyer = ({ index, buyer, image }) => {
  const history = useHistory();
  const { user } = useSelector((state) => state.user.data);
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <article className="user-card">
          <h5 className="user-count"> {index + 1} </h5>
          <figure>
            <img
              src={
                !buyer.private && buyer.avatar_url
                  ? buyer.avatar_url
                  : user?.slug === buyer.slug && buyer.avatar_url
                  ? buyer.avatar_url
                  : userImg
              }
              alt="userImge"
              role={"button"}
              onClick={() => history.push(`/user/${buyer.slug}/details`)}
            />
            <IoIosCheckmark className="user-verify" />
          </figure>
          <div className="user-content">
            <h3
              className="user-name"
              role={"button"}
              onClick={() => history.push(`/user/${buyer.slug}/details`)}
            >
              {buyer.user_name}
            </h3>
            <h4 className="user-price">
              {currencyFormat(buyer.sold_total, "USD")}
            </h4>
          </div>
        </article>
      </div>
    </>
  );
};

export default Buyer;
