import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import "./style.scss";

const CollectionCard = ({ category, image }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/explore/category/${category?.slug}`);
  };
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-sm-6">
        <article className="nft-collection-card">
          <figure>
            <img src={image} alt="cardImage" loading="lazy" />
            <FaRegHeart className="heart-icon" />
          </figure>
          <div className="nft-collection-content">
            <h5>Featured NFT</h5>
            <h1>{category?.name}</h1>
            <a href="" className="nft-collection-btn" onClick={handleClick}>
              Explore
            </a>
          </div>
        </article>
      </div>
    </>
  );
};

export default CollectionCard;
