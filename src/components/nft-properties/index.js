import React from "react";
import NFTPropPills from "../nft-prop-pills";

import "./style.scss";

const NFTProperties = ({ properties }) => {
  return (
    <div className="chain-attributes">
      <div className="chain-att-title">Properties</div>
      <div className="chain-att-content mt-2">
        {(() => {
          if (properties) {
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
          }
        })()}
      </div>
    </div>
  );
};

export default NFTProperties;
