import React from "react";
import "./style.scss";

const NFTPropPills = ({ property, propertyType }) => {
  return (
    <div
      className={`chain-pills rounded-pill border border-dark property-pill-box`}
    >
      <div className="first">
        <div className="second rounded-pill border border-dark">
          {propertyType}
        </div>
        <span className="pill-title">{property}</span>
        <span className="pill-description">100% have this trait</span>
      </div>
    </div>
  );
};

export default NFTPropPills;
