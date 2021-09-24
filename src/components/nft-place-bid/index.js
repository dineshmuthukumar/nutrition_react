import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Offcanvas } from "react-bootstrap";
import "./style.scss";

const NFTPlaceBid = ({ show = false }) => {
  const { user } = useSelector((state) => state.user.data);
  const history = useHistory();

  return (
    <Offcanvas
      show={show}
      onHide={() =>
        history.push(history.location.pathname.replace("/placebid", ""))
      }
      placement="end"
      className="w-100 w-md-50 w-lg-40"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="pop-bid-title">Place a Bid</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0">
        <div className="pop-nft-details">
          <img src="https://picsum.photos/500/500" className="mt-3" />
          <div className="least-bid text-center text-secondary mt-4 mb-1">
            You must bid at least or more than
          </div>
          <div className="least-bid-value text-center">$ 3.155</div>
          <div className="input-bid-container mt-3">
            <input className="input-bid" placeholder="$ O" />
          </div>
          <div className="balance-details mt-3">
            <div className="balance-text text-secondary">Your Balance</div>
            <div className="balance-value">
              {user.currency_symbol} {user.balance}
            </div>
          </div>
          <div className="bottom-area">
            <div className="time-details">
              <div className="time-title">Auction ending in</div>
              <div className="time-counter">00d 12h 23m 22s</div>
            </div>
            <div className="place-bid-button">
              <button
                className="btn btn-dark text-center btn-lg w-50 rounded-pill"
                onClick={() =>
                  window.open(
                    `${process.env.REACT_APP_BASE_URL}/signin?redirect=${window.location.href}`,
                    "_self"
                  )
                }
              >
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default NFTPlaceBid;
