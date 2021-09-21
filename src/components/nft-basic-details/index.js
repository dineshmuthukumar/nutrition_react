import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import NFTTimeLeft from "../nft-time-left";
import BidValue from "../bid-value";
import NFTPlaceBid from "./../nft-place-bid";
import { ReactComponent as YourSvg } from "./../../icons/discord_logo.svg";
import "./style.scss";

const NFTBaseDetails = () => {
  const [show, setShow] = useState(false);

  const handleShowBid = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="creator mt-3">
        Amitabh Bachchan
        <FaCheckCircle size={16} className="ms-2 check-icon" />
      </div>
      <div className="nft-title-container">
        <div className="nft-title">Signed Poster #001</div>
        <div className="discord">
          <div className="count">22</div>
          <YourSvg />
        </div>
      </div>
      <p className="text-secondary mt-1 mb-5 nft-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet, consectetur ut enim.
      </p>

      <div className="d-flex">
        <BidValue title="Minimum Bid" value="2.110k" currency="$" />
        <BidValue
          title="Your Last Bid"
          value="1.8k"
          currency="$"
          status="Outbid"
        />
      </div>
      <hr className="custom-divider" />
      <NFTTimeLeft />
      <hr className="custom-divider" />
      <BidValue title="Limited Edition" value="1 of 1" edition />
      <hr className="custom-divider" />

      <div className="text-center">
        <NFTPlaceBid show={show} handleClose={handleShowBid} />

        <button
          className="btn btn-dark text-center btn-lg mt-5 rounded-pill place-bid-btn"
          onClick={handleShowBid}
        >
          Place a Bid
        </button>
        <div className="mt-2 royalty-info">
          Counterbid within the last 5 minutes will extend the auction by 15
          minutes
        </div>
      </div>
    </>
  );
};

export default NFTBaseDetails;
