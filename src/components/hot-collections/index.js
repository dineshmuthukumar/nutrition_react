import React from "react";
import NFTCard from "../nft-card";
import "./style.scss";
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import cardImage from "../../images/drops/nft_2.png";

const HotCollections = () => {
  return (
    <>
      <section className="hot-collection-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="sec-heading">
                Hot Collections
                <div className="carousel-btn-box">
                  <a className="carousel-btn">
                    <VscChevronLeft />
                  </a>
                  <a className="carousel-btn">
                    <VscChevronRight />
                  </a>
                </div>
              </h1>
              <div className="row">
                <div class="col-xl-3 col-lg-3 col-sm-6">
                  <NFTCard image={cardImage} />
                </div>
                <div class="col-xl-3 col-lg-3 col-sm-6">
                  <NFTCard image={cardImage} />
                </div>
                <div class="col-xl-3 col-lg-3 col-sm-6">
                  <NFTCard image={cardImage} />
                </div>
                <div class="col-xl-3 col-lg-3 col-sm-6">
                  <NFTCard image={cardImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotCollections;
