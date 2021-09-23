import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NFTCounter from "../nft-counter";
import "./style.scss";

const BidAuction = ({ status, bottomTitle, bottomValue }) => {
  return (
    <div className="bid-auction">
      <div className="bid-auction-content">
        {status === "start" ? (
          <>
            This <br /> auction <br />
            has not
            <br /> yet begun
          </>
        ) : (
          <>
            This <br /> auction <br />
            has ended
          </>
        )}
      </div>
      <div className="bid-aution-bottom">
        <div>
          <div className="bottom-title">{bottomTitle}</div>
          <div className="bottom-time">
            {status === "start" ? (
              <NFTCounter
                time="2021-10-10"
                timeClass="font-onerem"
                intervalClass="font-psevenrem"
                intervalGapClass="me-1"
              />
            ) : (
              <div className="ended-count-value">{bottomValue}</div>
            )}
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-dark rounded-pill border border-white bottom-recharge-btn"
          >
            Recharge Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidAuction;
