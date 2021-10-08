import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { currencyFormat } from "../../utils/common";
import "./style.scss";

const SubHeader = ({ nft }) => {
  const history = useHistory();
  const { user } = useSelector((state) => state.user.data);
  const erc721 = nft.nft_type === "erc721";
  const isAuctionEnded =
    new Date().getTime() > new Date(nft.auction_end_time).getTime();

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
            <img src="https://picsum.photos/100/100" />
            <div className="nft-head-details">
              <div className="sub-creator-title">Amitabh Bachchan</div>
              <div className="sub-nft-title">{nft?.name}</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className="justify-content-end align-items-center">
            <Navbar.Text>
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
            </Navbar.Text>
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
                          `${process.env.REACT_APP_BASE_URL}/accounts#wallet`,
                          "_self"
                        )
                      }
                    >
                      {isAuctionEnded ? "Auction has ended" : "Recharge Wallet"}
                    </button>
                  );
                } else if (erc721) {
                  return (
                    <button
                      disabled={isAuctionEnded}
                      type="button"
                      className="btn btn-dark btn-lg rounded-pill sub-place-bid-btn"
                      onClick={() =>
                        history.push(`${history.location.pathname}/placebid`)
                      }
                    >
                      {isAuctionEnded ? "Auction has ended" : "Place a Bid"}
                    </button>
                  );
                } else {
                  return (
                    <button
                      disabled={isAuctionEnded}
                      type="button"
                      className="btn btn-dark btn-lg rounded-pill sub-place-bid-btn"
                      onClick={() =>
                        history.push(`${history.location.pathname}/placebid`)
                      }
                    >
                      {isAuctionEnded ? "Auction has ended" : "Buy"}
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
