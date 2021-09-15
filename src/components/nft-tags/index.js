import React from "react";
import Tag from "./tag";
import "./style.scss";

const NFTTags = () => {
  return (
    <div className="nft-tags">
      <div className="nft-tag-title">Tags</div>
      <div className="nft-tag-content mt-4">
        <Tag text="Posters" />
        <Tag text="Amitabh Bachan" />
        <Tag text="Graphic Design" />
        <Tag text="Bollywood" />
        <Tag text="Color" />
        <Tag text="Vintage" />
        <Tag text="India" />
        <Tag text="Limited Edition" />
      </div>
    </div>
  );
};

export default NFTTags;
