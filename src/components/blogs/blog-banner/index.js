import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import dayjs from "dayjs";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import blog1 from "../../../images/blog-banner.png";
import blog2 from "../../../images/blog-img1.png";
import blog3 from "../../../images/blog-img2.png";
import blog4 from "../../../images/blog-img3.png";
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
      <section class="banner">
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
      </section>
      <section class="blog-list p-80">
        <div class="container">
          <div class="row">
            {sliderData?.map((item, i) => (
              <div class="col-md-4 col-lg-4 col-sm-4">
                <div class="b-list">
                  <a href={"/blog/" + item?.slug}>
                    <img
                      src={
                        item?._embedded["wp:featuredmedia"]["0"]["source_url"]
                      }
                      class="img-fluid"
                    />
                  </a>
                  <h2>
                    <a href={"/blog/" + item?.slug}>
                      <Interweave content={item?.title?.rendered} />
                    </a>
                  </h2>
                </div>
              </div>
            ))}
            <a href={"/blog-list"}> View More </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogBanner;
