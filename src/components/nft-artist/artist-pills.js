import React from "react";

import guardianImg from "../../images/guardian-black.png";
import "./style.scss";

const AritstPills = ({ title, value }) => {
  return (
    <div className="artist-pill">
      <img src={guardianImg} />
      <div>
        <div className="pill-title text-secondary">{title}</div>
        <div className="pill-value">{value}</div>
      </div>
    </div>
  );
};

export default AritstPills;
