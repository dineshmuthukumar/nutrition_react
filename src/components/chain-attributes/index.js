import React from "react";
import ChainPills from "../chain-pills";
import "./style.scss";

const ChainAttributes = () => {
  return (
    <div className="chain-attributes">
      <div className="chain-att-title">
        Chain Attributes
        <span className="title-count">(3)</span>
      </div>
      <div className="chain-att-content mt-2">
        <ChainPills first="0xertu" second="Auction" />
        <ChainPills first="NFT" />
        <ChainPills first="ETH" />
        <ChainPills first="0xertu" second="Auction" />
        <ChainPills first="NFT" />
        <ChainPills first="ETH" />
        <ChainPills first="311" /> <ChainPills first="311" />
        <ChainPills first="IPFS" second="Metadata" />{" "}
        <ChainPills first="0xertu" second="Auction" />
        <ChainPills first="IPFS" second="Metadata" />
      </div>
    </div>
  );
};

export default ChainAttributes;
