import React from "react";
import UserImage from "../../images/amitabh.png";
import { FaThumbsUp } from "react-icons/fa";

import "./style.scss";

const HistoryConfirm = () => {
  return (
    <>
      <div className="bid-history-confirm">
        <div className="bh-user-details">
          <div className="bh-user-image">
            <img src={UserImage} alt="bid-user" />
          </div>
          <h2 className="bh-user-name">@sirdonski</h2>
        </div>
        <div className="bh-user-sold-details">
          <div className="sold-info">
            <div className="price">
              <span className="key">Bid amount</span>
              <span className="value">$2000.99</span>
            </div>
            <div className="price">
              <span className="key">Artist fee</span>
              <span className="value">10%</span>
            </div>
            <div className="price">
              <span className="key">Service fee</span>
              <span className="value">10%</span>
            </div>
          </div>
          <div className="total">
            <span className="key">Total Amount</span>
            <span className="value">$ 1600.00</span>
          </div>

          <div className="footer-btn-box">
            <div className="notes-box">
              <p>
                Note: Once you sell the NFT, the collective will be removed from
                My NFT page
              </p>
            </div>
            <div className="btn-block">
              <button className="btn btn-dark text-center btn-lg rounded-pill btn-outline">
                Back
              </button>
              <button className="btn btn-dark text-center btn-lg rounded-pill btn-filled">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bid-history-confirm">
        <div className="success-msg">
          <FaThumbsUp className="thumbUp-icon" />
          <h3>Collectible Sold</h3>
        </div>
        <div className="owned-user-details">
          <div className="owned-user-image">
            <img src={UserImage} alt="bid-user" />
          </div>
          <div className="owned-user-info">
            <h5 className="time">Sep 20, 2021 11:15pm</h5>
            <h4 className="name">
              Owned by <span>@sirdonski</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryConfirm;
