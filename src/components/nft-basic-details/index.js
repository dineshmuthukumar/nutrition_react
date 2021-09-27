import React, { useState } from "react";
import { useHistory } from "react-router";
import { FaCheckCircle } from "react-icons/fa";
import ReadMoreReact from "read-more-react";
import NFTTimeLeft from "../nft-time-left";
import BidValue from "../bid-value";
import NFTPlaceBid from "./../nft-place-bid";
import { useSelector } from "react-redux";
import { ReactComponent as DiscordSvg } from "./../../icons/discord_logo.svg";
import ToolTip from "../tooltip";
import "./style.scss";

const NFTBaseDetails = ({ nft, isPlaceBid }) => {
  const history = useHistory();
  const { user } = useSelector((state) => state.user.data);
  const [currentUser, setCurrentUser] = useState(false);
  const [ended, setEnded] = useState(true);

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
        <div className="nft-title">{nft.name}</div>

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
        {nft.description && (
          <ReadMoreReact
            min={300}
            ideal={300}
            max={700}
            text={nft.description}
          />
        )}
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
          <NFTPlaceBid show={isPlaceBid ? true : false} />

          {parseFloat(user?.balance) <= 0 ? (
            <button
              className="btn btn-danger text-center text-white btn-lg mt-2 rounded-pill recharge-btn"
              onClick={() =>
                window.open(
                  `${process.env.REACT_APP_BASE_URL}/accounts#wallet`,
                  "_blank"
                )
              }
            >
              Recharge Wallet
            </button>
          ) : (
            <button
              // disabled
              className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
              onClick={() =>
                history.push(`${history.location.pathname}/placebid`)
              }
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
