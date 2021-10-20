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
    <div className="col-xl-10 p-0 h_nft">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 nft_img p-0">
            <div className="item-post">
              <img
                src={nft.image_url ? nft.image_url : sample}
                width="100%"
                align="post"
                role="button"
                onClick={handleClick}
              />
              <div className="nft_status">
                {!erc721 && (
                  <div className="rights-bid">
                    <p className="left_bid">
                      {nft.quantity ? `Only ${nft.quantity} left` : "Sold out"}
                    </p>
                  </div>
                )}
              </div>
            </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 nft_details  p-0">
          <div className="h_nft_cnt">
            <div className="nft_cnt_top">
              <h6 className="post-title">{nft.name}</h6>
              <p className="desc-para">{nft.description}</p>
            </div>
            <div className="nft_cnt_bottom d-flex  justify-content-between">
              <div className="nft_bid_status">
                <div className="nft-sold-text">
                  {erc721 ? "Bid Price" : "Price"}
                </div>
                <div className="nft-sold-cost">
                  {currencyFormat(bidPrice, "USD")}
                </div>
              </div>

              <div className="nft_right_bid">
                <div className="post-sold-text">{label}</div>
                <div className="post-sold-cost">
                  {isEnded ? (
                    <>{time && dayjs(time).format("DD. MM. YYYY")}</>
                  ) : (
                    <NFTCounter
                      time={time}
                      intervalGapClass="me-1"
                    />
                  )}
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCardTwo;
