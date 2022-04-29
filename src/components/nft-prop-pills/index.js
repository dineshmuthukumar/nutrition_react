import React from "react";
import "./style.scss";

const NFTPropPills = ({ property, propertyType }) => {
  return (
    <div className={`chain-pills rounded-pill border border-dark`}>
      <div className="first">
        <div className="second rounded-pill border border-dark">
          {propertyType}
        </div>
        {property}
      </div>
    </div>
  );
};

export default NFTPropPills;
