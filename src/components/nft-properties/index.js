import React from "react";
import NFTPropPills from "../nft-prop-pills";
import "./style.scss";

const NFTProperties = () => {
  return (
    <div className="nft-props">
      <div className="nft-props-title">Properties</div>
      <div className="nft-props-desc text-secondary">
        Art Properties are traits which determine the uniqueness of the NFT
      </div>
      <div className="row mt-4">
        <div className="col-12 col-md-4">
          <NFTPropPills />
        </div>
        <div className="col-12 col-md-4">
          <NFTPropPills />
        </div>
        <div className="col-12 col-md-4">
          <NFTPropPills />
        </div>
        <div className="col-12 col-md-4">
          <NFTPropPills />
        </div>
        <div className="col-12 col-md-4">
          <NFTPropPills />
        </div>
      </div>
    </div>
  );
};

export default NFTProperties;
