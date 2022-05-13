import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Offcanvas } from "react-bootstrap";
import ErrorText from "./error-text";
import sample from "../../images/jump-trade/sample.png";
import done from "../../images/jump-trade/done.svg";
import emptycart from "../../images/jump-trade/empty1.gif";
// import emptycart from "../../images/jump-trade/empty-cart.gif";
import { BiCheck } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { AiOutlineWarning } from "react-icons/ai";
import "./style.scss";
import { currencyFormat } from "../../utils/common";
import {
  get_cart_list_thunk,
  remove_from_cart_thunk,
} from "../../redux/thunk/user_cart_thunk";
import { checkoutApi } from "../../api/methods";
import { proceed_checkout_request } from "../../redux/actions/user_cart_action";

const Cart = ({ cartPop = false, setCartPop }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cart } = state;
  const userCart = cart?.data ? cart?.data : null;
  const [noBalance, setNoBalance] = useState(false);
  const [success, setSuccess] = useState(false);
  const [checkoutList, setCheckoutList] = useState([]);
  const [successData, setSuccessData] = useState({});
  const [error, setError] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    let amount = 0;
    userCart?.line_items
      ?.filter((obj) => selectedItems.includes(obj.line_item_slug))
      .map((nft) => {
        amount = amount + parseFloat(nft?.buy_amount);
      });
    amount =
      parseFloat(amount) +
      (parseFloat(amount) * parseFloat(userCart?.service_fee)) / 100;
    setTotalAmount(amount);
  }, [selectedItems, userCart]);

  useEffect(() => {
    let amount = 0;
    if (checkoutList.length > 0) {
      checkoutList.map((nft) => {
        amount = amount + parseFloat(nft?.buy_amount);
      });
      amount =
        parseFloat(amount) +
        (parseFloat(amount) * parseFloat(userCart?.service_fee)) / 100;
      setFinalAmount(amount);
    }
  }, [checkoutList]);

  const handleCheckout = async () => {
    try {
      const result = await checkoutApi({ selectedItems });
      if (result.data.success) {
        setSuccess(true);
        setCheckoutList(result.data.data.line_items);
        setSuccessData(result.data.data);
      }
      dispatch(get_cart_list_thunk());
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckNFT = (itemSlug) => {
    let items = [...selectedItems];
    const index = items.indexOf(itemSlug);
    if (index > -1) {
      items.splice(index, 1);
    } else {
      items.push(itemSlug);
    }
    setSelectedItems(items);
  };

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
            userCart?.line_items?.length > 0 ? (
              <div className="pop-cart-details">
                <div className="pop-head-content">
                  <div className="pop-cart-title">
                    Cart {userCart && `(${userCart?.total_count})`}
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
                    {userCart?.line_items?.map((nft, i) => (
                      <>
                        {nft?.order_status !== "onsale" && (
                          <div className="cart-error mt-3">
                            <div className="d-flex align-items-center">
                              <AiOutlineWarning size={16} color="#F11010" />
                              <span className="ms-2">
                                NFT been purchased or order cancelled
                              </span>
                            </div>
                          </div>
                        )}
                        <div
                          className={`d-flex align-items-center justify-content-between py-4 cart-item ${
                            nft?.order_status !== "onsale" && "cart-disabled"
                          }`}
                          key={`cart-item-${i}`}
                        >
                          <div className="d-flex ">
                            <div>
                              <label className="checkbox">
                                <input
                                  name="checkbox-group"
                                  type="checkbox"
                                  onChange={() =>
                                    handleCheckNFT(nft?.line_item_slug)
                                  }
                                />
                                <span className="checkbox__mark">
                                  <BiCheck />
                                </span>
                              </label>
                            </div>
                            <div className="cart-img">
                              {(() => {
                                if (nft?.asset_type?.includes("image")) {
                                  return (
                                    <img
                                      alt="media nft"
                                      src={
                                        nft.asset_url ? nft.asset_url : sample
                                      }
                                    />
                                  );
                                } else if (nft?.asset_type?.includes("audio")) {
                                  return (
                                    <>
                                      <img
                                        alt="media nft"
                                        src={
                                          nft.cover_url ? nft.cover_url : sample
                                        }
                                      />
                                    </>
                                  );
                                } else if (nft?.asset_type?.includes("video")) {
                                  return (
                                    <img
                                      alt="media nft"
                                      src={
                                        nft.cover_url ? nft.cover_url : sample
                                      }
                                    />
                                  );
                                } else {
                                  return (
                                    <img
                                      alt="media nft"
                                      src={
                                        nft.asset_url ? nft.asset_url : sample
                                      }
                                    />
                                  );
                                }
                              })()}
                            </div>
                            <div className="cart-nft-detail">
                              <span className="cart-subtitle">
                                {nft?.category_name}
                              </span>
                              <div className="d-flex my-2">
                                <h2>{nft?.name}</h2>
                              </div>
                              <div
                                className={`remove-cart d-flex align-items-center ${
                                  nft?.order_status !== "onsale" && "text-white"
                                }`}
                                onClick={() =>
                                  dispatch(
                                    remove_from_cart_thunk(nft?.line_item_slug)
                                  )
                                }
                                role={"button"}
                              >
                                <MdDelete className="me-1" size={16} />{" "}
                                <span>Remove</span>
                              </div>
                            </div>
                          </div>
                          <div className="nft-cart-price d-flex align-items-center">
                            {currencyFormat(nft?.buy_amount, "USD")}
                          </div>
                        </div>
                      </>
                    ))}

                    {/* cart-disabled and className="text-white" for remove */}
                  </div>
                </div>
                {selectedItems.length > 0 ? (
                  <div className="bottom-content-cart py-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="cart-servicefee">
                        <span className="mb-3 d-block">SERVICE FEE</span>
                        <h2>{userCart?.service_fee}%</h2>
                      </div>
                      <div className="cart-total text-end">
                        <span className="mb-3 d-block">TOTAL AMOUNT</span>
                        <h2>${totalAmount}</h2>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bottom-content-cart py-4">
                    <div className="align-items-center justify-content-between">
                      <h4 className="text-center">
                        Please select some NFT from the cart to proceed with
                        checkout
                      </h4>
                    </div>
                  </div>
                )}
                <div className="cart-bottom-btn">
                  <div className="text-center flex-btn full-width">
                    <button
                      className="cart-btn text-center btn-lg mt-2 rounded-pill"
                      onClick={handleCheckout}
                      disabled={selectedItems.length === 0}
                    >
                      BUY NFTs
                    </button>
                    <div className="mt-2 royalty-info"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="pop-cart-details">
                <div className="pop-head-content">
                  <div className="pop-cart-title">Cart</div>
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

                <div className="pop-body-content d-flex align-items-center justify-content-center empty-cart-content">
                  <div className="error-float-container">
                    {noBalance && <ErrorText type="nobalance" />}
                  </div>
                  <div className="pop-cart-info">
                    <div className="d-block text-center py-4 empty-cart-item">
                      {/* jjj */}
                      <img src={emptycart} />
                    </div>
                    <div className="text-center empty-cart">
                      <h2>Empty Cart</h2>
                    </div>
                  </div>
                </div>

                <div className="cart-bottom-btn">
                  <div className="text-center flex-btn full-width">
                    <button
                      className="cart-btn text-center btn-lg mt-2 rounded-pill"
                      onClick={() => setCartPop(!cartPop)}
                    >
                      CLOSE
                    </button>
                    <div className="mt-2 royalty-info"></div>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="pop-cart-details">
              <div className="pop-head-content">
                <div className="pop-cart-title">Checkout</div>
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
              <div className={`pop-cart-progress success`}>
                <div className="progress-complete"></div>
              </div>
              <div className="pop-body-content success">
                <div className="order-placed text-center py-4">
                  <img src={done} />
                  <h2 className="py-4">Order Processed Successfully</h2>
                </div>

                <div className="pop-cart-info">
                  {checkoutList.length > 0 &&
                    checkoutList.map((nft, i) => (
                      <>
                        {nft?.status === "failed" && (
                          <div className="cart-error mt-3">
                            <div className="d-flex align-items-center">
                              <AiOutlineWarning size={16} color="#F11010" />
                              <span className="ms-2">
                                NFT been purchased or order cancelled
                              </span>
                            </div>
                          </div>
                        )}
                        <div
                          className={`d-flex align-items-center justify-content-between py-4 cart-item ${
                            nft?.status === "failed" && "cart-disabled"
                          }`}
                          key={`checkout-item-${i}`}
                        >
                          <div className="d-flex ">
                            <div className="cart-img">
                              {(() => {
                                if (nft?.asset_type?.includes("image")) {
                                  return (
                                    <img
                                      alt="media nft"
                                      src={
                                        nft.asset_url ? nft.asset_url : sample
                                      }
                                    />
                                  );
                                } else if (nft?.asset_type?.includes("audio")) {
                                  return (
                                    <>
                                      <img
                                        alt="media nft"
                                        src={
                                          nft.cover_url ? nft.cover_url : sample
                                        }
                                      />
                                    </>
                                  );
                                } else if (nft?.asset_type?.includes("video")) {
                                  return (
                                    <img
                                      alt="media nft"
                                      src={
                                        nft.cover_url ? nft.cover_url : sample
                                      }
                                    />
                                  );
                                } else {
                                  return (
                                    <img
                                      alt="media nft"
                                      src={
                                        nft.asset_url ? nft.asset_url : sample
                                      }
                                    />
                                  );
                                }
                              })()}
                            </div>
                            <div className="cart-nft-detail">
                              <span className="cart-subtitle">
                                {nft?.category_name}
                              </span>
                              <div className="d-flex my-2">
                                <h2>{nft?.name}</h2>
                              </div>
                              <div className="qty d-flex align-items-center">
                                <span>Qty: {nft?.quantity}</span>
                              </div>
                            </div>
                          </div>
                          <div className="nft-cart-price d-flex align-items-center">
                            {currencyFormat(nft?.buy_amount, "USD")}
                          </div>
                        </div>
                      </>
                    ))}
                </div>
              </div>

              <div className="bottom-content-cart py-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="cart-servicefee">
                    <span className="mb-3 d-block">SERVICE FEE</span>
                    <h2>{successData?.total_service_fee}%</h2>
                  </div>
                  <div className="cart-total text-end">
                    <span className="mb-3 d-block">TOTAL AMOUNT</span>
                    <h2>{currencyFormat(successData?.final_amount, "USD")}</h2>
                  </div>
                </div>
              </div>

              <div className="cart-bottom-btn">
                <div className="text-center flex-btn full-width">
                  <button
                    className="cart-btn text-center btn-lg mt-2 rounded-pill"
                    onClick={() => setCartPop(!cartPop)}
                  >
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
