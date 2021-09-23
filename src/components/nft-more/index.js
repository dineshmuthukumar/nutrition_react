import React from "react";
import MoreCard from "./more-card";
import "./style.scss";

const NFTMore = () => {
  return (
    <div className="nft-more">
      <div className="title">
        More from this artist
        <span className="title-count">(8)</span>
      </div>
      <div className="nft-more-content">
        <MoreCard />
        <MoreCard />
        <MoreCard />
        <MoreCard />
        <MoreCard />
        <MoreCard />
        <MoreCard />
      </div>
    </div>
  );
};

export default NFTMore;
