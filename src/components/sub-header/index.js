import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { currencyFormat } from "../../utils/common";
import sample from "../../images/sampleNFT.jpg";
import "./style.scss";

const SubHeader = ({
  nft,
  isAuctionStarted,
  isAuctionEnded,
  soldOut,
  placeBidPop,
  setPlaceBidPop,
}) => {
  const history = useHistory();
  const { user } = useSelector((state) => state.user.data);
  const erc721 = nft.nft_type === "erc721";

  return (
    <>
      <Navbar
        bg="white"
        expand
        sticky="top"
        className="border-bottom sub-header-nft"
      >
        <Container fluid>
          <Navbar.Brand role="button" className="sub-head-title">
            <img src={nft.image_url ? nft.image_url : sample} />
            <div className="nft-head-details">
              <div className="sub-nft-title">{nft?.name}</div>
              <div className="sub-creator-title ">
                {erc721 ? "Current Bid " : "NFTs Price "}
                {erc721
                  ? currencyFormat(nft.minimum_bid, "USD")
                  : currencyFormat(nft.buy_amount, "USD")}
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className="justify-content-end align-items-center">
            {/* <Navbar.Text>
              <div className="text-end sub-head-right">
                <div className="bid-title">
                  {erc721 ? "Current Bid" : "NFTs Price"}
                </div>
                <div className="bid-value">
                  {erc721
                    ? currencyFormat(nft.minimum_bid, "USD")
                    : currencyFormat(nft.buy_amount, "USD")}
                </div>
              </div>
            </Navbar.Text> */}
            <Navbar.Text>
              {(() => {
                if (parseFloat(user?.balance) <= 0) {
                  return (
                    <button
                      disabled={isAuctionEnded}
                      type="button"
                      className={`btn  ${
                        isAuctionEnded
                          ? "btn-dark sub-place-bid-btn"
                          : "btn-danger text-white recharge-btn"
                      } btn-lg rounded-pill`}
                      onClick={() =>
                        window.open(
                          `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/wallet`,
                          "_self"
                        )
                      }
                    >
                      {isAuctionEnded ? "Auction has ended" : "Recharge Wallet"}
                    </button>
                  );
                } else if (!user) {
                  return (
                    <button
                      disabled={isAuctionEnded}
                      type="button"
                      className="btn btn-dark btn-lg rounded-pill sub-place-bid-btn"
                      onClick={() =>
                        window.open(
                          `${process.env.REACT_APP_ACCOUNTS_URL}/signin?redirect=${window.location.href}`,
                          "_self"
                        )
                      }
                    >
                      {isAuctionEnded ? "Auction has ended" : "Sign In"}
                    </button>
                  );
                } else if (erc721) {
                  return (
                    <button
                      disabled={(() => {
                        if (!isAuctionStarted && !isAuctionEnded) {
                          return !isAuctionStarted;
                        } else {
                          return isAuctionEnded;
                        }
                      })()}
                      type="button"
                      className="btn btn-dark btn-lg rounded-pill sub-place-bid-btn"
                      onClick={() => setPlaceBidPop(!placeBidPop)}
                    >
                      {(() => {
                        if (!isAuctionStarted && !isAuctionEnded) {
                          return "Auction has not yet begun";
                        } else if (isAuctionEnded) {
                          return "Auction has ended";
                        } else {
                          return "Place a Bid";
                        }
                      })()}
                    </button>
                  );
                } else {
                  return (
                    <button
                      disabled={(() => {
                        if (!isAuctionStarted && !isAuctionEnded) {
                          return !isAuctionStarted;
                        } else if (isAuctionEnded) {
                          return isAuctionEnded;
                        } else {
                          return soldOut;
                        }
                      })()}
                      type="button"
                      className="btn btn-dark btn-lg rounded-pill sub-place-bid-btn"
                      onClick={() => setPlaceBidPop(!placeBidPop)}
                    >
                      {(() => {
                        if (!isAuctionStarted && !isAuctionEnded) {
                          return "Auction has not yet begun";
                        } else if (isAuctionEnded) {
                          return "Auction has ended";
                        } else if (soldOut) {
                          return "Sold Out";
                        } else {
                          return "Buy";
                        }
                      })()}
                    </button>
                  );
                }
              })()}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default SubHeader;
