import React from "react";
import NFTPropPills from "../nft-prop-pills";
import "./style.scss";

const NFTProperties = () => {
  return (
    <div className="nft-props">
      <div className="nft-props-title">
        Properties
        <span className="title-count">(3)</span>
      </div>

      <div className="mt-2 nft-props-content">
        <NFTPropPills />
        <NFTPropPills />
        <NFTPropPills />
        <NFTPropPills />
        <NFTPropPills />
      </div>
    </div>
  );
};

export default NFTProperties;
