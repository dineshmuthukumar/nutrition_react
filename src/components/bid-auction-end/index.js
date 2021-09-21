import React from "react";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import "./style.scss";

const BidAuctionEnd = ({ count }) => {
  return (
    <div className="bid-auction">
      <span className="bid-auction-content mt-3">
        This auction has ended
      </span>
      <Container>
        <Row>
          <Col>
            <div className="bid-auction-time text-start">
              <div className="mb-title auction-end">Limited Edition</div>
              <div className="mb-value text-start" style={{color: "#fff", fontSize: "1.5rem"}}>
                {count}
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

export default BidAuctionEnd;
