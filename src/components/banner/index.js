import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

import { nftCategoriesApi } from "../../api/methods";
import sample from "../../images/drops/nft_2.png";
import HeroVideo from "../hero-video";
import heroVideoBox from "../../images/amithabNft.mp4";
import silsila_video from "../../images/marketplace/silsila.mp4";
import bigb_artpunk from "../../images/marketplace/bigb_artpunk.jpg";
import madhushala_nft from "../../images/marketplace/madhushala_nft.png";
import chakra_artpunks from "../../images/marketplace/chakra_artpunks.jpg";
import comic_cover_new from "../../images/marketplace/comic_cover_new.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";

const Banner = ({ list = [] }) => {
  return (
    <>
      <div className="container-fluid mt-4 hero-carousel-desktop">
        <div className="row">
          <div className="col-5">
            <div style={{ height: "calc((100vw - 13rem)/2)" }}>
              <Carousel
                showThumbs={false}
                dynamicHeight={true}
                useKeyboardArrows
                autoPlay
                interval={4000}
                showArrows={false}
                showStatus={false}
                stopOnHover
                infiniteLoop={true}
                swipeable={true}
              >
                <div style={{ overflow: "hidden" }} className="cat-block">
                  <h5 className="cat-title big-box">
                    Autographed Physical Posters
                  </h5>
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src={
                      list[0]?.asset_url ? list[0]?.asset_url : silsila_video
                    }
                    className="first-image"
                    style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                  ></video>
                </div>
                <div style={{ overflow: "hidden" }} className="cat-block">
                  <h5 className="cat-title big-box">
                    Animated Living Comic Book Cover
                  </h5>
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://res.cloudinary.com/dba42nusi/video/upload/v1640657629/Chakra/Chakra_Videos/LivingComicBook_2/2_g1GlPdEH8Zyz5jK0_f8g86c_v40qia.mp4"
                    className="first-image"
                    style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                  ></video>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col pb-4">
                <div
                  className="cat-block"
                  style={{
                    height:
                      "calc(((((100vw - (7rem + 6rem))/2)/3)*2) - 1.5rem)",
                  }}
                >
                  <h5 className="cat-title medium-box">BigB Punks NFTs </h5>
                  {(() => {
                    if (list[5]?.asset_type?.includes("video")) {
                      return (
                        <video
                          loop
                          muted
                          autoPlay
                          playsInline
                          src={
                            list[5]?.asset_url
                              ? list[5]?.asset_url
                              : heroVideoBox
                          }
                          className="first-image"
                          style={{ height: "100%" }}
                        ></video>
                      );
                    } else {
                      return (
                        <img
                          src={bigb_artpunk}
                          className="first-image"
                          style={{ height: "100%" }}
                        />
                      );
                    }
                  })()}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div
                  className="cat-block"
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3)))",
                  }}
                >
                  <h5 className="cat-title">Chakra Artpunks</h5>
                  {(() => {
                    if (list[6]?.asset_type?.includes("video")) {
                      return (
                        <video
                          loop
                          muted
                          autoPlay
                          playsInline
                          src={
                            list[6]?.asset_url
                              ? list[6]?.asset_url
                              : heroVideoBox
                          }
                          className="first-image"
                          style={{ height: "100%" }}
                        ></video>
                      );
                    } else {
                      return (
                        <img
                          src={chakra_artpunks}
                          className="first-image"
                          style={{ height: "100%" }}
                        />
                      );
                    }
                  })()}
                </div>
              </div>
              <div className="col">
                <div
                  className="cat-block"
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3)))",
                  }}
                >
                  <h5 className="cat-title">Stan Lee B'day Special</h5>
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://res.cloudinary.com/dba42nusi/video/upload/v1640714327/Chakra/Chakra_Videos/Bday/1__LRrZzl7HbqgP6xaK_fpxd7j.mp4"
                    className="first-image"
                    style={{ height: "100%" }}
                  ></video>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col pb-4">
                <div
                  className="cat-block"
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3) ) - 1.5rem)",
                  }}
                >
                  <h5 className="cat-title">Seven Chakra's Powers Video</h5>
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://res.cloudinary.com/dba42nusi/video/upload/v1640657041/Chakra/Chakra_Videos/SevenPowers_7/2_MNYjPOpHrw0zy79K_obmgkq_bbhfcq.mp4"
                    className="first-image"
                    style={{ height: "100%" }}
                  ></video>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col pb-4">
                <div
                  className="cat-block"
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3)) - 1.5rem)",
                  }}
                >
                  <h5 className="cat-title">Madhushala NFTs</h5>
                  <img
                    src={madhushala_nft}
                    className="first-image"
                    style={{ height: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="cat-block"
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3)))",
                  }}
                >
                  <h5 className="cat-title">Chakra Comic NFTs</h5>
                  <img
                    src={comic_cover_new}
                    className="first-image"
                    style={{ height: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
