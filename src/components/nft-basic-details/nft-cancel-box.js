import React from "react";

const CancelNft = ({ image }) => {
  return (
    <article className="cancel-nft">
      <div className="image-block">
        <img src={image} alt="nfImages" />
      </div>
      <div className="info-block">
        <h5 className="name">NFT Name</h5>
        <ul className="nft-info">
          <li className="quantity">
            <span className="key">Quantity</span>{" "}
            <span className="value">3</span>
          </li>
          <li className="price">
            <span className="key">Price</span>{" "}
            <span className="value">$2099</span>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="btn btn-dark text-center mt-2 rounded-pill cancel-btn"
      >
        Cancel
      </button>
    </article>
  );
};

export default CancelNft;
