import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router-dom";

import { nftCategoriesApi } from "../../api/methods";
import sample from "../../images/drops/nft_2.png";
import HeroVideo from "../hero-video";
import heroVideoBox from "../../images/amithabNft.mp4";
import silsila_video from "../../images/marketplace/silsila.mp4";
import bigb_artpunk from "../../images/marketplace/bigb_art_punk.gif";
import madhushala_nft from "../../images/marketplace/madhushala_nft.png";
import chakra_artpunks from "../../images/marketplace/chakra_artpunks.gif";
import comic_cover_new from "../../images/marketplace/comic_cover_new.jpg";
import digital_poster from "../../images/marketplace/digital_poster.gif";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";

const Banner = ({ list = [] }) => {
  const history = useHistory();

  const handleNavigate = (input) => {
    const data = list.find((obj) => obj.name === input);

    history.push(`/explore/category/${data.slug}`);
  };

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
                <div
                  style={{ overflow: "hidden" }}
                  className="cat-block"
                  role={"button"}
                  onClick={() => handleNavigate("Chakra Artpunks Loot Box")}
                >
                  <h5 className="cat-title big-box">Chakra Artpunks</h5>
                  <img
                    src={chakra_artpunks}
                    className="first-image"
                    style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                  />
                </div>
                <div
                  style={{ overflow: "hidden" }}
                  className="cat-block"
                  role={"button"}
                  onClick={() =>
                    handleNavigate("Animated Living Comic Book Cover")
                  }
                >
                  <h5 className="cat-title big-box">
                    Animated Living Comic Book Cover
                  </h5>
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://cdn.beyondlife.club/media/video/2_g1GlPdEH8Zyz5jK0.mp4"
                    className="first-image"
                    style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                  ></video>
                </div>
                <div
                  style={{ overflow: "hidden" }}
                  className="cat-block"
                  role={"button"}
                  onClick={() => handleNavigate("LOOT BOX")}
                >
                  <h5 className="cat-title big-box">Digital Posters</h5>
                  <img
                    src={digital_poster}
                    className="first-image"
                    style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                  />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col pb-4">
                <div
                  className="cat-block"
                  role={"button"}
                  style={{
                    height:
                      "calc(((((100vw - (7rem + 6rem))/2)/3)*2) - 1.5rem)",
                  }}
                  onClick={() => handleNavigate("BigB Punks")}
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
                          tyle={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
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
                  role={"button"}
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3)))",
                  }}
                  onClick={() => handleNavigate("Physical Posters")}
                >
                  <h5 className="cat-title"> Autographed Physical Posters</h5>
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://cdn.beyondlife.club/media/video/sholay.mp4"
                    className="first-image"
                    style={{ height: "100%" }}
                  ></video>
                </div>
              </div>
              <div className="col">
                <div
                  className="cat-block"
                  role={"button"}
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3)))",
                  }}
                  onClick={() => handleNavigate("Stan Lee B'day Special")}
                >
                  <h5 className="cat-title">Stan Lee B'day Special</h5>
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://cdn.beyondlife.club/media/video/preview.mp4"
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
                  role={"button"}
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3) ) - 1.5rem)",
                  }}
                  onClick={() => handleNavigate("Seven Chakra's Powers")}
                >
                  <h5 className="cat-title">Seven Chakra's Powers Video</h5>
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://cdn.beyondlife.club/media/video/2_MNYjPOpHrw0zy79K.mp4"
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
                  role={"button"}
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3)) - 1.5rem)",
                  }}
                  onClick={() => handleNavigate("Madhushala")}
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
                  role={"button"}
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
