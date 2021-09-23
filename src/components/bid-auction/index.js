import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NFTCounter from "../nft-counter";
import "./style.scss";

const BidAuction = () => {
  return (
    <div className="bid-auction">
      <div className="bid-auction-content">
        This <br /> auction <br />
        has not
        <br /> yet begun
      </div>
      <div className="bid-aution-bottom">
        <div>
          <div className="bottom-title">Auction starting in</div>
          <div className="bottom-time">
            <NFTCounter
              time="2021-10-10"
              timeClass="font-onerem"
              intervalClass="font-psevenrem"
              intervalGapClass="me-1"
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-dark rounded-pill border border-white"
          >
            Recharge Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidAuction;
