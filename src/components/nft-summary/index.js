import React from "react";
import Badge from "./badge";
import "./style.scss";

const NFTSummary = ({ totalBid }) => {
  return (
    <div className="bg-white shadow-sm nft-summary">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            {/* <Badge title="Total Bids" value="20000" /> */}
            <Badge title="Total Bids" value={totalBid} />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            <Badge
              title="Price"
              value="99.63K"
              currency="$"
              diff="-2000"
              tooltip="Price increased from last bid"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            <Badge title="Total Views" value="23457" />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            <Badge title="Total Favourites" value="76543" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTSummary;
