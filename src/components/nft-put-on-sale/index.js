import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { Offcanvas } from "react-bootstrap";
import ToggleButton from "react-toggle-button";
import { BiCheck, BiX } from "react-icons/bi";
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

  const [buyAmount, setBuyAmount] = useState(0);
  const [buyQuantity, setBuyQuantity] = useState("");
  const [bidAmount, setBidAmount] = useState("");
  const [error, setError] = useState("");

  const [sale, setSale] = useState({
    isBid: false,
    isBuy: false,
    bidAmount: "",
    buyAmount: "",
  });

  const [buy, setBuy] = useState({
    amountClass: "",
    progressError: "",
    buttonDisable: true,
    processClass: "",
    buttonName: "Buy NFTs",
    isError: false,
    errorTitle: "",
    errorDescription: "",
  });

  const [bid, setBid] = useState({
    bidError: "",
    progressError: "",
    buttonDisable: true,
    processClass: "",
    buttonName: "Place Bid",
    isError: false,
    errorTitle: "",
    errorDescription: "",
  });

  const handleBidInputChange = (e) => {
    if (e.target.value) {
      if (validateCurrency(e.target.value)) {
        setSale({ ...sale, bidAmount: e.target.value });
      }
    } else {
      setSale({ ...sale, bidAmount: e.target.value });
    }
  };

  const handleBuyInputChange = (e) => {
    if (e.target.value) {
      if (validateCurrency(e.target.value)) {
        setSale({ ...sale, buyAmount: e.target.value });
      }
    } else {
      setSale({ ...sale, buyAmount: e.target.value });
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
              {!success ? (
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
                    className={`pop-bid-progress ${bid.progressError} ${buy.progressError}`}
                  >
                    <div className="progress-complete"></div>
                  </div>

                  <div className="error-float-container">
                    {/* <ErrorText type="ending-time" /> */}
                  </div>

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
                      }
                    })()}
                  </div>
                  <div className="pop-author-name text-center mt-3">
                    Amitabh Bachchan
                  </div>
                  <div className="pop-nft-title text-center mb-1">
                    {nft?.name}
                  </div>

                  <div className="col-12 col-md-6 mb-3 d-flex">
                    <label className="toggle-private-title w-100">Buy</label>
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
                        value={sale.isBuy}
                        onToggle={(value) => {
                          setSale({ ...sale, isBuy: !value, buyAmount: "" });
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mb-3 d-flex">
                    <label className="toggle-private-title w-100">Bid</label>
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
                        value={sale.isBid}
                        onToggle={(value) => {
                          setSale({ ...sale, isBid: !value, bidAmount: "" });
                        }}
                      />
                    </div>
                  </div>
                  {/* error-bid -> less value than min bid,  error-balance -> low value, error-balance-float -> low value in quantity  */}
                  <div className={`input-bid-container mt-5 ${error}`}>
                    {!erc721 ? (
                      <>
                        <label className="input-bid-text">Set buy amount</label>
                        <div className="input-quantity-container">
                          <input
                            type="text"
                            className="input-quantity"
                            value={buyQuantity}
                            placeholder="0 NFTs"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <label className="input-bid-text">Set buy amount</label>
                        <div className="input-bid-wrap">
                          <span className="bid-currency">$</span>
                          <input
                            type="text"
                            className="input-bid"
                            value={sale.buyAmount}
                            placeholder="0"
                            disabled={!sale.isBuy}
                            onChange={handleBuyInputChange}
                          />
                        </div>
                        <label className="input-bid-text">
                          Set initial bid amount
                        </label>
                        <div className="input-bid-wrap">
                          <span className="bid-currency">$</span>
                          <input
                            type="text"
                            className="input-bid"
                            value={sale.bidAmount}
                            placeholder="0"
                            disabled={!sale.isBid}
                            onChange={handleBidInputChange}
                          />
                        </div>
                        <span className={`quantity-to-value text-dark`}>
                          Bid expires in 7days, If not acknowledged
                        </span>
                      </>
                    )}
                  </div>
                  <div className="bottom-area">
                    <div className="terms text-secondary">
                      Royalty will be deducted 10% of every transaction
                    </div>

                    <div className="bottom-content-pop">
                      <div
                        className="back-button"
                        onClick={() => setPutOnSalePop(!putOnSalePop)}
                      >
                        Back
                      </div>
                      <div className="place-bid-button">
                        <button
                          disabled={false}
                          className={`btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop ${bid.processClass}`} //process -> proccessing
                        >
                          Put on sale
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
