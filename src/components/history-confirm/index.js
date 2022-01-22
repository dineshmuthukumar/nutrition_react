import React, { useState } from "react";
import { useSelector } from "react-redux";
import userImg from "../../images/user_1.jpg";
import UserImage from "../../images/amitabh.png";
import { FaThumbsUp } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import ToolTip from "../tooltip/index";

import { currencyFormat } from "../../utils/common";
import { acceptBidApi } from "../../api/methods";
import "./style.scss";

const HistoryConfirm = ({
  nft,
  orderSlug,
  acceptBidConfirm,
  setAcceptBidConfirm,
  acceptBidDetail,
  isOrderOnSale,
  isOrderSuccess,
  isOrderCancelled,
  soldOut,
  transferringNFT,
}) => {
  const { user } = useSelector((state) => state.user.data);
  const [success, setSuccess] = useState(false);

  const handleAcceptBid = async () => {
    try {
      const result = await acceptBidApi({
        order_slug: orderSlug,
        order: { bid_slug: acceptBidDetail.bid_slug },
      });
      if (result.data.success) {
        setSuccess(true);
      }
    } catch (error) {
      if (error.response.data.status === 422) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {success || transferringNFT || soldOut ? (
        <div className="bid-history-confirm">
          <div className="success-msg">
            <FaThumbsUp className="thumbUp-icon" />
            {soldOut ? (
              <h3>Collectible Sold</h3>
            ) : (
              <h3>
                Token Transfer Initiated{" "}
                <ToolTip
                  icon={
                    <BsFillQuestionCircleFill
                      size={16}
                      className="ms-2 check-icon"
                    />
                  }
                  content={
                    "The NFT's transfer/transaction is in process on the blockchain. Visit again for latest sale-status."
                  }
                  placement="top"
                />{" "}
              </h3>
            )}
          </div>
          {/* <div className="owned-user-details">
            <div className="owned-user-image">
              <img src={UserImage} alt="bid-user" />
            </div>
            <div className="owned-user-info">
              <h5 className="time">Sep 20, 2021 11:15pm</h5>
              <h4 className="name">
                Owned by <span>@sirdonski</span>
              </h4>
            </div>
          </div> */}
        </div>
      ) : (
        <div className="bid-history-confirm">
          <div className="bh-user-details">
            <div className="bh-user-image">
              <img
                src={
                  !acceptBidDetail.private && acceptBidDetail.avatar_url
                    ? acceptBidDetail.avatar_url
                    : user?.slug === acceptBidDetail.slug &&
                      acceptBidDetail.avatar_url
                    ? acceptBidDetail.avatar_url
                    : userImg
                }
                alt="bid-user"
              />
            </div>
            <h2 className="bh-user-name">{acceptBidDetail.user_name}</h2>
          </div>
          <div className="bh-user-sold-details">
            <div className="sold-info">
              <div className="price">
                <span className="key">Highest Bid Price</span>
                <span className="value">
                  {currencyFormat(acceptBidDetail.bid_amount, "USD")}
                </span>
              </div>
              <div className="price">
                <span className="key">
                  Artist fee{" "}
                  <ToolTip
                    icon={
                      <BsFillQuestionCircleFill
                        size={16}
                        className="ms-2 check-icon"
                      />
                    }
                    content={
                      "The royalty paid to the artist or the inspiration."
                    }
                    placement="right"
                  />
                </span>
                <span className="value">{parseFloat(nft.royalties)}%</span>
              </div>
              <div className="price">
                <span className="key">
                  Service fee{" "}
                  <ToolTip
                    icon={
                      <BsFillQuestionCircleFill
                        size={16}
                        className="ms-2 check-icon"
                      />
                    }
                    content={
                      "The service fee includes gas fee and the platform fee."
                    }
                    placement="right"
                  />
                </span>
                <span className="value">{parseFloat(nft.service_fee)}%</span>
              </div>
            </div>
            <div className="total">
              <span className="key">You will Get</span>
              <span className="value">
                {currencyFormat(
                  parseFloat(acceptBidDetail.bid_amount) -
                    (parseFloat(acceptBidDetail.bid_amount) *
                      (parseFloat(nft.royalties) +
                        parseFloat(nft.service_fee))) /
                      100,
                  "USD"
                )}
              </span>
            </div>

            <div className="footer-btn-box">
              <div className="notes-box">
                <p>
                  Note: Once you sell your NFT, it will be moved from your
                  collectibles in the 'My NFTs' section.
                </p>
              </div>
              <div className="btn-block">
                <button
                  className="btn btn-dark text-center btn-lg rounded-pill btn-outline"
                  onClick={() => setAcceptBidConfirm(!acceptBidConfirm)}
                >
                  Back
                </button>
                <button
                  className="btn btn-dark text-center btn-lg rounded-pill btn-filled"
                  onClick={handleAcceptBid}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HistoryConfirm;
