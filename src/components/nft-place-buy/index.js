import React, { useState, useEffect } from "react";
import ReactPixel from "react-facebook-pixel";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

import ErrorText from "./error-text";
import images from "../../utils/images.json";
import {
  bidBuyError,
  currencyFormat,
  validateQuantity,
} from "../../utils/common";
import { nftBuyApi } from "../../api/methods";

import "./style.scss";
import ToolTip from "../tooltip/index";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import mixpanel from "mixpanel-browser";
const NFTPlaceBid = ({
  placeBuyPop = false,
  setPlaceBuyPop,
  nft,
  orderDetails,
  // socketData,
  availableQty,
  totalQty,
  soldOut,
  transferringNFT,
  isOrderOnSale,
  isOrderCancelled,
  orderSlug,
}) => {
  const { user } = useSelector((state) => state.user.data);
  // const { orderSlug } = useParams();

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
      if (parseFloat(user?.balance) < parseFloat(orderDetails?.buy_amount)) {
        setBuy({
          ...buy,
          amountClass: "text-dark",
          progressError: "error-progress",
          buttonDisable: true,
          buttonName: "Buy NFTs",
        });
        setError("error-balance-float");
        setNoBalance(true);
      } else {
        setBuy({
          amountClass: "",
          progressError: "",
          buttonDisable: false,
          processClass: "",
          buttonName: "Buy NFTs",
          isError: false,
          errorTitle: "",
          errorDescription: "",
        });
        setError("");
      }
      setBuyAmount(orderDetails?.buy_amount);
    } else {
      setBuyAmount(0);
      setBuy({
        amountClass: "",
        progressError: "",
        buttonDisable: true,
        processClass: "",
        buttonName: "Buy NFTs",
        isError: false,
        errorTitle: "",
        errorDescription: "",
      });
      setError("");
    }
    setBuyQuantity("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (erc721) {
      setBuyAmount(orderDetails?.buy_amount);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOrderOnSale, availableQty]);

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
        mixpanel.track("Purchased", {
          quantity: result.data.data.buy.quantity,
          amount: result.data.data.buy.amount,
        });
        setSuccess(true);
        setSuccessData(result.data.data.buy);
        setBuy({
          ...buy,
          progressError: "",
          processClass: "",
          buttonName: "Buy NFTs",
          buttonDisable: false,
        });

        // Meta Pixel
        ReactPixel.init(process.env.REACT_APP_META_PIXEL_ID);
        ReactPixel.pageView();
        ReactPixel.track("Purchase", { value: buyAmount, currency: "USD" });
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
      } else if (error.response.data.status === 404) {
        const err = bidBuyError(404);
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
      buttonDisable: erc721 ? false : true,
    });
  };

  const handleBuyInputChange = (e) => {
    let count =
      availableQty != null ? availableQty : orderDetails.available_quantity;
    if (e.target.value) {
      if (
        validateQuantity(e.target.value) &&
        e.target.value <= count &&
        e.target.value !== 0
      ) {
        let amount = e.target.value * parseFloat(orderDetails.buy_amount);
        if (user) {
          if (parseFloat(user.balance) < parseFloat(amount)) {
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
      <Offcanvas.Body className="p-0 pop-body-buy-container">
        {user ? (
          <>
            <div className="pop-nft-buy-details">
              {!success ? (
                <>
                  <div className="pop-head-content">
                    <div className="pop-buy-title">Purchase Your NFT</div>
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
                  <div className={`pop-buy-progress ${buy.progressError}`}>
                    <div className="progress-complete"></div>
                  </div>
                  <div className="pop-body-buy-content">
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
                                src={
                                  nft.asset_url ? nft.asset_url : images.sample
                                }
                                loading="lazy"
                              />
                            );
                          } else if (nft?.asset_type?.includes("audio")) {
                            return (
                              <>
                                <img
                                  alt="media logo"
                                  className="type_image typeimg_audio"
                                  src={
                                    nft.cover_url
                                      ? nft.cover_url
                                      : images.sample
                                  }
                                  loading="lazy"
                                />
                              </>
                            );
                          } else if (nft?.asset_type?.includes("video")) {
                            return (
                              <img
                                alt="media logo"
                                className="type_image typeimg_audio"
                                src={
                                  nft.cover_url ? nft.cover_url : images.sample
                                }
                                loading="lazy"
                              />
                            );
                          } else {
                            return (
                              <img
                                alt="media logo"
                                className="type_image typeimg_audio"
                                src={
                                  nft.asset_url ? nft.asset_url : images.sample
                                }
                                loading="lazy"
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
                        {/* <div className="erc-type text-center mb-1">
                          1 of 1 <span>left</span>
                        </div> */}
                        {erc721 ? (
                          <div className="erc-type text-center mb-1">
                            1 of 1 <span>left</span>
                          </div>
                        ) : (
                          <div className="erc-type text-center mb-1">
                            {availableQty >= 0 && availableQty != null
                              ? `${availableQty} / ${
                                  totalQty != null
                                    ? totalQty
                                    : orderDetails.total_quantity
                                }`
                              : `${orderDetails.available_quantity} / ${orderDetails.total_quantity}`}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* <div className="pop-nft-buy-media">
                      {(() => {
                        if (nft?.asset_type?.includes("image")) {
                          return (
                            <img
                              alt="media logo"
                              className="type_image typeimg_audio"
                              src={nft.asset_url ? nft.asset_url : images.sample}
                            />
                          );
                        } else if (nft?.asset_type?.includes("audio")) {
                          return (
                            <>
                              <img
                                alt="media logo"
                                className="type_image typeimg_audio"
                                src={nft.cover_url ? nft.cover_url : images.sample}
                              />
                            </>
                          );
                        } else if (nft?.asset_type?.includes("video")) {
                          return (
                            <img
                              alt="media logo"
                              className="type_image typeimg_audio"
                              src={nft.cover_url ? nft.cover_url : images.sample}
                            />
                          );
                        } else {
                          return (
                            <img
                              alt="media logo"
                              className="type_image typeimg_audio"
                              src={nft.asset_url ? nft.asset_url : images.sample}
                            />
                          );
                        }
                      })()}
                    </div>
                    <div className="pop-buy-author-name text-center mt-3">
                      {nft?.category_name}
                    </div>
                    <div className="pop-nft-buy-title text-center mb-1">
                      {nft?.name}
                    </div> */}
                    {/* {erc721 ? (
                      <div className="erc-quantity text-center mb-1">
                        1 of 1 <span>left</span>
                      </div>
                    ) : (
                      <div className="erc-quantity text-center mb-1">
                        {`${orderDetails.available_quantity} / ${orderDetails.total_quantity}`}
                      </div>
                    )} */}
                    {/* error-bid -> less value than min bid,  error-balance -> low value, error-balance-float -> low value in quantity  */}
                    <div className="sticky-bottom-fix buyfee-block">
                      <div className={`input-buy-container mt-4 ${error}`}>
                        <label className="input-buy-text">
                          {erc721
                            ? `Price of NFT`
                            : `Enter Quantity Max (${
                                availableQty >= 0 && availableQty != null
                                  ? availableQty
                                  : orderDetails.available_quantity
                              })`}
                        </label>

                        {!erc721 ? (
                          <div className="input-buy-quantity-container">
                            <input
                              type="text"
                              className="input-buy-quantity"
                              value={buyQuantity}
                              placeholder="0 NFT"
                              maxLength={20}
                              disabled={
                                transferringNFT || soldOut || isOrderCancelled
                              }
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
                          <>
                            {/* <div className="input-buy-wrap"> */}
                            <h1>{currencyFormat(buyAmount, "USD")}</h1>
                            {/* </div> */}
                            <hr className="custom-divider"></hr>
                          </>
                        )}
                        {/* <div className="balance-details">
                        {user &&
                          `Your wallet balance is ${currencyFormat(
                            user?.balance,
                            "USD"
                          )}`}
                      </div> */}
                      </div>

                      <div className="input-buyfee-wrap mt-4">
                        <div className={`input-buy-container`}>
                          <div className="services-fee-box">
                            <label className="input-buy-text">
                              {`Service Fee ${
                                user?.apply_buy_tds &&
                                !isNaN(parseFloat(nft?.tds_rate))
                                  ? "& TDS"
                                  : ""
                              }`.trim()}{" "}
                              <ToolTip
                                icon={
                                  <BsFillQuestionCircleFill
                                    size={16}
                                    className="mb-1 check-icon"
                                  />
                                }
                                content={`The service fee includes gas fee and the platform fee. ${
                                  user?.apply_buy_tds &&
                                  !isNaN(parseFloat(nft?.tds_rate))
                                    ? "TDS u/s 194S Income Tax Act"
                                    : ""
                                }`.trim()}
                                placement="top"
                              />
                            </label>
                            <h4>
                              {`${parseFloat(nft.service_fee)}% ${
                                user?.apply_buy_tds &&
                                !isNaN(parseFloat(nft?.tds_rate))
                                  ? `+ ${parseFloat(nft?.tds_rate)}%`
                                  : ""
                              }`.trim()}
                            </h4>
                          </div>
                        </div>
                        <div className={`input-buy-container`}>
                          <div className="total-amount-box">
                            <label className="input-buy-text">
                              Total Amount
                            </label>
                            <h1>
                              {user?.apply_buy_tds &&
                              !isNaN(parseFloat(nft?.tds_rate))
                                ? currencyFormat(
                                    parseFloat(buyAmount) +
                                      (parseFloat(buyAmount) *
                                        (parseFloat(nft?.service_fee) +
                                          parseFloat(nft?.tds_rate))) /
                                        100,
                                    "USD"
                                  )
                                : currencyFormat(
                                    parseFloat(buyAmount) +
                                      (parseFloat(buyAmount) *
                                        parseFloat(nft?.service_fee)) /
                                        100,
                                    "USD"
                                  )}
                            </h1>
                          </div>
                        </div>
                      </div>
                      <hr className="custom-divider"></hr>
                    </div>
                  </div>
                  <div className="bottom-area">
                    <div className="terms text-secondary">
                      <>
                        An NFT Sale Cannot Be Reversed Or Refunded After
                        Purchase.
                      </>
                    </div>
                    {nft.celebrity_id ===
                      parseInt(process.env.REACT_APP_LATIMES_ID) && (
                      <div className="terms ">
                        <>
                          By proceeding further and clicking the “BUY NFTs”
                          button as your electronic signature, you agree to the
                          LA Times{" "}
                          <a
                            href="https://nft.latimes.com/terms-and-conditions/"
                            target={"_blank"}
                            rel="noreferrer"
                          >
                            Terms and Conditions
                          </a>
                          . The license to display the items associated with the
                          NFTs shall only be used for your personal,
                          non-commercial use.
                        </>
                      </div>
                    )}

                    <div className="bottom-content-pop">
                      <div
                        className="back-button"
                        onClick={() => setPlaceBuyPop(!placeBuyPop)}
                      >
                        Back
                      </div>
                      <div className="place-buy-button">
                        <button
                          disabled={(() => {
                            if (soldOut) {
                              return true;
                            } else if (transferringNFT) {
                              return true;
                            } else if (isOrderCancelled) {
                              return true;
                            } else {
                              return buy.buttonDisable;
                            }
                          })()}
                          className={`btn btn-dark text-center btn-lg w-75 rounded-pill place-buy-btn-pop ${buy.processClass}`} //process -> proccessing
                          onClick={handleBuy}
                        >
                          <span>
                            {(() => {
                              if (erc721) {
                                if (soldOut) {
                                  return "Sold Out";
                                } else if (transferringNFT) {
                                  return (
                                    <>
                                      Token Transfer Initiated{" "}
                                      <ToolTip
                                        icon={
                                          <BsFillQuestionCircleFill
                                            size={16}
                                            className="ms-2 check-icon"
                                          />
                                        }
                                        content={
                                          "The NFT's transfer/transaction is in process on the blockchain. Visit again for latest sale-status."
                                        }
                                        placement="top"
                                      />
                                    </>
                                  );
                                } else if (isOrderCancelled) {
                                  return "Order Cancelled";
                                } else {
                                  return buy.buttonName;
                                }
                              } else {
                                if (soldOut) {
                                  return "Sold Out";
                                } else if (transferringNFT) {
                                  return (
                                    <>
                                      Token Transfer Initiated{" "}
                                      <ToolTip
                                        icon={
                                          <BsFillQuestionCircleFill
                                            size={16}
                                            className="ms-2 check-icon "
                                          />
                                        }
                                        content={
                                          "The NFT's transfer/transaction is in process on the blockchain. Visit again for latest sale-status."
                                        }
                                        placement="top"
                                      />
                                    </>
                                  );
                                } else if (isOrderCancelled) {
                                  return "Order Cancelled";
                                } else if (buyQuantity > 0) {
                                  return buy.buttonName;
                                } else {
                                  return "NFT quantity is required";
                                }
                              }
                            })()}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="pop-body-buy-content success">
                    <div className="sucess-title">
                      <FaCheckCircle color={"#23bf61"} size={60} />
                      <div className="message mt-3">
                        We have initiated the purchase of your NFT. <br /> Once
                        the blockchain transfer is complete, we will notify you,
                        after which you can view them in the 'My NFTs' section
                        of your profile.
                      </div>
                    </div>
                    <div className="pop-nft-buy-media mt-4 preview">
                      {(() => {
                        if (nft?.asset_type?.includes("image")) {
                          return (
                            <img
                              alt="media logo"
                              className="type_image typeimg_audio"
                              src={
                                nft.asset_url ? nft.asset_url : images.sample
                              }
                              loading="lazy"
                            />
                          );
                        } else if (nft?.asset_type?.includes("audio")) {
                          return (
                            <>
                              <img
                                alt="media logo"
                                className="type_image typeimg_audio"
                                src={
                                  nft.cover_url ? nft.cover_url : images.sample
                                }
                                loading="lazy"
                              />
                            </>
                          );
                        } else if (nft?.asset_type?.includes("video")) {
                          return (
                            <img
                              alt="media logo"
                              className="type_image typeimg_audio"
                              src={
                                nft.cover_url ? nft.cover_url : images.sample
                              }
                              loading="lazy"
                            />
                          );
                        } else {
                          return (
                            <img
                              alt="media logo"
                              className="type_image typeimg_audio"
                              src={
                                nft.asset_url ? nft.asset_url : images.sample
                              }
                              loading="lazy"
                            />
                          );
                        }
                      })()}
                    </div>
                    <div className="pop-buy-author-name text-center mt-3">
                      {nft?.category_name}
                    </div>
                    <div className="pop-nft-buy-title text-center mb-1">
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
                          <div>Edition(s)</div>
                          <div className="bold">{successData.quantity}</div>
                        </div>
                      )}
                      <div className="success-summary">
                        <div>{erc721 ? "Buy placed on" : "Time"}</div>
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
                      <div className="place-buy-button">
                        <button
                          className="btn btn-dark text-center btn-lg w-75 rounded-pill place-buy-btn-pop "
                          onClick={handleSuccess}
                        >
                          <span>Okay</span>
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
            <div className="pop-nft-buy-details">
              <div className="pop-head-content">
                <div className="pop-buy-title"></div>
                <div
                  className="close-button-pop"
                  onClick={() => setPlaceBuyPop(!placeBuyPop)}
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
                <div className="pop-nft-buy-media">
                  <button
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-buy-btn"
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

export default NFTPlaceBid;
