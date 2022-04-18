import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router-dom";

import { nftCategoriesApi } from "../../api/methods";
import sample from "../../images/drops/nft_2.png";
import HeroVideo from "../hero-video";
import heroVideoBox from "../../images/amithabNft.mp4";
import silsila_video from "../../images/marketplace/silsila.mp4";
import bigb_artpunk from "../../images/marketplace/bigb_art_punk.gif";
import madhushala_nft from "../../images/marketplace/madhushala_nft.mp4";
import chakra_artpunks from "../../images/marketplace/chakra_artpunks.gif";
import comic_cover_new from "../../images/marketplace/comic_cover_new.jpg";
import digital_poster from "../../images/marketplace/digital_poster.gif";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";
import majnu from "../../images/fullyfaltoo_drop/Majnu.jpeg";
import wingesh from "../../images/fullyfaltoo_drop/wingesh.png";
import rangu from "../../images/fullyfaltoo_drop/rangu.png";
import latimes from "../../images/latimes/LATIMES.mp4";
import kalpana from "../../images/kalpana/kalpana.mp4";
import fullyfaltoo from "../../images/fullyfaltoo_drop/fullyfaltoo.mp4";

const Banner = ({ list = [] }) => {
  const history = useHistory();

  const handleNavigate = (input) => {
    if (input === "Hindustan Times NFT") {
      history.push(`/hindustan-times-NFT`);
    } else if (input === "The Unexplored Space of Kalpana Chawla") {
      history.push(`/kalpana-chawla-NFT`);
    } else if (input === "L.A. Times Collectible NFTs") {
      history.push(`/latimes-NFT`);
    } else if (input === "Fully Faltoo NFTs") {
      history.push(`/fully-faltoo-NFT`);
    } else {
      const data = list.find((obj) => obj.name === input);
      data?.slug && history.push(`/explore/category/${data?.slug}`);
    }
  };

  const static_url = [
    {
      name: "Fully Faltoo NFTs",
      type: "video",
      url: fullyfaltoo,
    },
    {
      name: "L.A. Times Collectible NFTs",
      type: "video",
      url: latimes,
    },
    {
      name: "The Unexplored Space of Kalpana Chawla",
      type: "video",
      url: kalpana,
    },
    {
      name: "Chakra Artpunks",
      type: "video",
      url: "https://cdn.beyondlife.club/media/video/Artpunk_15.mp4",
    },
    // {
    //   name: "Let's Go L.A.",
    //   type: "image",
    //   url: "https://nft.latimes.com/static/media/Let_s_Go_LA.57905f92.png",
    // },
    // {
    //   name: "By the Horns",
    //   type: "image",
    //   url: "https://nft.latimes.com/static/media/By_the_Horns.b531d955.png",
    // },
    {
      name: "Poster Signed Moments",
      type: "video",
      url: "https://cdn.beyondlife.club/media/video/sholay.mp4",
    },
    {
      name: "Animated Living Comic Book Cover",
      type: "video",
      url: "https://cdn.beyondlife.club/media/video/LivingComicBook_2.mp4",
    },
    {
      name: "Chakra Comic Book Cover",
      type: "video",
      url: "https://cdn.beyondlife.club/media/video/Juke_25_2.mp4",
    },
    {
      name: "BigB Punks",
      type: "image",
      url: bigb_artpunk,
    },
    {
      name: "Digitised Vintage Posters",
      type: "video",
      url: "https://cdn.beyondlife.club/Amitabh_posters.mp4",
    },
    {
      name: "Asia's First Metaverse wedding NFT Collection",
      type: "video",
      url: "https://cdn.beyondlife.club/media/video/metaverse_hogwards.mp4",
    },
    {
      name: "Seven Chakra's Powers",
      type: "video",
      url: "https://cdn.beyondlife.club/media/video/seven_power_chakra_video.mp4",
    },
    {
      name: "Madhushala",
      type: "video",
      url: madhushala_nft,
    },
    {
      name: "Animated Chakra",
      type: "video",
      url: "https://cdn.beyondlife.club/chakra_loop.mp4",
    },
    {
      name: "Hindustan Times NFT",
      type: "image",
      url: "https://cdn.beyondlife.club/media/social/hindustan_3.gif",
    },
  ];
  return (
    <>
      <div className="container-fluid mt-4 hero-carousel-mobile">
        <div className="row">
          <div className="col-12">
            <div style={{ height: "60vh" }}>
              {/* {list.length > 0 && (
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
                  {list.map((category, i) => (
                    <div
                      key={`category-${i}`}
                      style={{ overflow: "hidden" }}
                      className="cat-block"
                    >
                      {(() => {
                        if (category?.asset_type?.includes("video")) {
                          return (
                            <>
                              <video
                                loop
                                muted
                                autoPlay
                                playsInline
                                src={
                                  category?.asset_url
                                    ? category?.asset_url
                                    : heroVideoBox
                                }
                                className="first-image"
                                style={{ height: "50vh" }}
                              ></video>
                              <h5 className="cat-title">{category.name}</h5>
                            </>
                          );
                        } else {
                          return (
                            <>
                              <h5 className="cat-title">{category.name}</h5>
                              <img
                                src={
                                  category?.asset_url
                                    ? category?.asset_url
                                    : sample
                                }
                                className="first-image"
                                style={{ height: "50vh" }}
                              />
                            </>
                          );
                        }
                      })()}
                    </div>
                  ))}
                </Carousel>
              )} */}

              {static_url.length > 0 && (
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
                  {static_url.map((category, i) => (
                    <div
                      key={`category-${i}`}
                      style={{ overflow: "hidden" }}
                      className="cat-block"
                      onClick={() => handleNavigate(category.name)}
                    >
                      {(() => {
                        if (category.type === "video") {
                          return (
                            <>
                              <video
                                loop
                                muted
                                autoPlay
                                playsInline
                                src={category.url}
                                className="first-image"
                                style={{ height: "60vh" }}
                              ></video>
                              <h5 className="cat-title">{category.name}</h5>
                            </>
                          );
                        } else {
                          return (
                            <>
                              <h5 className="cat-title">{category.name}</h5>
                              <img
                                src={category.url}
                                className="first-image"
                                style={{ height: "60vh" }}
                              />
                            </>
                          );
                        }
                      })()}
                    </div>
                  ))}
                </Carousel>
              )}
            </div>
          </div>
        </div>
      </div>
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
                  onClick={() => handleNavigate("Fully Faltoo NFTs")}
                >
                  <h5 className="cat-title big-box">Fully Faltoo NFTs</h5>

                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src={fullyfaltoo}
                    className="first-image"
                    style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                  ></video>
                </div>
                <div
                  style={{ overflow: "hidden" }}
                  className="cat-block"
                  role={"button"}
                  onClick={() => handleNavigate("L.A. Times Collectible NFTs")}
                >
                  <h5 className="cat-title big-box">
                    L.A. Times Collectible NFTs
                  </h5>

                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src={latimes}
                    className="first-image la_video"
                    style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                  ></video>
                </div>
                <div
                  style={{ overflow: "hidden" }}
                  className="cat-block"
                  role={"button"}
                  onClick={() =>
                    handleNavigate("The Unexplored Space of Kalpana Chawla")
                  }
                >
                  <h5 className="cat-title big-box">
                    The Unexplored Space of Kalpana Chawla
                  </h5>

                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src={kalpana}
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
                  role={"button"}
                  style={{
                    height:
                      "calc(((((100vw - (7rem + 6rem))/2)/3)*2) - 1.5rem)",
                  }}
                  onClick={() => handleNavigate("BigB Punks")}
                >
                  <h5 className="cat-title medium-box">BigB Punks</h5>
                  <img
                    src={bigb_artpunk}
                    className="first-image"
                    style={{ height: "100%" }}
                  />
                  {/* {(() => {
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
                  })()} */}
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
                  onClick={() => handleNavigate("Digitised Vintage Posters")}
                >
                  <h5 className="cat-title">Digitised Vintage Posters</h5>
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://cdn.beyondlife.club/Amitabh_posters.mp4"
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
                  onClick={() =>
                    handleNavigate(
                      "Asia's First Metaverse wedding NFT Collection"
                    )
                  }
                >
                  <h5 className="cat-title">
                    Asia's First Metaverse wedding NFT Collection
                  </h5>
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://cdn.beyondlife.club/media/video/metaverse_hogwards.mp4"
                    className="first-image"
                    style={{ height: "100%" }}
                  ></video>
                </div>
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
                  <h5 className="cat-title">Seven Chakra's Powers</h5>
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://cdn.beyondlife.club/media/video/seven_power_chakra_video.mp4"
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
                  onClick={() => handleNavigate("Hindustan Times NFT")}
                >
                  <h5 className="cat-title">Hindustan Times NFT</h5>
                  <img
                    src={
                      "https://cdn.beyondlife.club/media/social/hindustan-horizondal.gif"
                    }
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
                  onClick={() => handleNavigate("Animated Chakra")}
                >
                  <h5 className="cat-title">Animated Chakra</h5>
                  {/* <img
                    src={comic_cover_new}
                    className="first-image"
                    style={{ height: "100%" }}
                  /> */}
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://cdn.beyondlife.club/chakra_loop.mp4"
                    className="first-image"
                    style={{ height: "100%" }}
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* demo  */}

      <div className="container-fluid mt-4 hero-carousel-desktop">
        <div className="row">
          <div className="col">
            <div className="row">
              {/* <div className="col">
                <div
                  className="cat-block"
                  role={"button"}
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3)))",
                  }}
                  onClick={() => handleNavigate("Let's Go L.A.")}
                >
                  <h5 className="cat-title">Let's Go L.A.</h5>
                  <img
                    src="https://nft.latimes.com/static/media/Let_s_Go_LA.57905f92.png"
                    className="first-image"
                    style={{ height: "100%" }}
                  ></img>
                </div>
              </div>
              <div className="col">
                <div
                  className="cat-block"
                  role={"button"}
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3)))",
                  }}
                  onClick={() => handleNavigate("By the Horns")}
                >
                  <h5 className="cat-title">By the Horns</h5>
                  <img
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://nft.latimes.com/static/media/By_the_Horns.b531d955.png"
                    className="first-image"
                    style={{ height: "100%" }}
                  ></img>
                </div>
              </div>

              <div className="col">
                <div
                  className="cat-block"
                  role={"button"}
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3)))",
                  }}
                  onClick={() => handleNavigate("Majnu's Da Man")}
                >
                  <h5 className="cat-title">Majnu's Da Man</h5>
                  <img
                    loop
                    muted
                    autoPlay
                    playsInline
                    src={majnu}
                    className="first-image"
                    style={{ height: "100%" }}
                  ></img>
                </div>
              </div>
              <div className="col">
                <div
                  className="cat-block"
                  role={"button"}
                  style={{
                    height: "calc(((((100vw - (7rem + 6rem))/2)/3)))",
                  }}
                  onClick={() => handleNavigate("Winging it like Wingnesh ")}
                >
                  <h5 className="cat-title">Winging it like Wingnesh </h5>
                  <img
                    loop
                    muted
                    autoPlay
                    playsInline
                    src={wingesh}
                    className="first-image"
                    style={{ height: "100%" }}
                  ></img>
                </div>
              </div> */}
              <div className="col">
                <div
                  className="cat-block"
                  role={"button"}
                  style={{
                    height: "calc(((((100vw - (7rem - 17rem))/2)/3)))",
                  }}
                  onClick={() => handleNavigate("Chakra Artpunks")}
                >
                  <h5 className="cat-title">Chakra Artpunks</h5>
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://cdn.beyondlife.club/media/video/Artpunk_15.mp4"
                    className="first-image"
                    style={{ height: "100%" }}
                  ></video>
                </div>
              </div>{" "}
              <div className="col">
                <div
                  className="cat-block"
                  role={"button"}
                  style={{
                    height: "calc(((((100vw - (7rem - 17rem))/2)/3)))",
                  }}
                  onClick={() => handleNavigate("Poster Signed Moments")}
                >
                  <h5 className="cat-title">Poster Signed Moments</h5>
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
                    height: "calc(((((100vw - (7rem - 17rem))/2)/3)))",
                  }}
                  onClick={() =>
                    handleNavigate("Animated Living Comic Book Cover")
                  }
                >
                  <h5 className="cat-title">
                    Animated Living Comic Book Cover
                  </h5>
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://cdn.beyondlife.club/media/video/LivingComicBook_2.mp4"
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
                    height: "calc(((((100vw - (7rem - 17rem))/2)/3)))",
                  }}
                  onClick={() => handleNavigate("Chakra Comic Book Cover")}
                >
                  <h5 className="cat-title">Chakra Comic Book Cover</h5>
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="https://cdn.beyondlife.club/media/video/Juke_25_2.mp4"
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
                    height: "calc(((((100vw - (7rem - 17rem))/2)/3)))",
                  }}
                  onClick={() => handleNavigate("Madhushala")}
                >
                  <h5 className="cat-title">Madhushala</h5>
                  <video
                    src={madhushala_nft}
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="first-image"
                    style={{ height: "100%" }}
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* demo  */}
    </>
  );
};

export default Banner;
