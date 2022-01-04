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
      {/* <section className="hero-section">
      <HeroVideo video={heroVideoBox} />
      <div className="hero-content">
        <h1>COLLECT SUPER RARE DIGITAL ARTWORKS</h1>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
      </div>
    </section> */}

      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-6">
            <div style={{ height: "calc((100vw - 7rem)/2)" }}>
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
                <div style={{ overflow: "hidden" }}>
                  {/* <img
                    src={sample}
                    className="first-image"
                    style={{ height: "calc((100vw - 7rem)/2)" }}
                  /> */}

                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    className="first-image"
                    style={{ height: "calc((100vw - 7rem)/2)" }}
                  ></video>
                </div>
                <div>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "calc((100vw - 7rem)/2)" }}
                  />
                </div>
                <div>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "calc((100vw - 7rem)/2)" }}
                  />
                </div>
                <div>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "calc((100vw - 7rem)/2)" }}
                  />
                </div>
                <div>
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "calc((100vw - 7rem)/2)" }}
                  />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col pb-4">
                <div
                  style={{
                    height: "calc(((((100vw - 7rem)/2)/3)*2) - 1.5rem)",
                  }}
                >
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
                  style={{
                    height: "calc(((((100vw - 7rem)/2)/3)))",
                  }}
                >
                  <img
                    src={sample}
                    className="first-image"
                    style={{ height: "100%" }}
                  />{" "}
                </div>
              </div>
              <div className="col">
                <div
                  style={{
                    height: "calc(((((100vw - 7rem)/2)/3)))",
                  }}
                >
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
                  style={{
                    height: "calc(((((100vw - 7rem)/2)/3) ) - 1.5rem)",
                  }}
                >
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
                  style={{
                    height: "calc(((((100vw - 7rem)/2)/3)) - 1.5rem)",
                  }}
                >
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
                  style={{
                    height: "calc(((((100vw - 7rem)/2)/3)))",
                  }}
                >
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
