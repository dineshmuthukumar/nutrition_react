import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Offcanvas } from "react-bootstrap";
import ErrorText from "./error-text";
import sample from "../../images/jump-trade/sample.png";
import done from "../../images/jump-trade/done.svg";
import { BiCheck } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { AiOutlineWarning } from "react-icons/ai";
import "./style.scss";

const Cart = ({ cartPop = false, setCartPop }) => {
  const state = useSelector((state) => state);
  const { cart } = state;
  const userCart = cart?.data ? cart?.data : null;
  const [noBalance, setNoBalance] = useState(false);
  const [success, setSuccess] = useState(true);

  return (
    <Offcanvas
      show={cartPop}
      onHide={() => setCartPop(!cartPop)}
      placement="end"
      className="w-100 w-md-50 w-lg-42"
    >
      <Offcanvas.Body className="p-0 pop-body-container">
        <>
          {!success ? (
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
                  {/* cart item starts */}
                  <div className="d-flex align-items-center justify-content-between py-4 cart-item">
                    <div className="d-flex">
                      <div>
                        <label className="checkbox">
                          <input name="checkbox-group" type="checkbox" />
                          <span className="checkbox__mark">
                            <BiCheck />
                          </span>
                        </label>
                      </div>
                      <div className="cart-img">
                        <img src={sample} />
                      </div>
                      <div className="cart-nft-detail">
                        <span className="cart-subtitle">
                          Meta Cricket League
                        </span>
                        <div className="d-flex">
                          <h2>Meta Express #1580</h2>
                        </div>
                        <div className="remove-cart d-flex align-items-center">
                          <MdDelete className="me-1" size={16} />{" "}
                          <span>Remove</span>
                        </div>
                      </div>
                    </div>
                    <div className="nft-cart-price d-flex align-items-center">
                      $3000
                    </div>
                  </div>
                  {/* cart item ends */}
                  {/* cart item starts */}
                  {/* Error message */}
                  <div className="cart-error">
                    <div className="d-flex align-items-center">
                      <AiOutlineWarning size={16} color="#F11010" />
                      <span className="ms-2">
                        NFT been purchased or order cancelled
                      </span>
                    </div>
                  </div>
                  {/* Error message */}
                  <div className="d-flex align-items-center justify-content-between py-4 cart-item cart-disabled">
                    <div className="d-flex">
                      <div>
                        <label className="checkbox">
                          <input name="checkbox-group" type="checkbox" />
                          <span className="checkbox__mark">
                            <BiCheck />
                          </span>
                        </label>
                      </div>
                      <div className="cart-img">
                        <img src={sample} />
                      </div>
                      <div className="cart-nft-detail">
                        <span className="cart-subtitle">
                          Meta Cricket League
                        </span>
                        <div className="d-flex">
                          <h2>Meta Express #1580</h2>
                        </div>
                        <div className="remove-cart d-flex align-items-center">
                          <MdDelete className="me-1" size={16} />{" "}
                          <span className="text-white">Remove</span>
                        </div>
                      </div>
                    </div>
                    <div className="nft-cart-price d-flex align-items-center">
                      $3000
                    </div>
                  </div>
                  {/* cart item ends */}
                </div>
              </div>
              <div className="bottom-content-cart py-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="cart-servicefee">
                    <span className="mb-3 d-block">SERVICE FEE</span>
                    <h2>2.5%</h2>
                  </div>
                  <div className="cart-total text-end">
                    <span className="mb-3 d-block">TOTAL AMOUNT</span>
                    <h2>$3030.34</h2>
                  </div>
                </div>
              </div>
              <div className="cart-bottom-btn">
                <div className="text-center flex-btn full-width">
                  <button className="cart-btn text-center btn-lg mt-2 rounded-pill">
                    BUY NFTs
                  </button>
                  <div className="mt-2 royalty-info"></div>
                </div>
              </div>
            </div>
          ) : (
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
              <div className="pop-body-content cart-success">
                <div className="order-placed text-center py-4">
                  <img src={done} />
                  <h2 className="py-4">Order Processed Successfully</h2>
                </div>

                <div className="error-float-container">
                  {noBalance && <ErrorText type="nobalance" />}
                </div>
                <div className="pop-cart-info">
                  {/* cart item starts */}
                  <div className="d-flex align-items-center justify-content-between py-4 cart-item">
                    <div className="d-flex">
                      <div className="cart-img">
                        <img src={sample} />
                      </div>
                      <div className="cart-nft-detail">
                        <span className="cart-subtitle">
                          Meta Cricket League
                        </span>
                        <div className="d-flex">
                          <h2>Meta Express #1580</h2>
                        </div>
                        <div className="remove-cart d-flex align-items-center">
                          <span>Qty : 3</span>
                        </div>
                      </div>
                    </div>
                    <div className="nft-cart-price d-flex align-items-center">
                      $3000
                    </div>
                  </div>
                  {/* cart item ends */}
                  {/* cart item starts */}
                  <div className="d-flex align-items-center justify-content-between py-4 cart-item">
                    <div className="d-flex">
                      <div className="cart-img">
                        <img src={sample} />
                      </div>
                      <div className="cart-nft-detail">
                        <span className="cart-subtitle">
                          Meta Cricket League
                        </span>
                        <div className="d-flex">
                          <h2>Meta Express #1580</h2>
                        </div>
                        <div className="remove-cart d-flex align-items-center">
                          <span>Qty : 3</span>
                        </div>
                      </div>
                    </div>
                    <div className="nft-cart-price d-flex align-items-center">
                      $3000
                    </div>
                  </div>
                  {/* cart item ends */}
                  {/* cart item starts */}
                  <div className="d-flex align-items-center justify-content-between py-4 cart-item">
                    <div className="d-flex">
                      <div className="cart-img">
                        <img src={sample} />
                      </div>
                      <div className="cart-nft-detail">
                        <span className="cart-subtitle">
                          Meta Cricket League
                        </span>
                        <div className="d-flex">
                          <h2>Meta Express #1580</h2>
                        </div>
                        <div className="remove-cart d-flex align-items-center">
                          <span>Qty : 3</span>
                        </div>
                      </div>
                    </div>
                    <div className="nft-cart-price d-flex align-items-center">
                      $3000
                    </div>
                  </div>
                  {/* cart item ends */}
                  {/* cart item starts */}
                  <div className="d-flex align-items-center justify-content-between py-4 cart-item">
                    <div className="d-flex">
                      <div className="cart-img">
                        <img src={sample} />
                      </div>
                      <div className="cart-nft-detail">
                        <span className="cart-subtitle">
                          Meta Cricket League
                        </span>
                        <div className="d-flex">
                          <h2>Meta Express #1580</h2>
                        </div>
                        <div className="remove-cart d-flex align-items-center">
                          <span>Qty : 3</span>
                        </div>
                      </div>
                    </div>
                    <div className="nft-cart-price d-flex align-items-center">
                      $3000
                    </div>
                  </div>
                  {/* cart item ends */}
                  {/* cart item starts */}
                  <div className="d-flex align-items-center justify-content-between py-4 cart-item">
                    <div className="d-flex">
                      <div className="cart-img">
                        <img src={sample} />
                      </div>
                      <div className="cart-nft-detail">
                        <span className="cart-subtitle">
                          Meta Cricket League
                        </span>
                        <div className="d-flex">
                          <h2>Meta Express #1580</h2>
                        </div>
                        <div className="remove-cart d-flex align-items-center">
                          <span>Qty : 3</span>
                        </div>
                      </div>
                    </div>
                    <div className="nft-cart-price d-flex align-items-center">
                      $3000
                    </div>
                  </div>
                  {/* cart item ends */}
                </div>
              </div>

              <div className="cart-bottom-btn">
                <div className="text-center flex-btn full-width">
                  <button className="cart-btn text-center btn-lg mt-2 rounded-pill">
                    OKAY
                  </button>
                  <div className="mt-2 royalty-info"></div>
                </div>
              </div>
            </div>
          )}
        </>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
