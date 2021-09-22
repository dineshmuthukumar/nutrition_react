import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import ReadMoreReact from "read-more-react";
import NFTTimeLeft from "../nft-time-left";
import BidValue from "../bid-value";
import NFTPlaceBid from "./../nft-place-bid";
import { ReactComponent as DiscordSvg } from "./../../icons/discord_logo.svg";
import ToolTip from "../tooltip";
import "./style.scss";

const NFTBaseDetails = () => {
  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [ended, setEnded] = useState(true);
  const [inSufficientBalance, setinSufficientBalance] = useState(false);

  const handleShowBid = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="creator mt-3">
        Amitabh Bachchan
        <ToolTip
          icon={<FaCheckCircle size={16} className="ms-2 check-icon" />}
          content="Verified Artist"
          placement="right"
        />
        {ended && <span className="nft-status-tag rounded-pill">Sold Out</span>}
      </div>
      <div className="nft-title-container">
        <div className="nft-title">
          Lazerbeams Visualiser [KDYN Remix] [2/3]
        </div>

        <ToolTip
          icon={
            <div className="discord">
              <div className="count">22</div>
              <DiscordSvg />
            </div>
          }
          content="View this NFT bid's discord server"
          placement="left"
        />
      </div>
      <p className="text-secondary mt-1 mb-5 nft-desc">
        <ReadMoreReact
          min={300}
          ideal={300}
          max={700}
          text={`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Lorem ipsum dolor sit amet, consectetur ut enim  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.`}
        />
      </p>

      <div className="bottom-content">
        <div className="d-flex">
          <BidValue title="Minimum Bid" value="2.110k" currency="$" />
          {currentUser && (
            <BidValue
              title="Your Last Bid"
              value="1.8k"
              currency="$"
              status="Outbid"
            />
          )}

          {ended && <BidValue title="Owned By" name="@CryptoGeek" isEnd />}
        </div>
        <hr className="custom-divider" />
        <NFTTimeLeft
          title="Auction ending in"
          tooltipText="When there are less than 5 minutes left in the auction, successful bids will reset the auction to 5 minutes."
        />
        <hr className="custom-divider" />
        <BidValue title="Limited Edition" value="1 of 1" isLeft />
        <hr className="custom-divider" />

        <div className="text-center">
          <NFTPlaceBid show={show} handleClose={handleShowBid} />

          {inSufficientBalance ? (
            <button
              className="btn btn-danger text-center text-white btn-lg mt-2 rounded-pill recharge-btn"
              onClick={handleShowBid}
            >
              Recharge Wallet
            </button>
          ) : (
            <button
              // disabled
              className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
              onClick={handleShowBid}
            >
              Place a Bid
            </button>
          )}

          <div className="mt-2 royalty-info">
            Counterbid within the last 5 minutes will extend the auction by 15
            minutes
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTBaseDetails;
