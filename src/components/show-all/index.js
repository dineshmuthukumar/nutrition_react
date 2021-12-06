import React from "react";
import NFTCard from "../nft-card"
import "./style.scss";
import cardImage from "../../images/drops/nft_2.png";
const ShowAll = () => {
  return <>
        <section className="showall-nft-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
              <h1 className="sec-heading">
                <span>Showing All (12,200)</span>
              </h1>
              <div className="row">
                <NFTCard  image={cardImage} />
                <NFTCard  image={cardImage} />
                <NFTCard  image={cardImage} />
                <NFTCard  image={cardImage} />
              </div>
          </div>
        </div>
      </div>
    </section>
  
  </>;
};

export default ShowAll;