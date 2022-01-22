import React from "react";
import { useHistory } from "react-router-dom";
import { currencyFormat } from "../../utils/common";

const CancelNft = ({ nft, order, image, modalShow, setModalShow }) => {
  const history = useHistory();
  return (
    <article className="cancel-nft">
      <div className="image-block">
        <img src={image} alt="nfImages" />
      </div>
      <div className="info-block">
        <h5 className="name">{nft?.name}</h5>
        <ul className="nft-info">
          <li className="quantity">
            <span className="key">Quantity</span>
            <span className="value">{`${order.available_quantity} / ${order.total_quantity}`}</span>
          </li>
          <li className="price">
            <span className="key">Price</span>
            <span className="value">
              {currencyFormat(order.buy_amount, "USD")}
            </span>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="btn btn-dark text-center mt-2 rounded-pill cancel-btn"
        onClick={() => {
          setModalShow(!modalShow);
          window.open(
            `${process.env.REACT_APP_MARKETPLACE_URL}/order/details/${nft.slug}/${order.slug}`,
            "_self"
          );
        }}
      >
        Cancel
      </button>
    </article>
  );
};

export default CancelNft;
