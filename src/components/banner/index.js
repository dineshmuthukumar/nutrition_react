import React from "react";
import { Carousel } from "react-responsive-carousel";

import sample from "../../images/drops/nft_2.png";
import HeroVideo from "../hero-video";
import heroVideoBox from "../../images/amithabNft.mp4";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";

const Banner = () => {
  return (
    <>
      <div className="container-fluid mt-4 hero-carousel-mobile">
        <div className="row">
          <div className="col-12">
            <div style={{ height: "50vh" }}>
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
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src={heroVideoBox}
                    className="first-image"
                    style={{ height: "50vh" }}
                  ></video>
                  <h5 className="cat-title">BigB Punks</h5>
                </div>
                <div className="cat-block">
                  <h5 className="cat-title">BigB Punks</h5>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "50vh" }}
                  />
                </div>
                <div className="cat-block">
                  <h5 className="cat-title">BigB Punks</h5>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "50vh" }}
                  />
                </div>
                <div className="cat-block">
                  <h5 className="cat-title">BigB Punks</h5>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "50vh" }}
                  />
                </div>
                <div className="cat-block">
                  <h5 className="cat-title">BigB Punks</h5>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "50vh" }}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-4 hero-carousel-desktop">
        <div className="row">
          <div className="col-6">
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
                  <h5 className="cat-title big-box">BigB Punks</h5>
                  {/* <img
                    src={sample}
                    className="first-image"
                    style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                  /> */}
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src={heroVideoBox}
                    className="first-image"
                    style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                  ></video>
                </div>
                <div className="cat-block">
                  <h5 className="cat-title big-box">BigB Punks</h5>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                  />
                </div>
                <div className="cat-block">
                  <h5 className="cat-title big-box">BigB Punks</h5>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                  />
                </div>
                <div className="cat-block">
                  <h5 className="cat-title big-box">BigB Punks</h5>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                  />
                </div>
                <div className="cat-block">
                  <h5 className="cat-title big-box">BigB Punks</h5>
                  <img
                    src={sample}
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
                  style={{
                    height:
                      "calc(((((100vw - (7rem + 6rem))/2)/3)*2) - 1.5rem)",
                  }}
                >
                  <h5 className="cat-title medium-box">BigB Punks</h5>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "100%" }}
                  />
                </div>{" "}
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
                  <h5 className="cat-title">BigB Punks</h5>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "100%" }}
                  />{" "}
                </div>
              </div>
              <div className="col">
                <div
                  className="cat-block"
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3)))",
                  }}
                >
                  <h5 className="cat-title">BigB Punks</h5>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "100%" }}
                  />
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="row">
              <div className="col pb-4">
                <div
                  className="cat-block"
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3) ) - 1.5rem)",
                  }}
                >
                  <h5 className="cat-title">BigB Punks</h5>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "100%" }}
                  />
                </div>{" "}
              </div>
            </div>{" "}
            <div className="row">
              <div className="col pb-4">
                <div
                  className="cat-block"
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3)) - 1.5rem)",
                  }}
                >
                  <h5 className="cat-title">BigB Punks</h5>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "100%" }}
                  />{" "}
                </div>{" "}
              </div>
            </div>{" "}
            <div className="row">
              <div className="col">
                <div
                  className="cat-block"
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3)))",
                  }}
                >
                  <h5 className="cat-title">BigB Punks</h5>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "100%" }}
                  />{" "}
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
