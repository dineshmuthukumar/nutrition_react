import React, { useState } from "react";
import { useSelector } from "react-redux";
import userImg from "../../images/user_1.png";
import UserImage from "../../images/amitabh.png";
import { FaThumbsUp } from "react-icons/fa";

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
      {success || isOrderSuccess ? (
        <div className="bid-history-confirm">
          <div className="success-msg">
            <FaThumbsUp className="thumbUp-icon" />
            <h3>Collectible Sold</h3>
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
                <span className="key">Bid amount</span>
                <span className="value">
                  {currencyFormat(acceptBidDetail.bid_amount, "USD")}
                </span>
              </div>
              <div className="price">
                <span className="key">Artist fee</span>
                <span className="value">{parseFloat(nft.royalties)}%</span>
              </div>
              <div className="price">
                <span className="key">Service fee</span>
                <span className="value">{parseFloat(nft.service_fee)}%</span>
              </div>
            </div>
            <div className="total">
              <span className="key">Total Amount</span>
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
                  Note: Once you sell the NFT, the collective will be removed
                  from My NFT page
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
