import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";
import BidValue from "../bid-value";

import ErrorText from "./error-text";
import { bidBuyError, validateQuantity } from "../../utils/common";
import { buySaleCancelApi, saleCancelApi } from "../../api/methods";
import sample from "../../images/sampleNFT.jpg";

import "./style.scss";

const NFTCancelTheSale = ({
  cancelTheSalePop = false,
  setCancelTheSalePop,
  nft,
  isOwner,
  orderDetails,
  availableQty,
  isOrderCancelled,
  totalQty,
}) => {
  const history = useHistory();
  const { user } = useSelector((state) => state.user.data);
  const [success, setSuccess] = useState(false);
  const [bidCancel, setBidCancel] = useState(false);
  const [buyCancel, setBuyCancel] = useState(false);
  const [cancelQuantity, setCancelQuantity] = useState("");
  const erc721 = nft.nft_type === "erc721";

  const [error, setError] = useState({
    isError: false,
    progressError: "",
    errorTitle: "",
    errorDescription: "",
  });

  const handleSaleCancel = async () => {
    try {
      const result = await saleCancelApi({
        order_slug: isOwner && nft.owner_details.orders[0].slug,
      });
      if (result.data.success) {
        setSuccess(true);
      }
    } catch (error) {
      if (error.response.data.status === 422) {
        const err = bidBuyError(error.response.data.fail_status);
        setError({
          ...error,
          isError: true,
          progressError: "error-progress",
          errorTitle: err.title,
          errorDescription: err.description,
        });
      }
    }
  };

  const handleBuyCancel = async () => {
    try {
      const result = await buySaleCancelApi({
        order_slug: orderDetails.slug,
        order: { quantity: erc721 ? 1 : parseInt(cancelQuantity) },
      });
      if (result.data.success) {
        setSuccess(true);
      }
    } catch (error) {
      if (error.response.data.status === 422) {
        const err = bidBuyError(error.response.data.fail_status);
        setError({
          ...error,
          isError: true,
          progressError: "error-progress",
          errorTitle: err.title,
          errorDescription: err.description,
        });
      }
    }
  };

  const handleQuantityInputChange = (e) => {
    if (e.target.value) {
      if (
        validateQuantity(e.target.value) &&
        e.target.value <= orderDetails.available_quantity &&
        e.target.value !== 0
      ) {
        setCancelQuantity(e.target.value);
      }
    } else {
      setCancelQuantity(e.target.value);
    }
  };

  const handleSuccess = () => {
    if (isOrderCancelled) {
      history.push(`/details/${nft?.slug}`);
    } else {
      setCancelTheSalePop(!cancelTheSalePop);
      setSuccess(false);
      setCancelQuantity("");
      setError({
        isError: false,
        progressError: "",
        errorTitle: "",
        errorDescription: "",
      });
    }
  };

  return (
    <Offcanvas
      show={cancelTheSalePop}
      onHide={() => setCancelTheSalePop(!cancelTheSalePop)}
      placement="end"
      className="w-100 w-md-50 w-lg-42"
    >
      <Offcanvas.Body className="p-0 pop-cancel-body-container">
        {user ? (
          <>
            <div className="pop-cancel-nft-details">
              {!success ? (
                !erc721 ? (
                  <>
                    <div className="pop-cancel-head-content">
                      <div className="pop-cancel-title">Cancel the sale</div>
                      <div
                        className="close-button-pop"
                        onClick={() => setCancelTheSalePop(!cancelTheSalePop)}
                      >
                        <img
                          alt="place bid logo"
                          src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e"
                        ></img>
                      </div>
                    </div>
                    <div className="pop-cancel-progress ">
                      <div className="progress-complete"></div>
                    </div>
                    <div className="pop-cancel-bodyContent px-4">
                      <div className="pop-nft-info">
                        <div className="pop-nft-media">
                          {(() => {
                            if (nft?.asset_type?.includes("image")) {
                              return (
                                <img
                                  alt="media logo"
                                  className="type_image typeimg_audio"
                                  src={nft.asset_url ? nft.asset_url : sample}
                                />
                              );
                            } else if (nft?.asset_type?.includes("audio")) {
                              return (
                                <>
                                  <img
                                    alt="media logo"
                                    className="type_image typeimg_audio"
                                    src={nft.cover_url ? nft.cover_url : sample}
                                  />
                                </>
                              );
                            } else if (nft?.asset_type?.includes("video")) {
                              return (
                                <img
                                  alt="media logo"
                                  className="type_image typeimg_audio"
                                  src={nft.cover_url ? nft.cover_url : sample}
                                />
                              );
                            } else {
                              return (
                                <img
                                  alt="media logo"
                                  className="type_image typeimg_audio"
                                  src={nft.asset_url ? nft.asset_url : sample}
                                />
                              );
                            }
                          })()}
                        </div>
                        <div className="pop-nft-content">
                          <div className="pop-author-name text-center">
                            Amitabh Bachchan
                          </div>
                          <div className="pop-nft-title text-center mb-1">
                            {nft?.name}
                          </div>
                          {erc721 && (
                            <div className="erc-type text-center mb-1">
                              1 of 1 <span>left</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className={`input-cancel-container mt-5 mb-5`}>
                        <div className="input-field-cancel px-0">
                          <label className="input-cancel-text">
                            No of units to cancel sale?
                          </label>
                          <div className="input-cancel-quantity-container bid-input">
                            <input
                              type="text"
                              className="input-cancel-quantity"
                              value={cancelQuantity}
                              placeholder="0 NFTs"
                              onChange={handleQuantityInputChange}
                            />
                            <span className="cancel-currency">
                              /
                              {availableQty != null
                                ? availableQty
                                : orderDetails.available_quantity}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* <div className="d-flex">
                        <BidValue title="Artist fee" value={"10 %"} />
                        <BidValue title="Service fee" value={"10 %"} />
                      </div>
                      <hr className="custom-divider" /> */}
                    </div>
                    <div className="bottom-area">
                      <h5 className="text-center">
                        Are you sure want to cancel the sale?
                      </h5>

                      <div className="bottom-content-pop">
                        <div className="back-button">Cancel</div>
                        <div className="place-cancel-button">
                          <button
                            className={`btn btn-dark text-center btn-lg w-75 rounded-pill place-cancel-btn-pop`} //process -> proccessing
                            disabled={(() => {
                              if (availableQty != null && availableQty === 0) {
                                return true;
                              } else {
                                return false;
                              }
                            })()}
                            onClick={handleBuyCancel}
                          >
                            {(() => {
                              if (availableQty != null && availableQty === 0) {
                                return "Sold Out";
                              } else {
                                return "Confirm";
                              }
                            })()}
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pop-cancel-head-content">
                      <div className="pop-cancel-title">Cancel the sale</div>
                      <div
                        className="close-button-pop"
                        onClick={() => setCancelTheSalePop(!cancelTheSalePop)}
                      >
                        <img
                          alt="place bid logo"
                          src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e"
                        ></img>
                      </div>
                    </div>

                    {/* error-progress -> error progress , loading -> progressing */}
                    <div
                      className={`pop-cancel-progress ${
                        success ? "error" : ""
                      }`}
                    >
                      <div className="progress-complete"></div>
                    </div>

                    <div className="sucess-title cancel-confirm">
                      <div className="pop-nft-info">
                        <div className="pop-nft-media">
                          {(() => {
                            if (nft?.asset_type?.includes("image")) {
                              return (
                                <img
                                  alt="media logo"
                                  className="type_image typeimg_audio"
                                  src={nft.asset_url ? nft.asset_url : sample}
                                />
                              );
                            } else if (nft?.asset_type?.includes("audio")) {
                              return (
                                <>
                                  <img
                                    alt="media logo"
                                    className="type_image typeimg_audio"
                                    src={nft.cover_url ? nft.cover_url : sample}
                                  />
                                </>
                              );
                            } else if (nft?.asset_type?.includes("video")) {
                              return (
                                <img
                                  alt="media logo"
                                  className="type_image typeimg_audio"
                                  src={nft.cover_url ? nft.cover_url : sample}
                                />
                              );
                            } else {
                              return (
                                <img
                                  alt="media logo"
                                  className="type_image typeimg_audio"
                                  src={nft.asset_url ? nft.asset_url : sample}
                                />
                              );
                            }
                          })()}
                        </div>

                        <div className="pop-nft-content">
                          <div className="pop-author-name text-center">
                            {nft?.category_name}
                          </div>
                          <div className="pop-nft-title text-center mb-1">
                            {nft?.name}
                          </div>
                          <div className="erc-type text-center mb-1">
                            1 of 1 <span>left</span>
                          </div>
                        </div>
                      </div>

                      {/* <div>
                        <FaTimesCircle color={"#f21e00"} size={60} />
                        <div className="message mt-3">
                          Are you sure want to cancel the {buyCancel && "Buy "}
                          {bidCancel && "Bid "}
                          sale?
                        </div>
                      </div> */}
                    </div>

                    {/* <div className="pop-cancel-bodyContent">
                    <div className="error-float-container">
                      {error && (
                        <ErrorText
                          handleClick={() =>
                            setError({
                              ...error,
                              isError: false,
                              progressError: "",
                            })
                          }
                          type="error"
                          title={error.errorTitle}
                          desc={error.errorDescription}
                        />
                      )}
                    </div>
                  </div> */}

                    <div className="bottom-area">
                      <h5 className="text-center">
                        Are you sure want to cancel the {buyCancel && "Buy "}
                        {bidCancel && "Bid "}
                        sale?
                      </h5>
                      <div className="bottom-content-pop">
                        <div
                          className={`back-button`} //process -> proccessing
                          onClick={() => setCancelTheSalePop(!cancelTheSalePop)}
                        >
                          No
                        </div>
                        <div className="place-cancel-button">
                          <button
                            className={`btn btn-dark text-center btn-lg w-75 rounded-pill place-cancel-btn-pop `} //process -> proccessing
                            onClick={handleSaleCancel}
                          >
                            Yes
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              ) : (
                <>
                  <div className="sucess-title">
                    <FaTimesCircle color={"#f21e00"} size={60} />
                    <div className="message mt-3">
                      Listing cancelled successfully. Your NFT is no longer
                      listed for selling.
                    </div>
                  </div>

                  <div className="bottom-area">
                    <div className="bottom-content-pop">
                      <div className="place-cancel-button">
                        <button
                          className="btn btn-dark text-center btn-lg w-75 rounded-pill place-cancel-btn-pop "
                          onClick={handleSuccess}
                        >
                          Okay
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="pop-cancel-nft-details">
              <div className="pop-cancel-head-content">
                <div className="pop-cancel-title"></div>
                <div
                  className="close-button-pop"
                  onClick={() => setCancelTheSalePop(!cancelTheSalePop)}
                >
                  <img
                    alt="bid logo"
                    src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e"
                  ></img>
                </div>
              </div>
              <div className="pop-signin">
                <div className="pop-signin-title text-center mb-1">
                  {erc721 ? "Sign in to place bid" : "Sign in to buy"}
                </div>
                <div className="pop-cancel-nft-media">
                  <button
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-cancel-btn"
                    onClick={() =>
                      window.open(
                        `${process.env.REACT_APP_ACCOUNTS_URL}/signin?redirect=${window.location.href}`,
                        "_self"
                      )
                    }
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default NFTCancelTheSale;
