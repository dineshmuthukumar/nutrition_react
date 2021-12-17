import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { Offcanvas } from "react-bootstrap";
import ToggleButton from "react-toggle-button";
import { BiCheck, BiX } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import _ from "lodash";
import { toast } from "react-toastify";

import ErrorText from "./error-text";
import sample from "../../images/sampleNFT.jpg";
import {
  bidBuyError,
  currencyFormat,
  validateCurrency,
  validateQuantity,
} from "../../utils/common";
import { nftBidApi, nftBuyApi, putOnSaleApi } from "../../api/methods";
import HelpLine from "../help-line";
import "./style.scss";

const NFTPutOnSale = ({
  putOnSalePop = false,
  setPutOnSalePop,
  nft,
  // socketData,
  price,
  userTotalBuys,
  isAuctionStarted,
  isAuctionEnded,
  soldOut,
}) => {
  const { user } = useSelector((state) => state.user.data);
  const { params } = useRouteMatch();

  const [success, setSuccess] = useState(false);
  const [successData, setSuccessData] = useState({});

  const erc721 = nft.nft_type === "erc721";
  const [noBalance, setNoBalance] = useState(false);

  const [error, setError] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [erc721Sale, setErc721Sale] = useState({
    isBid: false,
    isBuy: true,
    bidAmount: "",
    buyAmount: "",
    buyQuantity: 1,
    totalAmount: 0,
  });

  const [erc1155Sale, setErc1155Sale] = useState({
    isBuy: true,
    buyAmount: "",
    buyQuantity: "",
    totalAmount: 0,
  });

  const [confirmState, setConfirmState] = useState({
    progressError: "",
    buttonDisable: false,
    processClass: "",
    buttonName: "Confirm",
  });

  const handleErc721BidAmountChange = (e) => {
    if (e.target.value) {
      if (validateCurrency(e.target.value)) {
        setErc721Sale({ ...erc721Sale, bidAmount: e.target.value });
      }
    } else {
      setErc721Sale({ ...erc721Sale, bidAmount: e.target.value });
    }
  };

  const handleErc721BuyAmountChange = (e) => {
    if (e.target.value) {
      if (validateCurrency(e.target.value)) {
        setErc721Sale({ ...erc721Sale, buyAmount: e.target.value });
      }
    } else {
      setErc721Sale({ ...erc721Sale, buyAmount: e.target.value });
    }
  };

  const handleErc1155BuyAmountChange = (e) => {
    if (e.target.value) {
      if (validateCurrency(e.target.value)) {
        setErc1155Sale({
          ...erc1155Sale,
          buyAmount: e.target.value,
          totalAmount: e.target.value * erc1155Sale.buyQuantity,
        });
      }
    } else {
      setErc1155Sale({
        ...erc1155Sale,
        buyAmount: e.target.value,
        totalAmount: 0,
      });
    }
  };

  const handleErc1155QuantityInputChange = (e) => {
    if (e.target.value) {
      if (
        validateQuantity(e.target.value) &&
        e.target.value <= nft.owner_details.available_quantity &&
        e.target.value !== 0
      ) {
        setErc1155Sale({
          ...erc1155Sale,
          buyQuantity: e.target.value,
          totalAmount: erc1155Sale.buyAmount * e.target.value,
        });
      }
    } else {
      setErc1155Sale({
        ...erc1155Sale,
        buyQuantity: e.target.value,
        totalAmount: 0,
      });
    }
  };

  const handlePutOnSale = async () => {
    try {
      let order = {};
      setConfirmState({
        ...confirmState,
        progressError: "loading",
        processClass: "process",
        buttonName: "Processing...",
        buttonDisable: true,
      });
      if (erc721) {
        order = {
          is_buy: erc721Sale.isBuy,
          is_bid: erc721Sale.isBid,
          minimum_bid: erc721Sale.bidAmount,
          buy_amount: erc721Sale.buyAmount,
          total_quantity: erc721Sale.buyQuantity,
        };
      } else {
        order = {
          is_buy: true,
          buy_amount: erc1155Sale.buyAmount,
          total_quantity: erc1155Sale.buyQuantity,
          is_bid: false,
          minimum_bid: null,
        };
      }
      const result = await putOnSaleApi({
        slug: nft.slug,
        order: order,
      });
      if (result.data.success) {
        setSuccess(true);
        setConfirmState({
          ...confirmState,
          progressError: "",
          processClass: "",
          buttonName: "Confirm",
          buttonDisable: false,
        });
        // setSuccessData(result.data.data.buy);
      }
    } catch (error) {
      toast.error("Something went wrong!");
      setConfirmState({
        ...confirmState,
        progressError: "",
        processClass: "",
        buttonName: "Confirm",
        buttonDisable: false,
      });
      console.log(error.response);
    }
  };

  return (
    <Offcanvas
      show={putOnSalePop}
      onHide={() => setPutOnSalePop(!putOnSalePop)}
      placement="end"
      className="w-100 w-md-50 w-lg-42"
    >
      <Offcanvas.Body className="p-0 pop-body-container">
        {user ? (
          <>
            <div className="pop-nft-details">
              {(() => {
                if (!success && !confirm) {
                  return (
                    <>
                      <div className="pop-head-content">
                        <div className="pop-bid-title">Put on sale</div>
                        <div
                          className="close-button-pop"
                          onClick={() => setPutOnSalePop(!putOnSalePop)}
                        >
                          {/* <BiX
                        role="button"
                        size={45}
                        onClick={() => setPutOnSalePop(!putOnSalePop)}
                      /> */}
                          <img
                            alt="place bid logo"
                            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e"
                          ></img>
                        </div>
                      </div>

                      {/* error-progress -> error progress , loading -> progressing */}
                      <div
                        className={`pop-bid-progress ${confirmState.progressError} ${confirmState.progressError}`}
                      >
                        <div className="progress-complete"></div>
                      </div>
                      <div className="pop-bid-bodyContent">
                        <div className="error-float-container">
                          {/* <ErrorText type="ending-time" /> */}
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
                                      src={
                                        nft.cover_url ? nft.cover_url : sample
                                      }
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
                              <div className="erc-type">
                                1 of 1 <span>left</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {erc721 && (
                          <div className="toggle-btn-buybid">
                            <div className="btn-buy">
                              <label className="toggle-private-title w-100">
                                Buy
                              </label>
                              <div>
                                <ToggleButton
                                  inactiveLabel={<BiX size={20} />}
                                  activeLabel={<BiCheck size={20} />}
                                  colors={{
                                    activeThumb: {
                                      base: "rgb(0,0,0)",
                                    },
                                    inactiveThumb: {
                                      base: "rgb(0,0,0)",
                                    },
                                    active: {
                                      base: "rgb(146, 147, 148)",
                                      hover: "rgb(177, 191, 215)",
                                    },
                                    inactive: {
                                      base: "rgb(146, 147, 148)",
                                      hover: "rgb(177, 191, 215)",
                                    },
                                  }}
                                  value={erc721Sale.isBuy}
                                  onToggle={(value) => {
                                    setErc721Sale({
                                      ...erc721Sale,
                                      isBuy: !value,
                                      buyAmount: "",
                                    });
                                  }}
                                />
                              </div>
                            </div>
                            <div className="btn-bid">
                              <label className="toggle-private-title w-100">
                                Bid
                              </label>
                              <div>
                                <ToggleButton
                                  inactiveLabel={<BiX size={20} />}
                                  activeLabel={<BiCheck size={20} />}
                                  colors={{
                                    activeThumb: {
                                      base: "rgb(0,0,0)",
                                    },
                                    inactiveThumb: {
                                      base: "rgb(0,0,0)",
                                    },
                                    active: {
                                      base: "rgb(146, 147, 148)",
                                      hover: "rgb(177, 191, 215)",
                                    },
                                    inactive: {
                                      base: "rgb(146, 147, 148)",
                                      hover: "rgb(177, 191, 215)",
                                    },
                                  }}
                                  value={erc721Sale.isBid}
                                  onToggle={(value) => {
                                    setErc721Sale({
                                      ...erc721Sale,
                                      isBid: !value,
                                      bidAmount: "",
                                    });
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* error-bid -> less value than min bid,  error-balance -> low value, error-balance-float -> low value in quantity  */}
                        <div className={`input-bid-container mt-5 ${error}`}>
                          {!erc721 ? (
                            <>
                              <div className={`input-field-bid`}>
                                <label className="input-bid-text">
                                  Set buy amount per edition
                                </label>
                                <div className="input-bid-wrap">
                                  <span className="bid-currency">$</span>
                                  <input
                                    type="text"
                                    className="input-bid"
                                    value={erc1155Sale.buyAmount}
                                    placeholder="0"
                                    onChange={handleErc1155BuyAmountChange}
                                  />
                                </div>
                              </div>
                              <div className="input-field-bid">
                                <label className="input-bid-text">
                                  Set the Edition
                                </label>
                                <div className="input-quantity-container bid-input">
                                  <input
                                    type="text"
                                    className="input-quantity"
                                    value={erc1155Sale.buyQuantity}
                                    placeholder="0 NFTs"
                                    onChange={handleErc1155QuantityInputChange}
                                  />
                                  <span className="bid-currency">
                                    /
                                    {_.get(
                                      nft,
                                      "owner_details.available_quantity"
                                    )}
                                  </span>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div
                                className={`input-field-bid ${
                                  !erc721Sale.isBuy ? "disabled" : ""
                                }`}
                              >
                                <label className="input-bid-text">
                                  Set buy amount
                                </label>
                                <div className="input-bid-wrap">
                                  <span className="bid-currency">$</span>
                                  <input
                                    type="text"
                                    className="input-bid"
                                    value={erc721Sale.buyAmount}
                                    placeholder="0"
                                    disabled={!erc721Sale.isBuy}
                                    onChange={handleErc721BuyAmountChange}
                                  />
                                </div>
                              </div>
                              <div
                                className={`input-field-bid ${
                                  !erc721Sale.isBid ? "disabled" : ""
                                }`}
                              >
                                <label className="input-bid-text">
                                  Set initial bid amount
                                </label>
                                <div className="input-bid-wrap">
                                  <span className="bid-currency">$</span>
                                  <input
                                    type="text"
                                    className="input-bid"
                                    value={erc721Sale.bidAmount}
                                    placeholder="0"
                                    disabled={!erc721Sale.isBid}
                                    onChange={handleErc721BidAmountChange}
                                  />
                                </div>
                                <span className={`quantity-to-value`}>
                                  Bid expires in 7days, If not acknowledged
                                </span>
                              </div>
                            </>
                          )}
                        </div>

                        {erc721 ? (
                          <div className="you-own-block">
                            <span className="you-own-title">You Own</span>
                            <div className="you-own">
                              <h3>
                                1 of 1 <span>left</span>
                              </h3>
                              <h3>Edition</h3>
                            </div>
                          </div>
                        ) : (
                          <div className="you-own-block">
                            <span className="you-own-title">Total Amount</span>
                            <div className="you-own">
                              <h3>$ {erc1155Sale.totalAmount}</h3>
                              <h3>{erc1155Sale.buyQuantity} Edition</h3>
                            </div>
                          </div>
                        )}

                        <div className="px-3">
                          <HelpLine />
                        </div>
                      </div>

                      <div className="bottom-area">
                        <div className="terms text-secondary">
                          Royalty will be deducted {nft.royalties}% of every
                          transaction
                        </div>

                        <div className="bottom-content-pop">
                          <div
                            className="back-button"
                            onClick={() => setPutOnSalePop(!putOnSalePop)}
                          >
                            Back
                          </div>
                          <div className="place-bid-button">
                            {erc721 ? (
                              <button
                                disabled={(() => {
                                  if (
                                    erc721Sale.isBuy &&
                                    !erc721Sale.buyAmount > 0
                                  ) {
                                    return true;
                                  } else if (
                                    erc721Sale.isBid &&
                                    !erc721Sale.bidAmount > 0
                                  ) {
                                    return true;
                                  } else {
                                    return false;
                                  }
                                })()}
                                className={`btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop ${confirmState.processClass}`} //process -> proccessing
                                onClick={() => setConfirm(true)}
                              >
                                {(() => {
                                  if (
                                    erc721Sale.isBuy &&
                                    !erc721Sale.buyAmount > 0
                                  ) {
                                    return "Buy amount is required";
                                  } else if (
                                    erc721Sale.isBid &&
                                    !erc721Sale.bidAmount > 0
                                  ) {
                                    return "Bid amount is required";
                                  } else {
                                    return "Put on sale";
                                  }
                                })()}
                              </button>
                            ) : (
                              <button
                                disabled={(() => {
                                  if (
                                    !erc1155Sale.buyAmount > 0 ||
                                    !erc1155Sale.buyQuantity > 0
                                  ) {
                                    return true;
                                  } else {
                                    return false;
                                  }
                                })()}
                                className={`btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop ${confirmState.processClass}`} //process -> proccessing
                                onClick={() => setConfirm(true)}
                              >
                                {(() => {
                                  if (!erc1155Sale.buyAmount > 0) {
                                    return "Buy amount is required";
                                  } else if (!erc1155Sale.buyQuantity > 0) {
                                    return "Quantity is required";
                                  } else {
                                    return "Put on sale";
                                  }
                                })()}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                } else if (confirm) {
                  if (erc721) {
                    return (
                      <>
                        <div className="pop-head-content">
                          <div className="pop-bid-title">Confirm the sale</div>
                          <div
                            className="close-button-pop"
                            onClick={() => setPutOnSalePop(!putOnSalePop)}
                          >
                            <img
                              alt="place bid logo"
                              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e"
                            ></img>
                          </div>
                        </div>

                        {/* error-progress -> error progress , loading -> progressing */}
                        <div
                          className={`pop-bid-progress ${confirmState.progressError}`}
                        >
                          <div className="progress-complete"></div>
                        </div>

                        <div className="error-float-container">
                          {/* <ErrorText type="ending-time" /> */}
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
                                      src={
                                        nft.cover_url ? nft.cover_url : sample
                                      }
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
                            <div className="erc-type">
                              1 of 1 <span>left</span>
                            </div>
                          </div>
                        </div>

                        <div className="confirm-content-block">
                          <ul className="confirm-content-list">
                            <li>
                              <span className="key">Selected Editions</span>
                              <span className="value">1/1</span>
                            </li>
                            <li>
                              <span className="key">Type</span>
                              <span className="value">
                                {(() => {
                                  if (erc721Sale.isBid && !erc721Sale.isBuy) {
                                    return "Bid";
                                  } else if (
                                    erc721Sale.isBuy &&
                                    !erc721Sale.isBid
                                  ) {
                                    return "Buy";
                                  } else if (
                                    erc721Sale.isBid &&
                                    erc721Sale.isBuy
                                  ) {
                                    return "Bid & Buy";
                                  } else {
                                    return "-";
                                  }
                                })()}
                              </span>
                            </li>
                            {erc721Sale.isBuy && (
                              <li>
                                <span className="key">Bid amount</span>
                                <span className="value">
                                  {currencyFormat(erc721Sale.bidAmount, "USD")}
                                </span>
                              </li>
                            )}
                            {erc721Sale.isBuy && (
                              <li>
                                <span className="key">Buy amount</span>
                                <span className="value">
                                  {currencyFormat(erc721Sale.buyAmount, "USD")}
                                </span>
                              </li>
                            )}
                            <li>
                              <span className="key">Artist Fee</span>
                              <span className="value">10%</span>
                            </li>
                            <li>
                              <span className="key">Service Fee</span>
                              <span className="value">10%</span>
                            </li>
                            <li className="final-set">
                              <span className="key">Total Amount </span>
                              <span className="value">
                                {currencyFormat(erc721Sale.buyAmount, "USD")}
                              </span>
                            </li>
                          </ul>
                          <div className="confirm-content-msg">
                            Are you sure want to Continue ?
                          </div>
                        </div>

                        <div className="bottom-area">
                          <div className="bottom-content-pop">
                            <div
                              className="back-button"
                              onClick={() => setConfirm(!confirm)}
                            >
                              Back
                            </div>
                            <div className="place-bid-button">
                              <button
                                disabled={confirmState.buttonDisable}
                                className={`btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop ${confirmState.processClass}`} //process -> proccessing
                                onClick={handlePutOnSale}
                              >
                                {confirmState.buttonName}
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <div className="pop-head-content">
                          <div className="pop-bid-title">Confirm the sale</div>
                          <div
                            className="close-button-pop"
                            onClick={() => setPutOnSalePop(!putOnSalePop)}
                          >
                            <img
                              alt="place bid logo"
                              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e"
                            ></img>
                          </div>
                        </div>

                        {/* error-progress -> error progress , loading -> progressing */}
                        <div
                          className={`pop-bid-progress ${confirmState.progressError}`}
                        >
                          <div className="progress-complete"></div>
                        </div>

                        <div className="error-float-container">
                          {/* <ErrorText type="ending-time" /> */}
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
                                      src={
                                        nft.cover_url ? nft.cover_url : sample
                                      }
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
                            {/* <div className="erc-type">
                              1 of 1 <span>left</span>
                            </div> */}
                          </div>
                        </div>

                        <div className="confirm-content-block">
                          <ul className="confirm-content-list">
                            <li>
                              <span className="key">Selected Editions</span>
                              <span className="value">{`${
                                erc1155Sale.buyQuantity
                              } / ${_.get(
                                nft,
                                "owner_details.total_quantity",
                                0
                              )}`}</span>
                            </li>
                            <li>
                              <span className="key">Buy amount</span>
                              <span className="value">
                                {currencyFormat(erc1155Sale.totalAmount, "USD")}
                              </span>
                            </li>
                            <li>
                              <span className="key">Artist Fee</span>
                              <span className="value">{nft.royalties}%</span>
                            </li>
                            <li>
                              <span className="key">Service Fee</span>
                              <span className="value">10%</span>
                            </li>
                            <li className="final-set">
                              <span className="key">Total Amount </span>
                              <span className="value">
                                {currencyFormat(erc1155Sale.totalAmount, "USD")}
                              </span>
                            </li>
                          </ul>
                          <div className="confirm-content-msg">
                            Are you sure want to Continue ?
                          </div>
                        </div>

                        <div className="bottom-area">
                          <div className="bottom-content-pop">
                            <div
                              className="back-button"
                              onClick={() => setConfirm(!confirm)}
                            >
                              Back
                            </div>
                            <div className="place-bid-button">
                              <button
                                disabled={confirmState.buttonDisable}
                                className={`btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop ${confirmState.processClass}`} //process -> proccessing
                                onClick={handlePutOnSale}
                              >
                                {confirmState.buttonName}
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  }
                } else {
                  return (
                    <>
                      <div className="sucess-title">
                        <FaCheckCircle color={"#23bf61"} size={60} />
                        <div className="message mt-3">
                          Your NFT sale has been successfully placed.
                        </div>
                      </div>

                      <div className="bottom-area">
                        <div className="bottom-content-pop">
                          <div className="place-bid-button">
                            <button className="btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop ">
                              Okay
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }
              })()}
            </div>
          </>
        ) : (
          <>
            <div className="pop-nft-details">
              <div className="pop-head-content">
                <div className="pop-bid-title">
                  {/* {erc721 ? "Sign in to place a bid" : "Sign in to place a buy"} */}
                </div>
                <div
                  className="close-button-pop"
                  onClick={() => setPutOnSalePop(!putOnSalePop)}
                >
                  {/* <BiX
                    role="button"
                    size={45}
                    onClick={() => setPutOnSalePop(!putOnSalePop)}
                  /> */}
                  <img
                    alt="bid logo"
                    src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e"
                  ></img>
                </div>
              </div>
              <div className="pop-signin">
                <div className="pop-signin-title text-center mb-1">
                  {erc721 ? "Sign in to place a bid" : "Sign in to place a buy"}
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

export default NFTPutOnSale;
