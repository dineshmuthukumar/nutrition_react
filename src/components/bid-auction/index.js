import React from "react";
import NFTCounter from "../nft-counter";

import "./style.scss";

const BidAuction = ({
  status,
  bottomTitle,
  bottomValue,
  time,
  cTime,
  userTotalBuys,
}) => {
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
            has ended <br />
            <p className="bought_nft">
              {userTotalBuys && `You've bought ${userTotalBuys} NFTs`}
            </p>
          </>
        )}
      </div>
      <div className="bid-aution-bottom">
        <div>
          <div className="bottom-title">{bottomTitle}</div>
          <div className="bottom-time">
            {status === "start" ? (
              <NFTCounter
                time={time}
                cTime={cTime}
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
            onClick={() =>
              window.open(
                `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/wallet`,
                "_self"
              )
            }
          >
            Recharge Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidAuction;
