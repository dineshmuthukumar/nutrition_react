import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

import { nftCategoriesApi } from "../../api/methods";
import sample from "../../images/drops/nft_2.png";
import HeroVideo from "../hero-video";
import heroVideoBox from "../../images/amithabNft.mp4";
import silsila_video from "../../images/marketplace/silsila.mp4";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";

const Banner = () => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    categoriesList(page);
  }, []);

  const categoriesList = async (page) => {
    try {
      setLoading(true);
      let response = await nftCategoriesApi({ page });
      setList([...list, ...response.data.data.categories]);
      setHasNext(response.data.data.next_page);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container-fluid mt-4 hero-carousel-mobile">
        <div className="row">
          <div className="col-12">
            <div style={{ height: "50vh" }}>
              {list.length > 0 && (
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
                <div style={{ overflow: "hidden" }} className="cat-block">
                  <h5 className="cat-title big-box">{list[0]?.name}</h5>
                  {(() => {
                    if (list[0]?.asset_type?.includes("video")) {
                      return (
                        <video
                          loop
                          muted
                          autoPlay
                          playsInline
                          src={
                            list[0]?.asset_url
                              ? list[0]?.asset_url
                              : heroVideoBox
                          }
                          className="first-image"
                          style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                        ></video>
                      );
                    } else {
                      return (
                        <img
                          src={list[0]?.asset_url ? list[0]?.asset_url : sample}
                          className="first-image"
                          style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                        />
                      );
                    }
                  })()}
                </div>
                <div className="cat-block">
                  <h5 className="cat-title big-box">{list[1]?.name}</h5>
                  {(() => {
                    if (list[1]?.asset_type?.includes("video")) {
                      return (
                        <video
                          loop
                          muted
                          autoPlay
                          playsInline
                          src={
                            list[1]?.asset_url
                              ? list[1]?.asset_url
                              : heroVideoBox
                          }
                          className="first-image"
                          style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                        ></video>
                      );
                    } else {
                      return (
                        <img
                          src={list[1]?.asset_url ? list[1]?.asset_url : sample}
                          className="first-image"
                          style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                        />
                      );
                    }
                  })()}
                </div>
                <div className="cat-block">
                  <h5 className="cat-title big-box">{list[2]?.name}</h5>
                  {(() => {
                    if (list[2]?.asset_type?.includes("video")) {
                      return (
                        <video
                          loop
                          muted
                          autoPlay
                          playsInline
                          src={
                            list[2]?.asset_url
                              ? list[2]?.asset_url
                              : heroVideoBox
                          }
                          className="first-image"
                          style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                        ></video>
                      );
                    } else {
                      return (
                        <img
                          src={list[2]?.asset_url ? list[2]?.asset_url : sample}
                          className="first-image"
                          style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                        />
                      );
                    }
                  })()}
                </div>
                <div className="cat-block">
                  <h5 className="cat-title big-box">{list[3]?.name}</h5>
                  {(() => {
                    if (list[3]?.asset_type?.includes("video")) {
                      return (
                        <video
                          loop
                          muted
                          autoPlay
                          playsInline
                          src={
                            list[3]?.asset_url
                              ? list[3]?.asset_url
                              : heroVideoBox
                          }
                          className="first-image"
                          style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                        ></video>
                      );
                    } else {
                      return (
                        <img
                          src={list[3]?.asset_url ? list[3]?.asset_url : sample}
                          className="first-image"
                          style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                        />
                      );
                    }
                  })()}
                </div>
                <div className="cat-block">
                  <h5 className="cat-title big-box">{list[4]?.name}</h5>
                  {(() => {
                    if (list[4]?.asset_type?.includes("video")) {
                      return (
                        <video
                          loop
                          muted
                          autoPlay
                          playsInline
                          src={
                            list[4]?.asset_url
                              ? list[4]?.asset_url
                              : heroVideoBox
                          }
                          className="first-image"
                          style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                        ></video>
                      );
                    } else {
                      return (
                        <img
                          src={list[4]?.asset_url ? list[4]?.asset_url : sample}
                          className="first-image"
                          style={{ height: "calc((100vw - (7rem + 6rem))/2)" }}
                        />
                      );
                    }
                  })()}
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
                  <h5 className="cat-title medium-box">{list[5]?.name}</h5>
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
                          src={list[5]?.asset_url ? list[5]?.asset_url : sample}
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
                  <h5 className="cat-title">{list[6]?.name}</h5>
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
                          src={list[6]?.asset_url ? list[6]?.asset_url : sample}
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
                  <h5 className="cat-title">{list[7]?.name}</h5>
                  {(() => {
                    if (list[6]?.asset_type?.includes("video")) {
                      return (
                        <video
                          loop
                          muted
                          autoPlay
                          playsInline
                          src={
                            list[7]?.asset_url
                              ? list[7]?.asset_url
                              : heroVideoBox
                          }
                          className="first-image"
                          style={{ height: "100%" }}
                        ></video>
                      );
                    } else {
                      return (
                        <img
                          src={list[7]?.asset_url ? list[7]?.asset_url : sample}
                          className="first-image"
                          style={{ height: "100%" }}
                        />
                      );
                    }
                  })()}
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
                  <h5 className="cat-title">{list[8]?.name}</h5>
                  {(() => {
                    if (list[6]?.asset_type?.includes("video")) {
                      return (
                        <video
                          loop
                          muted
                          autoPlay
                          playsInline
                          src={
                            list[8]?.asset_url
                              ? list[8]?.asset_url
                              : heroVideoBox
                          }
                          className="first-image"
                          style={{ height: "100%" }}
                        ></video>
                      );
                    } else {
                      return (
                        <img
                          src={list[8]?.asset_url ? list[8]?.asset_url : sample}
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
                  <h5 className="cat-title">BigB Punks</h5>
                  <img
                    src={sample}
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
