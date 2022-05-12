import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Offcanvas } from "react-bootstrap";
import ErrorText from "./error-text";

import "./style.scss";
import { BiCheck } from "react-icons/bi";

const Cart = ({ cartPop = false, setCartPop }) => {
  const state = useSelector((state) => state);
  const { cart } = state;
  const userCart = cart?.data ? cart?.data : null;
  const [noBalance, setNoBalance] = useState(false);

  return (
    <Offcanvas
      show={cartPop}
      onHide={() => setCartPop(!cartPop)}
      placement="end"
      className="w-100 w-md-50 w-lg-42"
    >
      <Offcanvas.Body className="p-0 pop-body-container">
        <>
          <div className="pop-cart-details">
            <div className="pop-head-content">
              <div className="pop-cart-title">
                Cart {userCart && `(${userCart?.count})`}
              </div>
              <div
                className="close-button-pop"
                onClick={() => setCartPop(!cartPop)}
              >
                <img
                  alt="cart close"
                  src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e"
                ></img>
              </div>
            </div>
            {/* error-progress -> error progress , loading -> progressing */}
            <div className={`pop-cart-progress`}>
              <div className="progress-complete"></div>
            </div>
            <div className="pop-body-content">
              <div className="error-float-container">
                {noBalance && <ErrorText type="nobalance" />}
              </div>
              <div className="pop-cart-info">
                <label htmlFor={`nft`} className="checkbox">
                  <input id={`nft`} name="checkbox-group" type="checkbox" />
                </label>
                <div className="pop-cart-media">Image</div>

                <div className="pop-cart-content">Cart List</div>
              </div>
            </div>
            <button>Checkout</button>
          </div>
        </>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
