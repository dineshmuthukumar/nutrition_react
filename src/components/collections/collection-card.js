import React from "react";
import "./style.scss";
import {FaRegHeart} from "react-icons/fa";

const CollectionCard = ({image}) => {
  return <>
      <div class="col-xl-4 col-lg-4 col-sm-6">
        <article className="nft-collection-card">
          <figure>
            <img src={image} alt="cardImage" />
            <FaRegHeart className="heart-icon" />
          </figure>
          <div className="nft-collection-content">
            <h5>Featured NFT</h5>
            <h1>BigBSigned</h1>
            <a href="javascript:void(0);" className="nft-collection-btn">Explore</a>
          </div>
        </article>
      </div>
      
  </>;
};

export default CollectionCard;
