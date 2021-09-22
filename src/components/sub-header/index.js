import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./style.scss";

const SubHeader = () => {
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
              <div className="sub-nft-title">Signed Poster #001</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className="justify-content-end align-items-center">
            <Navbar.Text>
              <div className="text-end sub-head-right">
                <div className="bid-title">Current Bid</div>
                <div className="bid-value">$2356.98</div>
              </div>
            </Navbar.Text>
            <Navbar.Text>
              <button
                type="button"
                className="btn btn-dark btn-lg rounded-pill sub-place-bid-btn"
              >
                Place a Bid
              </button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default SubHeader;
