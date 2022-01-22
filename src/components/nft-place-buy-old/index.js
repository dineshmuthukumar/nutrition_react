import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { Offcanvas } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

import ErrorText from "./error-text";
import sample from "../../images/sampleNFT.jpg";
import {
  bidBuyError,
  currencyFormat,
  validateCurrency,
  validateQuantity,
} from "../../utils/common";
import { nftBidApi, nftBuyApi } from "../../api/methods";

import "./style.scss";
import { useParams } from "react-router-dom";
import ToolTip from "../tooltip/index";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const NFTPlaceBuy = ({
  placeBuyPop = false,
  setPlaceBuyPop,
  nft,
  orderDetails,
  // socketData,
  price,
  userTotalBuys,
  soldOut,
}) => {
  const { user } = useSelector((state) => state.user.data);
  const { orderSlug } = useParams();

  const [success, setSuccess] = useState(false);
  const [successData, setSuccessData] = useState({});

  const erc721 = nft.nft_type === "erc721";
  const [noBalance, setNoBalance] = useState(false);

  const [buyAmount, setBuyAmount] = useState(0);
  const [buyQuantity, setBuyQuantity] = useState("");
  const [error, setError] = useState("");

  const [buy, setBuy] = useState({
    amountClass: "",
    progressError: "",
    buttonDisable: true,
    processClass: "",
    buttonName: "Confirm",
    isError: false,
    errorTitle: "",
    errorDescription: "",
  });

  //pop up reset
  useEffect(() => {
    setNoBalance(false);
    if (erc721) {
      setBuyAmount(orderDetails.buy_amount);
    } else {
      setBuyAmount(0);
    }
    setBuyQuantity("");
    setError("");
    setBuy({
      amountClass: "",
      progressError: "",
      buttonDisable: true,
      processClass: "",
      buttonName: "Confirm",
      isError: false,
      errorTitle: "",
      errorDescription: "",
    });
  }, []);

  const handleBuy = async () => {
    if (!user)
      window.open(
        `${process.env.REACT_APP_ACCOUNTS_URL}/signin?redirect=${window.location.href}`,
        "_self"
      );

    try {
      setBuy({
        ...buy,
        progressError: "loading",
        processClass: "process",
        buttonName: "Processing...",
        buttonDisable: true,
      });
      const result = await nftBuyApi({
        order_slug: orderSlug,
        order: { quantity: erc721 ? 1 : parseInt(buyQuantity) },
      });
      if (result.data.success) {
        setSuccess(true);
        setSuccessData(result.data.data.buy);

        setBuy({
          ...buy,
          progressError: "",
          processClass: "",
          buttonName: "Confirm",
          buttonDisable: false,
        });
      }
    } catch (error) {
      if (error.response.data.status === 422) {
        const err = bidBuyError(error.response.data.fail_status);
        setBuy({
          ...buy,
          isError: true,
          progressError: "error-progress",
          errorTitle: err.title,
          errorDescription: err.description,
        });
      }

      const err = bidBuyError(error.response.data.fail_status);
      setBuy({
        ...buy,
        isError: true,
        progressError: "error-progress",
        errorTitle: err.title,
        errorDescription: err.description,
      });
    }
  };

  const handleSuccess = () => {
    setPlaceBuyPop(!placeBuyPop);
    // window.location.reload();
    setSuccess(false);
    setBuyQuantity("");
    setBuyAmount(0);
    setBuy({
      ...buy,
      amountClass: "",
      buttonDisable: true,
    });
  };

  const handleBuyInputChange = (e) => {
    let count = nft.order_details.available_quantity;
    if (e.target.value) {
      if (
        validateQuantity(e.target.value) &&
        e.target.value <= count &&
        e.target.value !== 0
      ) {
        let amount = e.target.value * parseFloat(nft.order_details.buy_amount);
        if (user) {
          if (parseFloat(user.balance) <= parseFloat(amount)) {
            setBuyQuantity(e.target.value);
            setBuyAmount(amount);
            setBuy({
              ...buy,
              amountClass: "text-dark",
              progressError: "error-progress",
              buttonDisable: true,
            });
            setError("error-balance-float");
            setNoBalance(true);
          } else if (e.target.value > count) {
            setBuyQuantity(e.target.value);
            setBuyAmount(amount);
            setBuy({
              ...buy,
              amountClass: "text-dark",
              progressError: "error-progress",
              buttonDisable: true,
            });
            setError("error-balance");
          } else {
            setBuyQuantity(e.target.value);
            setBuyAmount(amount);
            setNoBalance(false);
            setError("");
            setBuy({
              ...buy,
              amountClass: "text-dark",
              progressError: "",
              buttonDisable: false,
            });
          }
        } else {
          if (e.target.value > count) {
            setBuyQuantity(e.target.value);
            setBuyAmount(amount);
            setBuy({
              ...buy,
              amountClass: "text-dark",
              progressError: "error-progress",
              buttonDisable: true,
            });
            setError("error-balance");
          } else {
            setBuyQuantity(e.target.value);
            setBuyAmount(amount);
            setError("");
            setBuy({
              ...buy,
              amountClass: "text-dark",
              progressError: "",
              buttonDisable: false,
            });
          }
        }
      }
    } else {
      setBuyQuantity(e.target.value);
      setBuyAmount(0);
      setBuy({
        ...buy,
        amountClass: "",
        progressError: "",
        buttonDisable: true,
      });
      setError("");
      setNoBalance(false);
    }
  };

  return (
    <Offcanvas
      show={placeBuyPop}
      onHide={() => setPlaceBuyPop(!placeBuyPop)}
      placement="end"
      className="w-100 w-md-50 w-lg-42"
    >
      <Offcanvas.Body className="p-0 pop-body-container">
        {user ? (
          <>
            <div className="pop-nft-details">
              {!success ? (
                <>
                  <div className="pop-head-content">
                    <div className="pop-bid-title">Purchase Your NFT</div>
                    <div
                      className="close-button-pop"
                      onClick={() => setPlaceBuyPop(!placeBuyPop)}
                    >
                      <img
                        alt="place bid logo"
                        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e"
                      ></img>
                    </div>
                  </div>

                  {/* error-progress -> error progress , loading -> progressing */}
                  <div className={`pop-bid-progress ${buy.progressError}`}>
                    <div className="progress-complete"></div>
                  </div>
                  <div className="pop-bid-bodyContent">
                    <div className="error-float-container">
                      {noBalance && <ErrorText type="nobalance" />}
                      {/* <ErrorText type="ending-time" /> */}
                      {buy.isError && (
                        <ErrorText
                          handleClick={() =>
                            setBuy({
                              ...buy,
                              isError: false,
                              progressError: "",
                            })
                          }
                          type="error"
                          title={buy.errorTitle}
                          desc={buy.errorDescription}
                        />
                      )}
                    </div>
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
                        <div className="pop-author-name text-center mt-3">
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
                    {/* error-bid -> less value than min bid,  error-balance -> low value, error-balance-float -> low value in quantity  */}

                    <div className="sticky-bottom-nft-buy">
                      <div className={`input-bid-container ${error}`}>
                        <div className={`input-field-bid`}>
                          <label className="input-bid-text">
                            {erc721
                              ? `Price of NFT`
                              : `Enter Quantity Max (${orderDetails.available_quantity})`}
                          </label>

                          {!erc721 ? (
                            <div className="input-quantity-container">
                              <input
                                type="text"
                                className="input-quantity"
                                value={buyQuantity}
                                placeholder="0 NFT"
                                maxLength={20}
                                onChange={handleBuyInputChange}
                              />
                              {/* text-dark -> dark text after entering quantity */}
                              <span
                                className={`quantity-to-value ${buy.amountClass}`}
                              >
                                {currencyFormat(buyAmount, "USD")}
                              </span>
                            </div>
                          ) : (
                            <div className="services-fee-box">
                              <h1>{currencyFormat(buyAmount, "USD")}</h1>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className={`input-bid-container`}>
                        <div className="input-field-bid">
                          <div className="services-fee-box">
                            <label className="input-bid-text">
                              Service Fee{" "}
                              <ToolTip
                                icon={
                                  <BsFillQuestionCircleFill
                                    size={16}
                                    className="ms-2 check-icon"
                                  />
                                }
                                content={
                                  "The service fee includes gas fee and the platform fee."
                                }
                                placement="right"
                              />
                            </label>
                            <h4>{parseFloat(nft.service_fee)}%</h4>
                          </div>
                        </div>
                      </div>
                      <div className={`input-bid-container`}>
                        <div className="input-field-bid">
                          <div className="total-amount-box">
                            <label className="input-bid-text">
                              Total Amount
                            </label>
                            <h1>
                              {currencyFormat(
                                parseFloat(buyAmount) +
                                  (parseFloat(buyAmount) *
                                    parseFloat(nft.service_fee)) /
                                    100,
                                "USD"
                              )}
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="terms text-secondary">
                        An transaction can't be reversed after NFT is been
                        purchased.{" "}
                        <a
                          href={process.env.REACT_APP_HELP_URL}
                          target="_blank"
                        >
                          Learn more
                        </a>{" "}
                        about how it works.
                      </div>
                    </div>
                  </div>
                  <div className="bottom-area">
                    <div className="terms text-secondary">
                      An NFT purchase cannot be refunded or reversed.
                      <a href={process.env.REACT_APP_HELP_URL} target="_blank">
                        Learn more
                      </a>{" "}
                      to know how NFT purchases work.
                    </div>

                    <div className="bottom-content-pop">
                      <div
                        className="back-button"
                        onClick={() => setPlaceBuyPop(!placeBuyPop)}
                      >
                        Back
                      </div>
                      <div className="place-bid-button">
                        {erc721 ? (
                          <button
                            className={`btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop`} //process -> proccessing
                            onClick={handleBuy}
                          >
                            Confirm
                          </button>
                        ) : (
                          <button
                            disabled={buy.buttonDisable}
                            className={`btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop ${buy.processClass}`} //process -> proccessing
                            onClick={handleBuy}
                          >
                            {(() => {
                              if (soldOut) {
                                return "Sold Out";
                              } else if (buyQuantity > 0) {
                                return buy.buttonName;
                              } else {
                                return "NFT quantity is required";
                              }
                            })()}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* <div className="sucess-title">
                    <FaCheckCircle color={"#23bf61"} size={60} />
                    <div className="message mt-3">
                      Your can view your NFT in My NFT page
                    </div>
                  </div> */}
                  <div className="success-preview">
                    <div className="pop-nft-title text-center mb-1 bold">
                      You have successfully purchased your NFT. You can view
                      them in the 'My NFT' section of your profile.
                    </div>
                    <div className="pop-nft-media mt-4 preview">
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
                    <div className="pop-author-name text-center mt-3">
                      Amitabh Bachchan
                    </div>
                    <div className="pop-nft-title text-center mb-1">
                      {nft?.name}
                    </div>

                    <div className="success-summary-container mt-3">
                      <div className="success-summary">
                        <div>Price</div>
                        <div className="bold">
                          {currencyFormat(successData.amount, "USD")}
                        </div>
                      </div>
                      {!erc721 && (
                        <div className="success-summary">
                          <div>Quantity</div>
                          <div className="bold">{successData.quantity}</div>
                        </div>
                      )}
                      <div className="success-summary">
                        <div>Purchased on</div>
                        <div className="bold">
                          {dayjs(successData.created_at).format(
                            "MMM D, YYYY hh:mm A"
                          )}
                        </div>
                      </div>

                      {erc721 && (
                        <div className="success-summary">
                          <div>Buy placed for</div>
                          <div className="bold">1 Limited Edition</div>
                        </div>
                      )}

                      <div className="success-summary">
                        <div>Transaction ID</div>
                        <div className="bold">{successData.transaction_id}</div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-area">
                    <div className="bottom-content-pop">
                      <div className="place-bid-button">
                        <button
                          className="btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop "
                          onClick={handleSuccess}
                        >
                          View your NFT
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
            <div className="pop-nft-details">
              <div className="pop-head-content">
                <div className="pop-bid-title">
                  {/* {erc721 ? "Sign in to place bid" : "Sign in to buy"} */}
                </div>
                <div
                  className="close-button-pop"
                  onClick={() => setPlaceBuyPop(!placeBuyPop)}
                >
                  {/* <BiX
                    role="button"
                    size={45}
                    onClick={() => setPlaceBuyPop(!placeBuyPop)}
                  /> */}
                  <img
                    alt="bid logo"
                    src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e"
                  ></img>
                </div>
              </div>
              <div className="pop-signin">
                <div className="pop-signin-title text-center mb-1">
                  {erc721 ? "Sign in to place bid" : "Sign in to place buy"}
                </div>
                <div className="pop-nft-media">
                  <button
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
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

export default NFTPlaceBuy;
