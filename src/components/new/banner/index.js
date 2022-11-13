import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";

import { useHistory } from "react-router-dom";
//import Image from "react-bootstrap/Image";
import { BiArrowBack,BiRightArrowAlt } from "react-icons/bi";

import { Button, Form } from "react-bootstrap";
import { HiOutlineArrowRight } from "react-icons/hi";
import {
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import Banner_1 from "../../../images/new-images/demos/demo-food2/slides/banner_1.jpg";

import Banner_2 from "../../../images/new-images/demos/demo-food2/slides/banner_2.jpg";

import Banner_3 from "../../../images/new-images/demos/demo-food2/slides/banner_2.jpg";


import "./style.scss";

const Banner = ({ bannerContent }) => {
  return (
    <>
      <section className="intro-section">
        {bannerContent?.length > 0 && (
          <OwlCarousel
            className="owl-carousel owl-nav-inside owl-theme row owl-nav-fade intr o-slider animation-slider cols-1 gutter-no owl-nav-arrow"
            margin={20}
            nav
            smartSpeed={500}
            dots={false}
            navContainerClass={"owl-nav"}
            navText={[
              `<img src=https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png  />`,
              `<img src=https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png />`,
            ]}
            responsive={{
              0: {
                items: 1,
              },
              768: {
                items: 1,
              },
              800: {
                items: 1,
              },
            }}
            autoplay
            loop
            autoplayTimeout={2000}
            autoplayHoverPause={true}
            // navText={[
            //   '<i class="fa fa-chevron-left"></i>"',
            //   '<i class="fa fa-chevron-right"></i>'
            // ]}
          >
            {(() => {
              if (bannerContent?.length > 0) {
                return (
                  <>
                    {bannerContent?.map((BannerDetail, key) => {
                      return (
                        <div
                          className={`intro-slide${key} banner banner-fixed`}
                        >
                          <figure>
                            <img
                              src={"http://54.177.7.240" + BannerDetail?.image}
                              alt="intro-banner"
                              width="1903"
                              height="540"
                              intro-section
                            />
                          </figure>
                        </div>
                      );
                    })}
                  </>
                );
              }
            })()}
          </OwlCarousel>
        )}
      </section>
    </>
  );
};

export default Banner;
