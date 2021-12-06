import React from "react";
import "./style.scss";
import CollectionCard from "./collection-card";
import cardImage from "../../images/drops/nft_2.png";

const Collections = () => {
  return <>
    <section className="collection-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
              <h1 className="sec-heading">Collections</h1>
              <div className="row">
                <CollectionCard image={cardImage}/>
                <CollectionCard image={cardImage}/>
                <CollectionCard image={cardImage}/>
              </div>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default Collections;
