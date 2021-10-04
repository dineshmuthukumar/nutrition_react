import React from "react";
import { useHistory } from "react-router";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { currencyFormat } from "../../utils/common";
import "./style.scss";

const SubHeader = ({ nft }) => {
  const history = useHistory();
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
              <button
                type="button"
                className="btn btn-dark btn-lg rounded-pill sub-place-bid-btn"
                onClick={() =>
                  history.push(`${history.location.pathname}/placebid`)
                }
              >
                {erc721 ? "Place a Bid" : "Buy"}
              </button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default SubHeader;
