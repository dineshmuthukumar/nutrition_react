import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import dayjs from "dayjs";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { getBlogListApi, getBlogCattApi } from "../../../api/methods";

import { Interweave } from "interweave";

import "../style.scss";

const BlogBanner = ({ bannerData, sliderData }) => {
  const options = {
    loop: true,
    margin: 10,
    items: 3,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      "<div class='nav-button owl-prev'><img src='https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png' /></div>",
      "<div class='nav-button owl-next'><img src='https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/front-arrow.png' /></div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      {/* <section class="banner">
        <a href={"/blog/" + bannerData?.slug}>
          <img
            src={bannerData?._embedded["wp:featuredmedia"]["0"]["source_url"]}
            class="img-fluid"
          />
        </a>
        <div class="container">
          <div class="banner-content-overlay">
            <div class="post-head">
              <a href={"/blog/" + bannerData?.slug}>
                <span class="blog-title">Blog</span>
              </a>
              <a href={"/blog/" + bannerData?.slug}>
                <span class="blog-date">
                  {dayjs(bannerData?.date).format("MMM D, YYYY")}
                </span>
              </a>
            </div>
            <div class="d-flex">
              <div class="post-title">
                <h3>
                  <a href={"/blog/" + bannerData?.slug}>
                    <Interweave content={bannerData?.title?.rendered} />
                  </a>
                </h3>
              </div>

              <div class="title-desc">
                <Interweave content={bannerData?.content?.rendered} />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section class="ptb-100 bg-dark">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12 order-md-2">
              <a href={"/blog/" + bannerData?.slug}>
                {bannerData?._embedded["wp:featuredmedia"]?.length > 0 && (
                  <img
                    src={
                      bannerData?._embedded["wp:featuredmedia"]["0"][
                        "source_url"
                      ]
                    }
                    class="img-fluid br-5 mt-5"
                  />
                )}
              </a>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 order-md-1">
              <div class="banner_contents p-3 mt-5">
                <p class="text-white">
                  {dayjs(bannerData?.date).format("MMM D, YYYY")}
                </p>
                <h2 class="text-white">
                  <a href={"/blog/" + bannerData?.slug}>
                    <Interweave content={bannerData?.title?.rendered} />
                  </a>
                </h2>
                <p class="mt-4 mb-4 text-white banner-description-blog">
                  <Interweave content={bannerData?.content?.rendered} />
                </p>{" "}
                <a href={"/blog/" + bannerData?.slug} class="mt-3">
                  Read more
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog-list p-80">
        <div class="container">
          <div class="row">
            {sliderData?.map((item, i) => (
              <div class="col-md-4 col-lg-4 col-sm-4">
                <div class="b-list">
                  <a href={"/blog/" + item?.slug}>
                    {item?._embedded["wp:featuredmedia"]?.length > 0 && (
                      <img
                        src={
                          item?._embedded["wp:featuredmedia"]["0"]["source_url"]
                        }
                        class="img-fluid"
                      />
                    )}
                  </a>
                  <h2>
                    <a href={"/blog/" + item?.slug}>
                      <Interweave content={item?.title?.rendered} />
                    </a>
                  </h2>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-center my-5">
              <a href={"/blog/list"} className="blog-view-more">
                {" "}
                View More{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogBanner;
