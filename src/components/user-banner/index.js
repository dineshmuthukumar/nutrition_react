import React from "react";
import "./style.scss";

const UserBanner = ({ image }) => {
  return (
    <>
      <article
        className="user-hero-section"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      ></article>
    </>
  );
};

export default UserBanner;
