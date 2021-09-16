import React from "react";

import "./style.scss";

const AritstPills = ({ title, value }) => {
  return (
    <div className="artist-pill">
      <img src="https://picsum.photos/100/100" />
      <div>
        <div className="pill-title text-secondary">{title}</div>
        <div className="pill-value">{value}</div>
      </div>
    </div>
  );
};

export default AritstPills;
