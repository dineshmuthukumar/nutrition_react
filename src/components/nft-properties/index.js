import React from "react";
import NFTPropPills from "../nft-prop-pills";

import "./style.scss";

const NFTProperties = ({ properties }) => {
  return (
    <div className="nft-props">
      <div className="nft-props-title">
        Properties
        {properties && (
          <span className="title-count">
            {(() => {
              if (properties && typeof properties === "string") {
                let propertiesData = JSON.parse(properties);
                return `(${Object.keys(propertiesData).length})`;
              } else {
                return `(${Object.keys(properties).length})`;
              }
            })()}
          </span>
        )}
      </div>

      <div className="mt-2 nft-props-content">
        {(() => {
          if (properties && typeof properties === "string") {
            let propertiesData = JSON.parse(properties);
            console.log(propertiesData);
            return Object.keys(propertiesData).map((property) => {
              return (
                <NFTPropPills
                  property={propertiesData[property]}
                  propertyType={property}
                />
              );
            });
          } else {
            return Object.keys(properties).map((property) => {
              return (
                <NFTPropPills
                  property={properties[property]}
                  propertyType={property}
                />
              );
            });
          }
        })()}
      </div>
    </div>
  );
};

export default NFTProperties;
