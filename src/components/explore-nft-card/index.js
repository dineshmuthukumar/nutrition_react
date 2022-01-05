import React from "react";
import "./style.scss";

const ExploreNFTCard = ({ images }) => {
  return (
    <div className="explore-nft-card" role="button">
      <img alt="media logo" src={images} role="button" />

      <div className="explore-nft-details">
        <div className="explore-nft-title">Amitabh Bachchan Exclusive NFTs</div>
        <div className="explore-nft-desc">BigB Punk &amp; NFT Arts</div>
        <buton type="button" className="explore-nft-btn">
          Explore
        </buton>
      </div>
    </div>
  );
};

export default ExploreNFTCard;
