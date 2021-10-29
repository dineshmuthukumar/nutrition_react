import React, { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import MoreCard from "./more-card";

import Swiper from "react-id-swiper";
// import "swiper/css/swiper.css";

import "swiper/swiper.scss";
import "./style.scss";

const NFTMore = ({ nftList = [] }) => {
  const ref = useRef(0);
  const scroll = (type) => {
    var width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const one_rem = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );

    if (type === "left") {
      if (width <= 560) {
        ref.current.scrollLeft += -(width - one_rem);
      } else if (width <= 992 && width > 560) {
        ref.current.scrollLeft += -(width / 2 - one_rem);
      } else if (width <= 1024 && width > 992) {
        ref.current.scrollLeft += -(width / 3 - one_rem);
      } else {
        ref.current.scrollLeft += -(width / 4 - one_rem);
      }
    } else {
      if (width <= 560) {
        ref.current.scrollLeft += width - one_rem;
      } else if (width <= 992 && width > 560) {
        ref.current.scrollLeft += width / 2 - one_rem;
      } else if (width <= 1024 && width > 992) {
        ref.current.scrollLeft += width / 3 - one_rem;
      } else {
        ref.current.scrollLeft += width / 4 - one_rem;
      }
    }
  };

  const info = {
    nft: {
      nft_type: "erc721",
      slug: "mJGgB1R9FbNoXWPr",
      asset_url:
        "https://amitabhapi.guardiannft.in/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--240dd68bc85394a6d347e919675c91d9a0174089/madhushala.png",
      asset_type: "image/png",
      cover_url: "https://amitabhapi.guardiannft.in",
      name: "Madhushala",
      description:
        "Mr. Harivansh Rai Bachchan (1907–2003), father of Mr. Amitabh Bachchan, wrote Madhushala that depicts the wisdom of Madhu - the Temple of Mind (Madhushala), karma, imbibement of knowledge, fulfilment of duties, and expectations of an individual from the society into beautiful verses.\r\n\r\nMadhushala's Rhyme, Rhythm, and Flavour is still fresh in Amitabh's mind. He believed and witnessed the miracles that this purest form of art brings to society. The love and the respect he holds for Mr.Bachchan i...",
      time: "2021-10-29T18:54:54.025Z",
      timed_auction: true,
      auction_start_time: "2021-10-29T07:47:30.000Z",
      auction_end_time: "2021-10-30T13:13:00.000Z",
      top_bid: 13,
    },
    isStarted: true,
    isEnded: false,
    time: "2021-10-30T13:13:00.000Z",
    label: "Ends in",
  };

  return (
    <div className="nft-more">
      <div className="title">
        More from this artist
        <span className="title-count">({nftList.length})</span>
      </div>
      <div ref={ref} className="nft-more-content">
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
            <MoreCard
              nft={nft}
              isStarted={isStarted}
              isEnded={isEnded}
              time={time}
              label={label}
            />
          );
        })}
      </div>
      <button className="chevron-left-nav" onClick={() => scroll("left")}>
        <BsChevronLeft />
      </button>
      <button className="chevron-right-nav" onClick={() => scroll("right")}>
        <BsChevronRight />
      </button>
    </div>
  );
};

export default NFTMore;
