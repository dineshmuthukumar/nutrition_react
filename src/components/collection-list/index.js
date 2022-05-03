import React from "react";
import CollectionOne from "../../images/jump-trade/collection-1.gif";
import CollectionTwo from "../../images/jump-trade/collection-2.gif";
import "./style.scss";

const CollectionList = () => {
  return (
    <>
      <section className="collection-list-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="section-heading">
                <span className="main-title">COLLECTIONS</span>{" "}
                <span className="sub-title">CHECK IT OUT</span>
              </h1>

              <article className="collection-list">
                <div className="collection-box">
                  <img src={CollectionOne} className="collection-img" />
                  <h4>HYPER RACERS X</h4>
                </div>
                <div className="collection-box">
                  <img src={CollectionTwo} className="collection-img" />
                  <h4>EPIC BRAWL</h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionList;
