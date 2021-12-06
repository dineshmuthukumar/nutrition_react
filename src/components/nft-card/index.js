import React from "react";
import "./style.scss";
import {FaHeart} from "react-icons/fa";

const NFTCard = ({image}) => {
  return <>
    <div class="col-xl-3 col-lg-3 col-sm-6">
      <article className="nft-card">
        <figure>
          <img src={image} alt="cardImage" />
          <FaHeart className="heart-icon" />
        </figure>
        <div className="nft-content">
          
          <h3>BigBSigned</h3>
          <h4>Featured NFT</h4>
          <div className="nft-priceType">
            <h5 className="nft-price">
              <span className="key">Price</span>
              <span className="value">$480,000.00</span>
            </h5>
            <h5 className="nft-type">
              <span className="key">NFT Type</span>
              <span className="value">ERC 721</span>
            </h5>
          </div>
        </div>
      </article>
    </div>
  </>;
};

export default NFTCard;
