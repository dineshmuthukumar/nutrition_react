import React, { useState } from "react";
import "./style.scss";
import images from "../../utils/images.json";

const MoblieAppComponent = () => {
  return (
    <>
      <section className="downloads-sec">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="content">
                <h1 className="mb-4">Jump! Explore!! NFTs!! </h1>
                <p className="mb-4">
                  Stay Updated On All NFT Sales, Bids, & Trades With The App.
                  Get The App Now!
                </p>
                <div className="d-flex pt-4 downloads_btns">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.jump.trade"
                    className="me-4"
                    target="_blank"
                  >
                    <img src={images.playStore} />
                  </a>
                  <a
                    href="https://apps.apple.com/in/app/jump-trade/id1618739753"
                    className=""
                    target="_blank"
                  >
                    <img src={images.appStore} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="mobile_mock">
                <img src={images.mock} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoblieAppComponent;
