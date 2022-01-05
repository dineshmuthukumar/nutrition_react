import React from "react";
// import cardImage from "../../images/drops/nft_2.png";
import ExploreNFTCard from "../../components/explore-nft-card";
import "./style.scss";

const ExploreNFTCardCarousel = ({ image }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <ExploreNFTCard images={image} />
          </div>
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <ExploreNFTCard images={image} />
          </div>
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <ExploreNFTCard images={image} />
          </div>
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <ExploreNFTCard images={image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreNFTCardCarousel;
