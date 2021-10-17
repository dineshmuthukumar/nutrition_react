import React, { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import MoreCard from "./more-card";

import Swiper from "react-id-swiper";
// import "swiper/css/swiper.css";

import "swiper/swiper.scss";
import "./style.scss";

const NFTMore = ({ nftList = [] }) => {
  const ref = useRef(0);

  const params = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className="chevron-left-nav" type="button">
        <BsChevronLeft />
      </button>
    ),
    renderNextButton: () => (
      <button className="chevron-right-nav" type="button">
        <BsChevronRight />
      </button>
    ),
    breakpoints: {
      1920: {
        slidesPerView: 4,
        spaceBetween: 40,
      },  
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  return (
    <div className="nft-more">
      <div className="title">
        More from this artist
        <span className="title-count">({nftList.length})</span>
      </div>
      <div className="nft-more-content">
        <Swiper {...params}>
          {nftList.map((nft) => {
            let label = "",
              time,
              isEnded = false,
              isStarted = false;

            if (new Date(nft.auction_start_time) > new Date()) {
              label = "Starting in";
              time = nft.auction_start_time;
            } else if (new Date(nft.auction_end_time) > new Date()) {
              label = "Ends in";
              time = nft.auction_end_time;
              isStarted = true;
            } else {
              time = nft.auction_end_time;
              label = "Ended at";
              isEnded = true;
            }

            return (
              <div>
                <MoreCard
                  nft={nft}
                  isStarted={isStarted}
                  isEnded={isEnded}
                  time={time}
                  label={label}
                />
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default NFTMore;
