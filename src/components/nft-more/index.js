import React, { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import cardImage from "../../images/drops/nft_2.png";

import MoreCard from "./more-card";
import CollectionCard from "./nft-card";

import "./style.scss";
import NFTCard from "../nft-card/index";

const NFTMore = ({
  nftList = [],
  hideNavigation = false,
  hideTitle = false,
}) => {
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

  return (
    <div className="nft-more">
      {!hideTitle && (
        <div className="title">
          More from this artist
          <span className="title-count">({nftList.length})</span>
        </div>
      )}

      <div ref={ref} className="nft-more-content">
        {nftList.map((nft, i) => {
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

          return <CollectionCard key={`nft-more-${i}`} nft={nft} />;
        })}
      </div>

      {!hideNavigation && (
        <>
          <button className="chevron-left-nav" onClick={() => scroll("left")}>
            <BsChevronLeft />
          </button>
          <button className="chevron-right-nav" onClick={() => scroll("right")}>
            <BsChevronRight />
          </button>
        </>
      )}
    </div>
  );
};

export default NFTMore;
