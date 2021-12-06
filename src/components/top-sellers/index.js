import React from "react";
import Seller from "./seller";
import "./style.scss";
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import userImage from "../../images/artist-image.png";

const TopSellers = () => {
  return <>
    <section className="top-seller-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
              <h1 className="sec-heading">Top Sellers 
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
                <Seller image={userImage} />
                <Seller image={userImage} />
                <Seller image={userImage} />
                <Seller image={userImage} />
                <Seller image={userImage} />
              </div>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default TopSellers;
