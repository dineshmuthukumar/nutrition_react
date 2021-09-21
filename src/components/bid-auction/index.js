import React from "react";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import NFTCounter from "../nft-counter";
import "./style.scss";

const BidAuction = () => {
  return (
    <div className="bid-auction">
      <span className="bid-auction-content mt-3">
        This auction has not yet begun
      </span>
      <Container>
        <Row>
          <Col>
            <div className="bid-auction-time text-start">
              <div className="mb-title auction-start">Auction Starting In</div>
              <div className="mb-value text-start auction-time">
                <NFTCounter
                  time="2021-10-10"
                  timeClass="font-onerem"
                  intervalClass="font-psevenrem"
                  intervalGapClass="me-1"
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className="recharge-button text-end">
              <span className="recharge-wallet">Recharge Wallet</span>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="line"></div>
    </div>
  );
};

export default BidAuction;
