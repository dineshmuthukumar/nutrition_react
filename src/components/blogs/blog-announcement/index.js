import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import dayjs from "dayjs";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { getBlogListApi, getBlogCattApi } from "../../../api/methods";

import { Interweave } from "interweave";

import "../style.scss";

const BlogAnnouncment = ({
  AnnouncementData = {},
  announcementSliderData = [],
  announcementSplitData = [],
}) => {
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

  // const GetSourceImage = async (input) => {
  //   const Filterdata = data?.data?.filter((data) => data.id == input);
  //   if (
  //     Array.isArray(Filterdata[0]?._embedded["wp:featuredmedia"]) &&
  //     Filterdata[0]?._embedded["wp:featuredmedia"].length > 0
  //   ) {
  //     console.log(
  //       Filterdata[0]?._embedded["wp:featuredmedia"]["0"]?.source_url
  //     );
  //     return Filterdata[0]?._embedded["wp:featuredmedia"]["0"]["media_details"][
  //       "sizes"
  //     ]["medium"]["source_url"];
  //   }
  //   return "";
  // };
  console.log(announcementSliderData);
  console.log(announcementSplitData);

  return (
    <section class="bg_green announcement ptb-100">
      <div class="container">
        <div className="row">
          <div className="col-sm-12 py-5">
            <h2 className="sectionTitle">ANNOUNCEMENTS</h2>
          </div>
        </div>
        <div class="row">
          {Object.keys(AnnouncementData).length && (
            <div class="col-xl-9 col-lg-9 col-sm-12 col-12">
              <div className="spl-announcement">
                <a href={"/announcment/" + AnnouncementData?.slug}>
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-sm-6 col-12">
                      <div class="">
                        <div class="f_book">
                          {" "}
                          <img
                            src={
                              AnnouncementData?._embedded["wp:featuredmedia"][
                                "0"
                              ]["source_url"]
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-6 col-12">
                      <div class="">
                        <div class="s_book">
                          <div class="content_book">
                            <span class="cat_1">ANNOUNCEMENT</span>
                            <h2>{AnnouncementData?.title?.rendered}</h2>

                            <div className="announcemet-content">
                              <Interweave
                                content={AnnouncementData?.content?.rendered}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
          {announcementSliderData.length && (
            <div class="col-xl-3 col-lg-3  col-sm-12 col-12">
              {announcementSliderData?.map((item, i) => (
                <a href={"/announcment/" + item?.slug}>
                  <div class="book_xtra d-flex align-items-center">
                    <div className="">
                      <span class="cat_1">ANNOUNCEMENT</span>
                      <h2>
                        {" "}
                        <Interweave content={item?.title?.rendered} />
                      </h2>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
        <div class="row">
          {announcementSplitData.length &&
            announcementSplitData?.map((item, i) => (
              <div class="col-lg-4">
                <a href={"/announcment/" + item?.slug}>
                  <div class="book_bottom">
                    <h2>
                      {" "}
                      <Interweave content={item?.title?.rendered} />
                    </h2>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogAnnouncment;