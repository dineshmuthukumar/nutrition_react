import React, { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import MoreCard from "./more-card";
import "./style.scss";

const NFTMore = () => {
  const ref = useRef(0);

  const scroll = (type) => {
    var width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (type === "left") {
      ref.current.scrollLeft += -(width / 1.5);
    } else {
      ref.current.scrollLeft += width / 1.5;
    }
  };

  return (
    <div className="nft-more">
      <div className="title">
        More from this artist
        <span className="title-count">(8)</span>
      </div>
      <div ref={ref} className="nft-more-content">
        <MoreCard />
        <MoreCard />
        <MoreCard />
        <MoreCard />
        <MoreCard />
        <MoreCard />
        <MoreCard />
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
