import dayjs from "dayjs";
import React from "react";
import { useHistory } from "react-router";
import sample from "../../images/sampleNFT.jpg";
import { currencyFormat } from "../../utils/common";
import NFTCounter from "../nft-counter";
import "./style.scss";

const ExploreCardTwo = ({
  nft,
  slug,
  isStarted,
  isEnded,
  time,
  label,
  title,
  bidPrice,
  desc,
  nftType,
}) => {
  const erc721 = nftType == "erc721";
  const history = useHistory();

  const handleClick = () => {
    history.push(`/details/${slug}`);
  };
  return (
    <div className="col-xl-4 col-lg-4 col-sm-6">
      <div className="block-box user-post  mb-5">
        <div className="item-post">
          <img
            src={nft.image_url ? nft.image_url : sample}
            width="100%"
            align="post"
            role="button"
            onClick={handleClick}
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="left-bid">
            <h6 className="post-title">{nft.name}</h6>
            <p className="desc-para">{nft.description}</p>
          </div>
          {!erc721 && (
            <div className="rights-bid">
              <p className="left_bid mt-3">
                {nft.quantity ? `Only ${nft.quantity} left` : "Sold out"}
              </p>
            </div>
          )}
        </div>
        <div className="post-cost pw_we d-flex  justify-content-between">
          <div className="left-bids">
            <div className="post-sold-text">
              {erc721 ? "Bid Price" : "Price"}
            </div>
            <div className="post-sold-cost">
              {currencyFormat(bidPrice, "USD")}
            </div>
          </div>
          <div className="right-bid">
            <div className="post-sold-text">{label}</div>
            <div className="post-sold-cost">
              {isEnded ? (
                <>{time && dayjs(time).format("DD. MM. YYYY")}</>
              ) : (
                <NFTCounter
                  time={time}
                  timeClass="font-onerem"
                  intervalClass="font-psevenrem"
                  intervalGapClass="me-1"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCardTwo;