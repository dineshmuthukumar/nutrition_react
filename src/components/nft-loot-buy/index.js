import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { Offcanvas } from "react-bootstrap";
import { BiX } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";

import ErrorText from "./error-text";
import lootBuy from "../../images/loot/loot_buy.png";
import lootSuccess from "../../images/loot/loot_success.gif";
import {
  bidBuyError,
  currencyFormat,
  validateQuantity,
} from "../../utils/common";
import { lootBuyApi } from "../../api/methods";

import "./style.scss";

const NFTLootBuy = ({
  lootBuyPop = false,
  setLootBuyPop,
  category,
  isAuctionStarted,
  isAuctionEnded,
  soldOut,
}) => {
  const { user } = useSelector((state) => state.user.data);

  const [success, setSuccess] = useState(false);
  const [successData, setSuccessData] = useState({});

  const [noBalance, setNoBalance] = useState(false);

  const [buyAmount, setBuyAmount] = useState(0);
  const [buyQuantity, setBuyQuantity] = useState("");
  const [error, setError] = useState("");

  const [buy, setBuy] = useState({
    amountClass: "",
    progressError: "",
    buttonDisable: true,
    processClass: "",
    buttonName: "Claim Your Loot Box",
    isError: false,
    errorTitle: "",
    errorDescription: "",
  });

  //pop up reset
  useEffect(() => {
    setNoBalance(false);
    setBuyAmount(0);
    setBuyQuantity("");
    setError("");
    setBuy({
      amountClass: "",
      progressError: "",
      buttonDisable: true,
      processClass: "",
      buttonName: "Claim Your Loot Box",
      isError: false,
      errorTitle: "",
      errorDescription: "",
    });
  }, [lootBuyPop, success]);

  useEffect(() => {
    setSuccess(false);
  }, [lootBuyPop]);

  const handleBuy = async () => {
    if (!user)
      window.open(
        `${process.env.REACT_APP_ACCOUNTS_URL}/signin?redirect=${window.location.href}`,
        "_self"
      );

    if (!isAuctionEnded) {
      try {
        setBuy({
          ...buy,
          progressError: "loading",
          processClass: "process",
          buttonName: "In Progress...",
          buttonDisable: true,
        });

        const result = await lootBuyApi({
          slug: category.slug,
          quantity: parseInt(buyQuantity),
        });

        if (result.data.success) {
          setSuccess(true);
          setSuccessData(result.data.data);
          setBuy({
            ...buy,
            progressError: "",
            processClass: "",
            buttonName: "Claim Your Loot Box",
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
    } else {
      const err = bidBuyError(702);
      setBuy({
        ...buy,
        isError: true,
        errorTitle: err.title,
        errorDescription: err.description,
      });
    }
  };

  // const handleSuccess = () => {
  //   setLootBuyPop(!lootBuyPop);
  //   setSuccess(false);
  //   setBuyQuantity("");
  //   setBuyAmount(0);
  //   setBuy({
  //     ...buy,
  //     amountClass: "",
  //     buttonDisable: true,
  //   });
  // };

  const handleBuyInputChange = (e) => {
    // let count = category.category_detail.total_user_buys
    //   ? category.category_detail.buy_count - category.category_detail.total_user_buys
    //   : category.category_detail.buy_count;
    let count = 100;
    if (e.target.value) {
      if (
        validateQuantity(e.target.value) &&
        e.target.value <= count &&
        e.target.value !== 0
      ) {
        let amount =
          e.target.value * parseFloat(category.category_detail.buy_amount);
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
      show={lootBuyPop}
      onHide={() => setLootBuyPop(!lootBuyPop)}
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
                    <div className="pop-bid-title">Buy It Now!</div>
                    <div className="close-button-pop">
                      <BiX
                        role="button"
                        size={45}
                        onClick={() => setLootBuyPop(!lootBuyPop)}
                      />
                    </div>
                  </div>

                  {/* error-progress -> error progress , loading -> progressing */}
                  <div className={`pop-bid-progress ${buy.progressError}`}>
                    <div className="progress-complete"></div>
                  </div>

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

                  <div className="pop-nft-media">
                    <img
                      alt="media logo"
                      className="type_image typeimg_audio"
                      src={lootBuy}
                    />
                  </div>
                  <div className="pop-author-name text-center mt-3">
                    {/* An Assured NFT To Be Yours! */}
                  </div>
                  <div className="pop-nft-title text-center mb-1">
                    An Assured NFT To Be Yours!
                  </div>

                  {/* error-bid -> less value than min bid,  error-balance -> low value, error-balance-float -> low value in quantity  */}
                  <div className={`input-bid-container mt-5 ${error}`}>
                    <label className="input-bid-text">
                      Enter Quantity (Max of 100 at a time)
                    </label>

                    <div className="input-quantity-container">
                      <input
                        type="text"
                        className="input-quantity"
                        value={buyQuantity}
                        placeholder="0 NFTs"
                        disabled={(() => {
                          if (!isAuctionStarted && !isAuctionEnded) {
                            return !isAuctionStarted;
                          } else if (isAuctionEnded) {
                            return isAuctionEnded;
                          } else {
                            return soldOut;
                          }
                        })()}
                        onChange={handleBuyInputChange}
                      />
                      {/* text-dark -> dark text after entering quantity */}
                      <span className={`quantity-to-value ${buy.amountClass}`}>
                        {currencyFormat(buyAmount, "USD")}
                      </span>
                    </div>
                    <div className="balance-details">
                      {/* You can buy maximum of
                      {nft.total_user_buys
                        ? nft.buy_count - nft.total_user_buys
                        : nft.buy_count}
                      of this NFT */}
                    </div>
                  </div>
                  <div className="bottom-area">
                    <div className="terms text-secondary">
                      Once You Have Bought Your Loot Box, The Amount Will Not Be
                      Refunded.
                    </div>

                    <div className="bottom-content-pop">
                      <div
                        className="back-button"
                        onClick={() => setLootBuyPop(!lootBuyPop)}
                      >
                        Back
                      </div>
                      <div className="place-bid-button">
                        <button
                          disabled={buy.buttonDisable}
                          className={`btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop ${buy.processClass}`} //process -> proccessing
                          onClick={handleBuy}
                        >
                          {console.log(
                            "🚀 ~ file: index.js ~ line 362 ~ buy.buttonName",
                            buy.buttonName,
                            buy.processClass
                          )}
                          {(() => {
                            if (!isAuctionStarted && !isAuctionEnded) {
                              return "Auction has not yet begun";
                            } else if (isAuctionEnded) {
                              return "Auction has ended";
                            } else if (soldOut) {
                              return "Sold Out";
                            } else if (buyAmount > 0) {
                              return buy.buttonName;
                            } else {
                              return "NFT amount is required";
                            }
                          })()}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="sucess-title">
                    <FaCheckCircle color={"#23bf61"} size={60} />
                    <div className="message mt-3">
                      Congratulations ! <br />
                      You now own the Amitabh's NFTs!!
                    </div>
                  </div>

                  <div className="pop-nft-media mt-4 preview">
                    <img
                      alt="media logo"
                      className="type_image typeimg_audio"
                      src={lootSuccess}
                    />
                  </div>
                  <div className="pop-author-name text-center mt-3">
                    {/* Check Your NFT Collections to See What You've Won!! */}
                  </div>
                  <div className="pop-nft-title text-center mb-1">
                    Check Your NFT Collections to See <br /> What You've Cart!
                  </div>

                  <div className="success-summary-container mt-3">
                    <div className="success-summary">
                      <div>Price of the Loot</div>
                      <div className="bold">
                        {currencyFormat(
                          category.category_detail.buy_amount,
                          "USD"
                        )}{" "}
                        X {successData.quantity}
                      </div>
                    </div>
                    <div className="success-summary">
                      <div>Bought On</div>
                      <div className="bold">
                        {dayjs(successData.time).format("MMM D, YYYY hh:mm A")}
                      </div>
                    </div>

                    {/* <div className="success-summary">
                      <div>Transaction ID</div>
                      <div className="bold">{successData.transaction_id}</div>
                    </div> */}
                  </div>

                  <div className="bottom-area">
                    <div className="bottom-content-pop">
                      <div className="place-bid-button">
                        <button
                          className="btn btn-outline-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop "
                          onClick={() => setSuccess(false)}
                        >
                          Buy More
                        </button>
                        <button
                          className="btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop "
                          onClick={() =>
                            window.open(
                              `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/mynft#web`,
                              "_blank"
                            )
                          }
                        >
                          Access your NFTs
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
                  {/* {erc721 ? "Sign in to place a bid" : "Sign in to place a buy"} */}
                </div>
                <div className="close-button-pop">
                  <BiX
                    role="button"
                    size={45}
                    onClick={() => setLootBuyPop(!lootBuyPop)}
                  />
                </div>
              </div>
              <div className="pop-signin">
                <div className="pop-signin-title text-center mb-1">
                  Sign in to purchase
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

export default NFTLootBuy;
