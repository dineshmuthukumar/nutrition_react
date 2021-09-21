import React from "react";
import "./style.scss";

const BidValue = ({ title, value, currency, status, edition = false }) => {
  return (
    <div className="current-bid">
      <div className="title">
        {title}
        {status && <span className="status-tag rounded-pill">{status}</span>}
      </div>
      <div className="value">
        <div className="crypto me-3">
          {currency} {value}
          {edition && <div className="edition">left</div>}
        </div>
      </div>
    </div>
  );
};

export default BidValue;
