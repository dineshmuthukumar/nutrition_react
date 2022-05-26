import React from "react";
import "./style.scss";

const NFTPropPills = ({ title, property }) => {
  return (
    <div className="chain-pills rounded-pill border border-dark property-pill-box">
      <div className="first">
        <div className="second rounded-pill border border-dark">{title}</div>
        <span className="pill-title">{property.value}</span>
        {property.rarity && (
          <span className="pill-description">
            {property.rarity}% have this trait
          </span>
        )}
      </div>
    </div>
  );
};

export default NFTPropPills;
