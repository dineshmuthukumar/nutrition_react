import React from "react";
import Badge from "./badge";
import "./style.scss";

const NFTSummary = () => {
  return (
    <div className="bg-white shadow-sm nft-summary">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            <Badge title="Total Bids" value="20" />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            <Badge title="Price" value="2.55" currency="ETH" />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            <Badge title="Editions Left" value="1 of 1" />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            <Badge title="Total Trasfers" value="2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTSummary;
